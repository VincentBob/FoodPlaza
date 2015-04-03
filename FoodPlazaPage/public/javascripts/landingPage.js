

var fensterHoehe = 0;
var fensterBreite = 0;


function setDimensions(){
    
    fensterHoehe = $( window ).height();
    fensterBreite = $( window ).width();
    
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        
        document.getElementById('bgvid').remove();
        document.getElementById('macBook').remove();
        
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

function animateOpacity(id,speed,opac) {
    
    $('.' + id).animate({opacity:opac}, speed, 'linear',
                           function(){
                           });
}

function animateOpacityWithID(id,speed,opac) {
    
    $('#' + id).animate({opacity:opac}, speed, 'linear',
                        function(){
                        });
}



function bHTML() {
    
    var element = document.createElement("p");
    element.innerHTML = '<form method="post" action="/login"><p><div class="loginFormText" style="top:40px;">e-Mail:</div><input type="email" name="email" id="email" placeholder="e-Mail" required="true" class="loginFormTextField" style="top:40px;"/></p><p><div class="loginFormText" style="top:70px;">Passwort:</div><input type="password" name="password" id="password" placeholder="Passwort" required="true" class="loginFormTextField" style="top:70px;"/></p><p><input type="submit" name="login" id="login" class="loginEnterButton" style="top:120px;" value="sign in"/></p><form/><div class="popUpCloseButton" onclick="unLoadLoginForm();">X</div>';
    return element;
    
};

function signupHTML() {
    
    var element = document.createElement("p");
    element.innerHTML = '<form method="post" action="/signup"><p><div class="loginFormText" style="top:30px;">Name:</div><input type="text" name="firstname" id="firstname" placeholder="Name" required="true" class="loginFormTextField" style="top:30px;"/></p><p><div class="loginFormText" style="top:60px;">Nachname:</div><input type="text" name="lastname" id="lastname" placeholder="Nachname" required="true" class="loginFormTextField" style="top:60px;"></p><p><div class="loginFormText" style="top:90px;">e-Mail:</div><input type="email" name="email" id="email" placeholder="e-Mail" required="true" class="loginFormTextField" style="top:90px;"></p><p><div class="loginFormText" style="top:120px;">Mobilnummer:</div><input type="tel" name="mobile" id="mobile" placeholder="Mobilnummer" required="true" class="loginFormTextField" style="top:120px;"></p><p><div class="loginFormText" style="top:150px;">Passwort:</div><input type="password" onchange="if(this.checkValidity()) form.password_2.pattern = this.value;"  name="password" id="password" placeholder="Passwort" required="true" class="loginFormTextField" style="top:150px;"></p><p><div class="loginFormText" style="top:180px;">* Passwort:</div><input type="password" name="password_2" id="password_2" title="Passwort Bestätigung stimmt nicht überein!" placeholder="* Passwort" required="true" class="loginFormTextField" style="top:180px;"></p>    <p><div class="loginFormText" style="top:210px;">Straße:</div><input type="text" name="street" id="street" placeholder="Straße" required="true" class="loginFormTextField" style="top:210px;"></p><p><div class="loginFormText" style="top:240px;">Hausnummer:</div><input type="text" name="housenumber" id="housenumber" placeholder="Hausnummer" required="true" class="loginFormTextField" style="top:240px;"></p><p><div class="loginFormText" style="top:270px;">Postleitzahl:</div><input type="number" name="postalcode" id="postalcode" placeholder="Postleitzahl" required="true" class="loginFormTextField" style="top:270px;"></p><p><div class="loginFormText" style="top:300px;">Stadt:</div><input type="text" name="city" id="city" placeholder="Stadt" required="true" class="loginFormTextField" style="top:300px;"></p><p><input class="loginEnterButton" type="submit" name="signup" id="signup" value="Sign Up" style="top:340px; "/></p></form><div class="popUpCloseButton" onclick="unLoadLoginForm();">X</div>';
    return element;

    
};

function registerHTML() {
    
    var element = document.createElement("p");
    
    element.innerHTML = '<div class="signUpDiv"><div class="signUpButton" id="foodPlazaLogin" onClick="loadsignupForm()">Registrieren</div><div id="facebookLogin" class="signUpButton">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sign in with Facebook</div><div id="twitterLogin" class="signUpButton">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sign in with Twitter</div><div id="googleLogin" class="signUpButton">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sign in with Google</div></div><div class="popUpCloseButton" onclick="unLoadLoginForm();">X</div>';
    return element;
    
};

function loadLoginForm(){
    
    document.getElementById("loginFormDiv").innerHTML = "";
    document.getElementById("loginFormDiv").style.height="200px";
    document.getElementById("loginFormDiv").style.opacity="1";
    document.getElementById("loginFormDiv").style.top="50%";
    document.getElementById("loginFormDiv").style.marginTop="-100px";
    
    var theDiv = document.getElementById("loginFormDiv");
    theDiv.appendChild(bHTML());
    
    animateOpacity('loginFormText',1700,1);
    animateOpacity('loginEnterButton',1700,1);
    animateOpacity('loginFormTextField',1700,1);
    animateOpacity('popUpCloseButton',1700,1);
    
};

function unLoadLoginForm(){
    
    animateOpacity('loginFormText',800,0);
    animateOpacity('loginEnterButton',800,0);
    animateOpacity('loginFormTextField',800,0);
    animateOpacity('popUpCloseButton',800,0);
    
    setTimeout(function() { document.getElementById("loginFormDiv").style.height="0px"; }, 900);
    setTimeout(function() { document.getElementById("loginFormDiv").innerHTML = ""; }, 900);
    setTimeout(function() { animateOpacity('loginFormDiv', 800,0); }, 100);
};

function loadsignupForm() {
    
    document.getElementById("loginFormDiv").innerHTML = "";
    document.getElementById("loginFormDiv").style.height="410px";//"50vh";
    document.getElementById("loginFormDiv").style.opacity="1";
    document.getElementById("loginFormDiv").style.top="50%";
    document.getElementById("loginFormDiv").style.marginTop="-205px";//"-25vh";
    
    var theDiv = document.getElementById("loginFormDiv");
    theDiv.appendChild(signupHTML());
    
    animateOpacity('loginFormText',1700,1);
    animateOpacity('loginEnterButton',1700,1);
    animateOpacity('loginFormTextField',1700,1);
    animateOpacity('popUpCloseButton',1700,1);
    
}

function openSignUpDiv() {
    
    document.getElementById("loginFormDiv").innerHTML = "";
    document.getElementById("loginFormDiv").style.height="410px";//"50vh";
    document.getElementById("loginFormDiv").style.opacity="1";
    document.getElementById("loginFormDiv").style.top="50%";
    document.getElementById("loginFormDiv").style.marginTop="-205px";//"-25vh";
    
    var theDiv = document.getElementById("loginFormDiv");
    theDiv.appendChild(registerHTML());
    
    animateOpacity('signUpButton',1700,1);
    animateOpacity('popUpCloseButton',1700,1);
    
}

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















