

var fensterHoehe = 0;
var fensterBreite = 0;


function setDimensions(){
    
    fensterHoehe = $( window ).height();
    fensterBreite = $( window ).width();
    
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        
        document.getElementById('bgvid').remove();
        document.getElementById('macBook').remove();
        document.getElementById('restaurantButton').remove();
        document.getElementById('driverButton').remove();
        
        $('.headerLineRight').css('border-bottom-width', '0px');
        $('.headerLineLeft').css('border-bottom-width', '0px');
        $('.header').css('border-bottom-width', '1px');
        $('.mainLogo').css('opacity', '0');
        $('.mainLogo').css('height', '0');
        
        $('.registerButton').css('opacity', '1');
        $('.sloganDiv').css('opacity', '1');
        
        $('#contentText_1').css({opacity: 1});
        $('#contentText_2').css({opacity: 1});
        $('#contentText_3').css({opacity: 1});
        $('#contentText_4').css({opacity: 1});
        
        if(screen.width<768){
            $('.sloganDiv').text("");
        }
        
        
    }else{
        scrollAnimations();
        
        if ($(window).scrollTop()<610) {
            
            $('#contentText_1').css({opacity: 1});
            $('#contentText_2').css({opacity: 0});
            $('#contentText_3').css({opacity: 0});
            $('#contentText_4').css({opacity: 0});
            
        } else if ($(window).scrollTop() > 1800) {
            
            $('#contentText_1').css({opacity: 0});
            $('#contentText_2').css({opacity: 0});
            $('#contentText_3').css({opacity: 0});
            $('#contentText_4').css({opacity: 1});
            
        }
    }
    
};

function resetFormPosition () {
    
    $('#loginFormDiv').css("position", "fixed");
    $('#loginFormDiv').css("background-color", "red");
    
}

function animateOpacity(id,speed,opac) {
    
    
    $('.' + id).animate({opacity:opac} , { duration: speed, queue: false });

}

function animateOpacityWithID(id,speed,opac) {
    
    $('#' + id).animate({opacity:opac} , { duration: speed, queue: false });
}


