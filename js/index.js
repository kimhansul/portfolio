const gomain=$('.header .logo a');
gomain.click(function(e){
    e.preventDefault();
    let mainoffset=$('.container>div#main').offset().top;
    $('html, body').animate({scrollTop:mainoffset},1000,'easeOutCirc');
});

const gomenu=$('.header ul>li');
gomenu.click(function(e){
    e.preventDefault();
    let target=$(this);
    let index=target.index();
    let section=$('.container>div').eq(index+1);
    console.log(section);
    let offset=section.offset().top;
    $('html, body').animate({scrollTop: offset},1000,'easeOutCirc');
});

const speed=300;
const section=$('.section');
$(window).on('scroll', function(){
    let scrollTop=$(window).scrollTop();
    section.each(function(i){
        if(scrollTop<$('#about_me').offset().top-speed){
            $('.header ul>li').removeClass('active');
        }
        if(scrollTop>=section.eq(i).offset().top-speed){
            $('.header ul>li').eq(i).addClass('active').siblings().removeClass('active');
        }
        if(scrollTop >= section.eq(2).offset().top-(speed+100)){
            section.eq(2).find('.project1 .pj01').addClass('show');
        }
        if(scrollTop >= section.eq(2).find('.project3').offset().top-(speed+150)){
            section.eq(2).find('.project3 .pj03').addClass('show');
        }
    });
});

$('.pc_hidden').hover(
    function(){
        let hgt=$(this).innerHeight();
        let img=$(this).find('img');
        let imghgt=img.innerHeight();
        img.stop().animate({top:hgt-imghgt},2000);
    },
    function(){
        let img=$(this).find('img');
        img.stop().animate({top:0},2000);
    }
);
$('.mobile_hidden').hover(
    function(){
        let hgt=$(this).innerHeight();
        let img=$(this).find('img');
        let imghgt=img.innerHeight();
        img.stop().animate({top:hgt-imghgt},2000);
    },
    function(){
        let img=$(this).find('img');
        img.stop().animate({top:0},2000);
    }
);