$(function(){
    var navbar = $('.navbar');
    $(window).scroll(function(){
        if($(window).scrollTop() <= 40){
       		navbar.css('box-shadow', 'none');
        } else {
          navbar.css('box-shadow', '0 2px 20px rgba(0,0,0,.26)'); 
        }
    });  
})