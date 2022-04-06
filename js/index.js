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

$(window).scroll(function(){
    let scrollTop=$(window).scrollTop();
    if(scrollTop<$('#about_me').offset().top-100){
        $('.header ul>li').removeClass('active');
    }
    if(scrollTop>=$('#about_me').offset().top-100){
        $('.header ul>li').eq(0).addClass('active').siblings().removeClass('active');
    }
    if(scrollTop>=$('#skills').offset().top-100){
        $('.header ul>li').eq(1).addClass('active').siblings().removeClass('active');
    }
    if(scrollTop>=$('#project').offset().top-100){
        $('.header ul>li').eq(2).addClass('active').siblings().removeClass('active');
    }
    if(scrollTop>=$('#diary').offset().top-100){
        $('.header ul>li').eq(3).addClass('active').siblings().removeClass('active');
    }
    if(scrollTop>=$('#contact').offset().top-100){
        $('.header ul>li').eq(4).addClass('active').siblings().removeClass('active');
    }
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