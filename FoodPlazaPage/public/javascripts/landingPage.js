

var fensterHoehe = 0;
var fensterBreite = 0;


function setDimensions(){
    
    fensterHoehe = $( window ).height();
    fensterBreite = $( window ).width();
    
    setMac();
    
    if (  $(window).scrollTop() <= ( fensterHoehe/2 + 310 ) ) {
        
        $('#contentText_2').css({opacity: '0'});
        $('#contentText_3').css({opacity: '0'});
    } else if ( $(window).scrollTop() <= ( fensterHoehe/2 + 610 ) ) {
        
        $('#contentText_3').css({opacity: '0'});
    }

    $('.contentText').css({left: ( fensterBreite - $( '#centerDiv1' ).width() )/2 + 590 + 'px', width: 350 + 'px'});
    
    if (fensterHoehe<660) {
        
        $('.signUpDiv').css('top','260px');
        
    } else {
        
        $('.signUpDiv').css('top','40vh');
        
    }
    
};


function buttonOver(id) {
    
    document.getElementById(id).style.width = '250px';
    document.getElementById(id).style.backgroundImage = "url('/images/" + id + "LB.jpg')";
}


function buttonOut(id) {
    
    document.getElementById(id).style.width = '50px';
    document.getElementById(id).style.backgroundImage = "url('/images/" + id + ".jpg')";

}


function signOver(id) {

    document.getElementById(id + 'Login').style.backgroundImage = "url('/images/" + id + "Soon.jpg')";
    document.getElementById(id + 'Login').innerHTML = "";
}


function signOut(id) {
    
    var placeholder = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
    document.getElementById(id + 'Login').style.backgroundImage = "url('/images/" + id + "L.jpg')";
    document.getElementById(id + 'Login').innerHTML = placeholder + "Sign in with " + id;
    
}

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


$( document ).ready(function(){
                    setDimensions();
                    });


$( window ).resize(function(){
                    setDimensions();
                   mouseEvent('facebook');
                    });


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
    //background-attachment:fixed;
    document.getElementById("macScreen").style.backgroundImage = "url('/images/screen_2.jpg')";
    //document.getElementById("macScreen").style.backgroundPositionY = "0";
    $('#macScreen').css("background-position", "0px 0px");
    animateOpacityWithID('macScreen',800,1);
    setTimeout(function() {
               document.getElementById("macScreen").style.backgroundImage = "url('/images/scrollScreen.jpg')";
               }, 2000);
    
    setTimeout(function() {
               /*
               $('#macScreen').css("background-position", "0px -285px");
               $('#macScreen').animate({ backgroundPositionY: "-285px" }, 1000, 'linear',
               function(){});
               */
               
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
               
               //$('#macScreen').animate({ backgroundPositionY: "-535px" }, 1000, 'linear',
                 //                      function(){});
               
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
               
               //$('#macScreen').animate({ backgroundPositionY: "-790px" }, 1000, 'linear',
                 //                      function(){});
               
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
    
    if ( x < ( fensterHoehe/2 + 610 ) ) {
        
        x = x - ( fensterHoehe/2 + 310 );
        $('#contentText_1').css({opacity: ((300-x)/300)});
        $('#contentText_2').css({opacity: (x/300)});
        
    } else if (  x < ( fensterHoehe/2 + 1010 ) ) {
        
        x = x - ( fensterHoehe/2 + 710 );
        $('#contentText_2').css({opacity: ((300-x)/300)});
        $('#contentText_3').css({opacity: (x/300)});
    };
};

function fadeInContent(x) {
 
    if ( x > fensterHoehe/2 + 1400 &&  x < fensterHoehe/2 + 1800 ) {
        
        x = x - ( fensterHoehe/2 + 1400 );
    
        $('#cityContent').css('background-color','rgba('+ Math.round((x*255)/400) +','+ Math.round((x*255)/400) +','+ Math.round((x*255)/400) +', '+ ((x/400) + 0.82) +')');
        $('#cityCenter').css('color','rgba(28,28,28,'+ (x/400) +')');
        
    } else if ( x < fensterHoehe/2 + 1400 ) {
     
        $('#cityContent').css('background-color','rgba(0,0,0,0.82)');
        $('#cityCenter').css('color','rgba(28,28,28,0)');
    } else {
      
        $('#cityContent').css('background-color','rgba(255,255,255,1.0)');
        $('#cityCenter').css('color','rgba(28,28,28,1)');
    };
};

function setMac(){
    
    if ( $(window).scrollTop() <= ( fensterHoehe/2 + 310 ) ) {
        
        $('.macBook').css({position: 'relative', top: '150px', left: '0px'});
    } else if ( $(window).scrollTop() <= fensterHoehe/2 + 1100 ) {
        
        $('.macBook').css({position: 'fixed'});
        $('.macBook').css({position: 'fixed', left: ( fensterBreite - $( '#centerDiv1' ).width() )/2 + 'px', top: ((fensterHoehe/2) - 110 ) + 'px' });
        setOpacity($(window).scrollTop());
        fadeInContent($(window).scrollTop());
    } else {

        $('.macBook').css({position: 'relative', top: '940px', left: '0px'});
        fadeInContent($(window).scrollTop());
    }

};


window.onload = setTimeout(function() {
                           setDimensions(),
                           signInButtonOnLoad(),
                           screenAnimation()
                           }, 1200);


window.setInterval(function () {
                   screenAnimation();
                   }, 13000);


window.onscroll = function windowScrolled(){
    
    setMac();
};















