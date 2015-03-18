
var lastElement = null;
var scrollStatus = 0;
var  scrollPosition = $('html, body').offset().top;




// Text Unter Icons

function openFooterSectionR(elementId) {
    if (lastElement != null) {
        document.getElementById('HR' + lastElement).style.opacity = "0.3";
        $('#footerSectionR_' + lastElement).animate({ opacity: "0"}, { duration: 250, queue: false });
    }
    document.getElementById('HR' + elementId ).style.opacity = "1.0";
    $('#footerSectionR_' + elementId ).animate({ opacity: "1"}, { duration: 250, queue: false });

    lastElement = elementId;
    
    
    if( scrollStatus === 0){
        $('html, body').animate({scrollTop:450}, 500);
        scrollStatus=1;
    }else{}
    
    $(".restaurantCenter").height(550);
};


// Mouseover Funktionen

function MouseOver (id) {
    document.getElementById('HR' + id ).style.opacity = "1"
};
function MouseOut (id) {
    if(lastElement === id){
        
    }else{
        document.getElementById('HR' + id ).style.opacity = "0.3"
    }
};




// alternative Start Funktion 1

function animationRestaurant2(){
    for( var i = 0; i<=4; i++){
        
        $('#HR' + i ).animate({ opacity: "1"},1000, function(){
                        
                             $('#HR1').animate({ opacity: "0.2"}, { duration: 600, queue: false });
                             $('#HR2').animate({ opacity: "0.2"}, { duration: 600, queue: false });
                             $('#HR3').animate({ opacity: "0.2"}, { duration: 600, queue: false });
                             $('#HR4').animate({ opacity: "0.2"}, { duration: 600, queue: false });
                                                       });
    }
    setTimeout(function() {
               startRestaurant();
               }, 1700);
}





// Start Funktion 2

function startRestaurant(){
    $('#HR1').animate({ opacity: "1"}, 50, function(){
                $('#HR1').animate({ opacity: "0.3"}, 50, function(){});
                $('#HR2').animate({ opacity: "1"}, 50, function(){
                            $('#HR2').animate({ opacity: "0.3"}, 50, function(){});
                            $('#HR3').animate({ opacity: "1"}, 50, function(){
                                        $('#HR3').animate({ opacity: "0.3"}, 50, function(){});
                                        $('#HR4').animate({ opacity: "1"}, 50, function(){
                                                    $('#HR4').animate({ opacity: "0.3"}, 50, function(){});
                                                         });
                                             });
                                 });
                     });
}



// donIcon Pulsierend

function downIcon(){
    var interval = setInterval(function () {
                               $('#downIcon').animate({ opacity: "1"},800, function(){
                                                      $('#downIcon').animate({ opacity: "0.1"}, { duration: 800, queue: false });
                                                      });
                               }, 1600);
}

// Down Icon Scroll Down

function scrollDownRestaurant(){
    $('html, body').animate({scrollTop:1200}, 600);
}





