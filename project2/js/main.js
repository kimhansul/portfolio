const familyBtn=document.querySelector('.family_site');
const hollyBtn=document.querySelector('.hollys_coffee');

familyBtn.addEventListener('click', function(){
    hollyBtn.classList.toggle('famlybtnActice');
});

const hd=document.querySelector('#header');
window.addEventListener('scroll',function(){
    let scrolling=this.window.scrollY;
    console.log(scrolling);
    if(scrolling>50){
        hd.classList.add('active_fixed');
    }
    else{
        hd.classList.remove('active_fixed');
    }
}, false);

$('.web_banner').bxSlider({
    auto: true,
    prevSelector: '.main_banner .showcase_inner a.main_banner_prevbtn',
    nextSelector: '.main_banner .showcase_inner a.main_banner_nextbtn',
});
$('.mobile_banner').bxSlider({
    auto: true,
    prevSelector: '.main_banner .showcase_inner a.main_banner_prevbtn',
    nextSelector: '.main_banner .showcase_inner a.main_banner_nextbtn',
})
$('.best_menu_slider').slick({
    infinite: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '.best_menu_wrap .best_menu_btn a.prevbtn',
    nextArrow: '.best_menu_wrap .best_menu_btn a.nextbtn',
    responsive: [
        {
            breakpoint: 369,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
})
$('.youtube_slider').slick({
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '.youtube_wrap .youtube_btn_wrap a.prevbtn',
    nextArrow: '.youtube_wrap .youtube_btn_wrap a.nextbtn',
})