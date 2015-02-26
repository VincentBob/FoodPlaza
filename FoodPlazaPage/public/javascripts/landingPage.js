


function setDimensions(){
    
    var fensterHoehe = $( window ).height();
    var fensterBreite = $( window ).width();
    
    if(fensterBreite<1100) {
        document.getElementById('advertisementT_2').innerHTML = "";
        document.getElementById('advertisementT_2').style.width='0px';
        document.getElementById('advertisementT_1').style.marginLeft = "0px";
        //document.getElementById('advertisementT_1').innerHTML = "BEWIRB DICH JETZT ALS: ";
    }else{
        //document.getElementById('advertisementT_1').innerHTML = "WERDE EIN TEIL DER FOOD PLAZA FAMILIE ! ";
        //document.getElementById('advertisementT_2').innerHTML = "BEWIRB DICH JETZT ALS: ";
        document.getElementById('advertisementT_2').style.width='18%';
        document.getElementById('advertisementT_1').style.marginLeft = "2%";
    };
    
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

function bHTML() {
    
    var element = document.createElement("p");
    element.innerHTML = '<form method="post" action="/login"><p><div class="loginFormText" style="top:40px;">e-Mail:</div><input type="text" name="email" id="email" placeholder="e-Mail" required="true" class="loginFormTextField" style="top:40px;"/></p><p><div class="loginFormText" style="top:70px;">Passwort:</div><input type="text" name="password" id="password" placeholder="Passwort" required="true" class="loginFormTextField" style="top:70px;"/></p><p><input type="submit" name="login" id="login" class="loginEnterButton" style="top:120px;" value="sign in"/></p><form/><div class="popUpCloseButton" onclick="unLoadLoginForm();">X</div>';
    return element;
    
};

function signupHTML() {
    
    var element = document.createElement("p");
    element.innerHTML = '  <form method="post" action="/signup"><p><div class="loginFormText" style="top:30px;">Name:</div><input type="text" name="firstname" id="firstname" placeholder="Name" required="true" class="loginFormTextField" style="top:30px;"/></p><p><div class="loginFormText" style="top:60px;">Nachname:</div><input type="text" name="lastname" id="lastname" placeholder="Nachname" required="true" class="loginFormTextField" style="top:60px;"></p><p><div class="loginFormText" style="top:90px;">e-Mail:</div><input type="text" name="email" id="email" placeholder="e-Mail" required="true" class="loginFormTextField" style="top:90px;"></p><p><div class="loginFormText" style="top:120px;">Mobilnummer:</div><input type="text" name="mobile" id="mobile" placeholder="Mobilnummer" required="true" class="loginFormTextField" style="top:120px;"></p><p><div class="loginFormText" style="top:150px;">Passwort:</div><input type="text" name="password" id="password" placeholder="Passwort" required="true" class="loginFormTextField" style="top:150px;"></p><p><div class="loginFormText" style="top:180px;">* Passwort:</div><input type="text" name="password_2" id="password_2" placeholder="* Passwort" required="true" class="loginFormTextField" style="top:180px;"></p>    <p><div class="loginFormText" style="top:210px;">Straße:</div><input type="text" name="street" id="street" placeholder="Straße" required="true" class="loginFormTextField" style="top:210px;"></p><p><div class="loginFormText" style="top:240px;">Hausnummer:</div><input type="text" name="housenumber" id="housenumber" placeholder="Hausnummer" required="true" class="loginFormTextField" style="top:240px;"></p><p><div class="loginFormText" style="top:270px;">Postleitzahl:</div><input type="text" name="postalcode" id="postalcode" placeholder="Postleitzahl" required="true" class="loginFormTextField" style="top:270px;"></p><p><div class="loginFormText" style="top:300px;">Stadt:</div><input type="text" name="city" id="city" placeholder="Stadt" required="true" class="loginFormTextField" style="top:300px;"></p><p><input class="loginEnterButton" type="submit" name="signup" id="signup" value="Sign Up" style="top:340px; "/></p></form><div class="popUpCloseButton" onclick="unLoadLoginForm();">X</div>';
    return element;
    
};

function registerHTML() {
    
    var element = document.createElement("p");
    
    element.innerHTML = '    <div class="signUpDiv"><div class="signUpButton" id="foodPlazaLogin" onClick="loadsignupForm()">Registrieren</div><div id="facebookLogin" class="signUpButton">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sign in with Facebook</div><div id="twitterLogin" class="signUpButton">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sign in with Twitter</div><div id="googleLogin" class="signUpButton">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sign in with Google</div></div><div class="popUpCloseButton" onclick="unLoadLoginForm();">X</div>';
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

window.onload = setTimeout(function() { signInButtonOnLoad(); }, 1200);//signInButtonOnLoad;

















