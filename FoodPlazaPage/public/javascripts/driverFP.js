


function animateHeightD(aClass, height, time) {
    
    $(aClass).animate({height:height}, time, 'linear',
                            function(){
                            });
}

function animateOpacityD(aClass, opacity, time) {
    
    $(aClass).animate({opacity:opacity}, time, 'linear',
                           function(){
                           });
}


function openFormSlide(){
    
    
    
    $('.formItem').css('height','30');
    $('.formText').css('height','30');
    
    animateHeightD('#sliderDiv', 600, 300);
    animateHeightD('.sliderCloseButton', 50, 300);
    animateHeightD('.sliderSubmitButton', 40, 300);
    
    animateOpacityD('.formItem', 1, 1700);
    animateOpacityD('.formText', 1, 1700);
    animateOpacityD('.sliderCloseButton', 1, 1700);
    animateOpacityD('.sliderSubmitButton', 1, 1700);
};


function closeFormSlide(){
    
    animateOpacityD('.sliderCloseButton', 0, 500);
    animateOpacityD('.sliderSubmitButton', 0, 500);
    
    animateOpacityD('.formItem', 0, 500);
    animateOpacityD('.formText', 0, 500);
    
    setTimeout(function() { slideBack(); }, 900);

};


function slideBack() {

    $('.formItem').css('height','0');
    $('.formText').css('height','0');
    
    $('.sliderCloseButton').css('height','0');
    $('.sliderSubmitButton').css('height','0');
    
    $('#sliderDiv').animate({height:'0'}, 300, 'linear',
                            function(){
                            });
};


var lastElement = null;
//var lastElement = 1;

function openFooterSection(elementId) {
    if (lastElement != null) {
        document.getElementById('H' + lastElement).style.opacity = "0.3";
        $('#footerSection_' + lastElement).animate({ opacity: "0"}, { duration: 500, queue: false });
    }
    document.getElementById('H' + elementId ).style.opacity = "1.0";
    $('#footerSection_' + elementId ).animate({ opacity: "1"}, { duration: 500, queue: false });
    
    lastElement = elementId;
};




function MouseOver (id) {
    document.getElementById('H' + id ).style.opacity = "1"
};
function MouseOut (id) {
    if(lastElement === id){
        
    }else{
        document.getElementById('H' + id ).style.opacity = "0.3"
    }
};

