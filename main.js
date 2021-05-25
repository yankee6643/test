$("#mainBnr").mouseenter(function(){
    $('.swiper-button-prev').animate({opacity:"1"}, 1000);
    $('.swiper-button-next').animate({opacity:"1"}, 1000);    
}).mouseleave(function(){
    $('.swiper-button-prev').animate({opacity:"0"}, 1000);
    $('.swiper-button-next').animate({opacity:"0"}, 1000);  
});