function loadFrom(id) {

    if( (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {
        $('.scrollWrapper').css('height','100vh');
    };
    
    animateOpacity('formElements',0,0);

    $('#loginFormDiv').css("visibility", "hidden");
    $('#loginFormDiv').css("display", "none");
    
    $('#registerFormDiv').css("visibility", "hidden");
    $('#registerFormDiv').css("display", "none");
        
    $('#OrderFormDiv').css("visibility", "hidden");
    $('#OrderFormDiv').css("display", "none");    
    
    $('#' + id ).css("visibility", "visible");
    $('#' + id ).css("display", "inline");
    
    animateOpacity('formElements',1700,1);

}


function unLoadForm(id){
    
    if( (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))  ) {
        $('.scrollWrapper').css('height','100%');
    };
    
    animateOpacity('formElements',800,0);
    animateOpacity('loginFormDiv',1000,0);
    
    setTimeout(function() { $('#' + id).css("visibility", "hidden"); }, 1000);
    setTimeout(function() { $('#' + id).css("display", "none"); }, 1000);
    setTimeout(function() { animateOpacity('loginFormDiv',0,1); }, 1010);
   
};

function signInButtonOnLoad() {
    
    animateOpacity('registerButton',1700,1);
    animateOpacity('sloganDiv',1700,1);

}

function screenAnimation() {

    document.getElementById("macScreen").style.backgroundImage = "url('/images/screen_2.jpg')";
    $('#macScreen').css("background-position", "0px 0px");
    animateOpacityWithID('macScreen',800,1);
    
    setTimeout(function() {
               document.getElementById("macScreen").style.backgroundImage = "url('/images/scrollScreen.jpg')";
               }, 2000);
    
    setTimeout(function() {

               $('#macScreen').animate({
                                'border-spacing': -285
                                },
                                {
                                step: function(now, fx) {
                                $(fx.elem).css("background-position", "0px "+now+"px");
                                },
                                duration: 1000
                                });
               
               
               }, 3000);
    
    setTimeout(function() {

               $('#macScreen').animate({
                                       'border-spacing': -250
                                       },
                                       {
                                       step: function(now, fx) {
                                       $(fx.elem).css("background-position", "0px "+( now-285 )+"px");
                                       },
                                       duration: 1000
                                       });
               
               }, 5000);
    
    setTimeout(function() {
               

               $('#macScreen').animate({
                                       'border-spacing': -255
                                       },
                                       {
                                       step: function(now, fx) {
                                       $(fx.elem).css("background-position", "0px "+( now-535 )+"px");
                                       },
                                       duration: 1000
                                       });
               
               }, 7000);
    
    setTimeout(function() {
               animateOpacityWithID('macScreen',400,0);
               }, 10000);
    
}


function setOpacity(x) {
    
    if ( x < ( fensterHoehe/2 + 660 ) ) {
        
        x = x - ( fensterHoehe/2 + 310 );
        if ( x >= 0 ) {
            
            $('#contentText_1').css({opacity: ((300-x)/300)});
            $('#contentText_2').css({opacity: (x/300)});
            $('#contentText_3').css({opacity: 0});
            $('#contentText_4').css({opacity: 0});
            
        } else {
            
            $('#contentText_1').css({opacity: 1});
            $('#contentText_2').css({opacity: 0});
            $('#contentText_3').css({opacity: 0});
            $('#contentText_4').css({opacity: 0});
            
        }
        
    } else if (  x < ( fensterHoehe/2 + 1060 ) ) {
        
        x = x - ( fensterHoehe/2 + 710 );
        $('#contentText_1').css({opacity: 0});
        $('#contentText_2').css({opacity: ((300-x)/300)});
        $('#contentText_3').css({opacity: (x/300)});
        $('#contentText_4').css({opacity: 0});
        
    } else if ( x < ( fensterHoehe/2 + 1460 ) ) {
        
        x = x - ( fensterHoehe/2 + 1110 );
        $('#contentText_1').css({opacity: 0});
        $('#contentText_2').css({opacity: 0});
        $('#contentText_3').css({opacity: ((300-x)/300)});
        $('#contentText_4').css({opacity: (x/300)});
        
    };
};

function fadeInContent(x) {
 
    if ( x > fensterHoehe/2 + 1800 &&  x < fensterHoehe/2 + 2200 ) {
        
        x = x - ( fensterHoehe/2 + 1800 );
    
        $('#cityContent').css('background-color','rgba('+ Math.round((x*255)/400) +','+ Math.round((x*255)/400) +','+ Math.round((x*255)/400) +', '+ ((x/400) + 0.82) +')');
        $('#cityCenter').css('color','rgba(28,28,28,'+ (x/400) +')');
        
    } else if ( x < fensterHoehe/2 + 1800 ) {
     
        $('#cityContent').css('background-color','rgba(0,0,0,0.82)');
        $('#cityCenter').css('color','rgba(28,28,28,0)');
        
    } else if ( x > fensterHoehe/2 + 2200 ) {
      
        $('#cityContent').css('background-color','rgba(255,255,255,1.0)');
        $('#cityCenter').css('color','rgba(28,28,28,1)');
        
    };
};

var headerState = 1;

function scrollAnimations(){
    
    if ( $(window).scrollTop() <= ( fensterHoehe/2 + 310 ) ) {
        
        $('.macBook').css({position: 'relative', top: '140px', left: '0px'});
        
    } else if ( $(window).scrollTop() <= fensterHoehe/2 + 1510 ) {
    //} else if ( $(window).scrollTop() <= fensterHoehe/2 + 1110 ) {
        
        $('.macBook').css({position: 'fixed'});
        $('.macBook').css({position: 'fixed', left: ( fensterBreite - $( '#centerDiv1' ).width() )/2 + 'px', top: ((fensterHoehe/2) - 130 ) + 'px' });
        setOpacity($(window).scrollTop());
        fadeInContent($(window).scrollTop());
        
    } else {
        
        $('.macBook').css({position: 'relative', top: '1340px', left: '0px'});
        fadeInContent($(window).scrollTop());
        
    }
    
    if ( $(window).scrollTop() <= ( fensterHoehe/2 ) && headerState == 2 ) {
        
        $('.mainLogo').css('height', '230px');
        $('.header').animate({top:0},{queue: false, duration: 350, easing: 'linear',
                             complete: function(){
                             
                             $('.header').css('border-bottom-width', '0px');
                             $('.headerLineRight').css('border-bottom-width', '1px');
                             $('.headerLineLeft').css('border-bottom-width', '1px');
                             
                             }
                             });
        
        $('.mainLogo').animate({opacity:1}, 900, 'linear',
                             function(){
                             });
        
        headerState = 1;
        
    } else if ( $(window).scrollTop() > ( fensterHoehe/2 ) && headerState == 1 ) {
        
        $('.mainLogo').animate({opacity:0}, 350, 'linear',
                                    function(){
                                    $('.mainLogo').css('height', '0px');
                                    });
        
        $('.headerLineRight').css('border-bottom-width', '0px');
        $('.headerLineLeft').css('border-bottom-width', '0px');
        $('.header').css('border-bottom-width', '1px');
        
        headerState = 2;
        
    }

};

$( document ).ready(function(){
                    
                    setDimensions();
                    
                    });


$( window ).resize(function(){
                   
                   setDimensions();
                   
                   });


window.onload = setTimeout(function() {
                           
                           if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                                // DO SOMETHING
                           }else{
                                setDimensions(),
                                signInButtonOnLoad(),
                                screenAnimation()
                           }
                           
                           }, 1200);


window.setInterval(function () {
                   
                   screenAnimation();
                   
                   }, 13000);


window.onscroll = function windowScrolled(){
    
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        // DO SOMETHING
    }else{
        scrollAnimations();
    }
    
};


window.onload = function dim(){
    
    setDimensions();

};












