function ibg(){

    $.each($('.ibg'), function(index, val) {
    if($(this).find('img').length>0){
    $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
    }
    });
    }
ibg();

$('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('menu-btn_active');
    $('.menu__body').toggleClass('active');
  });
  
if($('.slider__body').length>0){
    $('.slider__body').slick({
    dots:true,
    arrows:false,
    accessibility:false,
    dots:true,
    slidesToShow:1,
    autoplay:true,
    adaptiveyHeight:true,
    speed:1000,
    autoplaySpeed:3000,
    nextArrow: ' <button type="button" class="slick-next"></button>',
    prevArrow: ' <button type="button" class="slick-prev"></button>',
    // responsive:[
    //     {
    //         breakpoint: 768,
    //         settings: {
    //             slidesToShow:1
    //         }
    //     },
    //     {
    //         breakpoint: 550,
    //         settings: {
    //             slidesToShow:1
    //         }
    //     }
    // ]
});  
}
