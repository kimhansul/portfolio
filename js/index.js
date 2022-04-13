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
    let offset=section.offset().top;
    $('html, body').animate({scrollTop: offset},1000,'easeOutCirc');
});

const skillBox=$('.skill_box');
function chartAnimate(){
    skillBox.each(function(){
        let rotate=$(this).find('.skill_rotate'),
        data=rotate.attr('data-num'),
        circle=$(this).find('.skill_chart svg circle');

        $({rate: 0}).animate({rate: data}, {duration: 1500,
            progress: function(){
                let now = this.rate;
                let amount = 628-(628*now/100);
                rotate.text(Math.ceil(now)+'%');
                circle.css({strokeDashoffset: amount});
            }
        });
    });
}

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
        if(scrollTop >= section.eq(1).offset().top-(speed)){
            if(!$('.skill_slide').hasClass('active')){
                chartAnimate();
                $('.skill_slide').addClass('active');
            }
        }
        if(scrollTop >= section.eq(2).offset().top-(speed+100)){
            section.eq(2).find('.project1 .pj01').addClass('show');
        }
        if(scrollTop >= section.eq(2).find('.project3').offset().top-(speed+150)){
            section.eq(2).find('.project3 .pj03').addClass('show');
        }
    });
});

const slideBox=$('.skill_slide_wrap>div'), nextBtn=$('.slidenext_btn'), prevBtn=$('.slideprev_btn');
slideBox.each(function(i){
    $(this).css({left: i*100+'%'});
});
nextBtn.click(function(e){
    e.preventDefault();
    slideBox.eq(0).css({left: 0}).stop().animate({left: '-100%'},1000);
    slideBox.eq(0).removeClass('show');
    slideBox.eq(1).addClass('show');
    slideBox.eq(1).css({left: '100%'}).stop().animate({left: 0},1000);
    chartAnimate();
    nextBtn.addClass('hide');
    nextBtn.prop('disabled',true);
    prevBtn.removeClass('hide');
    prevBtn.prop('disabled',false);
});
prevBtn.click(function(e){
    e.preventDefault();
    slideBox.eq(0).css({left: '-100%'}).stop().animate({left: 0},1000);
    slideBox.eq(0).addClass('show');
    slideBox.eq(1).removeClass('show');
    slideBox.eq(1).css({left: 0}).stop().animate({left: '100%'},1000);
    chartAnimate();
    prevBtn.addClass('hide');
    prevBtn.prop('disabled',true);
    nextBtn.removeClass('hide');
    nextBtn.prop('disabled',false);
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