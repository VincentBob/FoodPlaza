


function changeCounter (counter, number) {
    
    document.getElementById("back_" + counter).innerHTML = number;
    document.getElementById("backgDigit_" + counter).innerHTML = number;
    document.querySelector('#flip-container_' + counter).classList.toggle('hover');
    
    setTimeout(function() { document.getElementById("front_" + counter).innerHTML = number; }, 300);
    setTimeout(function() { document.getElementById("backgDigitBottom_" + counter).innerHTML = number; }, 300);
    
    setTimeout(function() { document.getElementById("front_" + counter).style.opacity = '0'; }, 600);
    setTimeout(function() { document.getElementById("back_" + counter).style.opacity = '0'; }, 600);
        
    setTimeout(function() { document.querySelector('#flip-container_' + counter).classList.toggle('hover'); }, 600);
    
    setTimeout(function() { document.getElementById("front_" + counter).style.opacity = '1'; }, 990);
    setTimeout(function() { document.getElementById("back_" + counter).style.opacity = '1'; }, 990);

}

var old_W1 = -1;
var old_h1 = -1;
var old_m1 = -1;
var old_s1 = -1;

var old_W2 = -1;
var old_h2 = -1;
var old_m2 = -1;
var old_s2 = -1;

var fh1 = 1;
var fh2 = 9;

var fm1 = 5;
var fm2 = 9;

var fs1 = 5;
var fs2 = 9;

function startTime() {
    
    var today=new Date();
    
    var daysFromMonths = (6 - today.getMonth())*31;
    var Days = daysFromMonths - today.getDate();

    var W1 = Number(String('00' + Days).substr(-2,1));
    var W2 = Number(String('00' + Days).substr(-1,1));
    
    //var W1 = Number(String('00' + today.getMonth()).substr(-2,1));
    //var W2 = Number(String('00' + today.getMonth()).substr(-1,1));
    
    var h1 = Number(String('00' + today.getHours()).substr(-2,1));
    var h2 = Number(String('00' + today.getHours()).substr(-1,1));
    
    var m1 = Number(String('00' + today.getMinutes()).substr(-2,1));
    var m2 = Number(String('00' + today.getMinutes()).substr(-1,1));
    
    var s1 = Number(String('00' + today.getSeconds()).substr(-2,1));
    var s2 = Number(String('00' + today.getSeconds()).substr(-1,1));
    
    
    if (old_W1 != W1) {
        changeCounter('01',W1);
        old_W1 = W1;
    }
    
    if (old_W2 != W2) {
        changeCounter('02',W2);
        old_W2 = W2;
    }
    
    if (old_h1 != h1) {
        //changeCounter(1,9);
        changeCounter(1,fh1-h1);
        old_h1 = h1;
    }
    
    if (old_h2 != h2) {
        //changeCounter(2,9);
        changeCounter(2,fh2-h2);
        old_h2 = h2;
    }
    
    if (old_m1 != m1) {
        changeCounter(3,fm1-m1);
        old_m1 = m1;
    }
    
    if (old_m2 != m2) {
        changeCounter(4,fm2-m2);
        old_m2 = m2;
    }
    
    if (old_s1 != s1) {
        changeCounter(5,fs1-s1);
        old_s1 = s1;
    }
    
    if (old_s2 != s2) {
        changeCounter(6,fs2-s2);
        old_s2 = s2;
    }
    

    var t = setTimeout(function(){startTime()},1000);
};

window.onload = function startCounter(){
    
    //changeCounter(1,9);
    //changeCounter(2,9);
    startTime();
    
};