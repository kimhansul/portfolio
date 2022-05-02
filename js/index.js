const gnb=$('.header');

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
$(window).on({
    scroll: function(){
        let scrollTop=$(window).scrollTop();
        if(scrollTop>gnb.innerHeight()){
            gnb.addClass('active');
        }
        if(scrollTop<gnb.innerHeight()){
            gnb.removeClass('active');
        }
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
                    slideTimer();
                    $('.skill_slide').addClass('active');
                }
            }
            if(scrollTop >= section.eq(2).offset().top-(speed+100)){
                section.eq(2).find('.project1 .pj01').addClass('show');
            }
            if(scrollTop >= section.eq(2).find('.project2').offset().top-(speed+150)){
                section.eq(2).find('.project2 .pj02').addClass('show');
            }
            if(scrollTop >= section.eq(2).find('.project3').offset().top-(speed+150)){
                section.eq(2).find('.project3 .pj03').addClass('show');
            }
            if(scrollTop >= section.eq(2).find('.react_project').offset().top-(speed+150)){
                section.eq(2).find('.react_project .react_pj').addClass('show');
            }
            if(scrollTop >= section.eq(2).find('.uiux_project').offset().top-(speed+150)){
                section.eq(2).find('.uiux_project .uiux_pj').addClass('show');
            }
            if(scrollTop>=section.eq(3).offset().top-speed){
                section.eq(3).find('.diary_link').addClass('active');
            }
            if(scrollTop>=section.eq(section.length-1).offset().top-(speed+100)){
                $('.header ul>li').eq($('.header ul>li').length-1).addClass('active').siblings().removeClass('active');
            }
        });
    }, mousemove: function(e){
        let pageX=e.pageX, pageY=e.pageY;
        let standardX=$(window).width()/2-pageX, standardY=$(window).innerHeight()/2-pageY;

        const svgImg=$('.main_object').contents();
        const lineObj=svgImg.find('#lines'), dotObj=svgImg.find('#dots'), waveObj=svgImg.find('#waves');
        lineObj.attr({style: 'transform: translate('+standardX/30+'px, '+standardY/70+'px)'});
        dotObj.attr({style: 'transform: translate('+standardX/90+'px, '+standardY/90+'px)'});
        waveObj.attr({style: 'transform: translate('+standardX/90+'px, '+standardY/30+'px)'});
        $('.my_photo').attr({style: 'transform: translate('+standardX/110+'px, '+standardY/110+'px)'});
    }
});

const slideBox=$('.skill_slide_wrap>div'), nextBtn=$('.slidenext_btn'), prevBtn=$('.slideprev_btn'), slideBtns=$('#skills>button');
let slideCurrent=0;
slideBox.each(function(i){
    $(this).css({left: i*100+'%'});
});
function skillSlide(){
    if(slideBox.eq(1).hasClass('now')){
        slideMove(slideBox.eq(slideCurrent), 0, '100%');
        slideBox.eq(slideCurrent).removeClass('show');
        slideCurrent++;
        if(slideCurrent==slideBox.length){
            slideCurrent=0;
        }
        chartAnimate();
        slideMove(slideBox.eq(slideCurrent), '-100%', 0);
        slideBox.eq(slideCurrent).addClass('show');
        slideBox.eq(1).removeClass('now');
        prevBtn.addClass('hide');
        prevBtn.prop('disabled',true);
        nextBtn.removeClass('hide');
        nextBtn.prop('disabled',false);
    }
    else{
        slideMove(slideBox.eq(slideCurrent), 0, '-100%');
        slideBox.eq(slideCurrent).removeClass('show');
        slideCurrent++;
        if(slideCurrent==slideBox.length){
            slideCurrent=0;
        }
        chartAnimate();
        slideMove(slideBox.eq(slideCurrent), '100%', 0);
        slideBox.eq(slideCurrent).addClass('show');
        slideBox.eq(1).addClass('now');
        nextBtn.addClass('hide');
        nextBtn.prop('disabled',true);
        prevBtn.removeClass('hide');
        prevBtn.prop('disabled',false);
    }
}
function slideMove(tG,start,end){
    tG.css({left: start}).stop().animate({left: end},1000);
}
nextBtn.click(function(e){
    e.preventDefault();
    clearInterval(timer);
    slideMove(slideBox.eq(slideCurrent), 0, '-100%');
    slideBox.eq(slideCurrent).removeClass('show');
    slideCurrent++;
    if(slideCurrent==slideBox.length){
        slideCurrent=0;
    }
    chartAnimate();
    slideMove(slideBox.eq(slideCurrent), '100%', 0);
    slideBox.eq(slideCurrent).addClass('show');
    slideBox.eq(1).addClass('now');
    nextBtn.addClass('hide');
    nextBtn.prop('disabled',true);
    prevBtn.removeClass('hide');
    prevBtn.prop('disabled',false);
    slideTimer();
});
prevBtn.click(function(e){
    e.preventDefault();
    clearInterval(timer);
    slideMove(slideBox.eq(slideCurrent), 0, '100%');
    slideBox.eq(slideCurrent).removeClass('show');
    slideCurrent++;
    if(slideCurrent==slideBox.length){
        slideCurrent=0;
    }
    chartAnimate();
    slideMove(slideBox.eq(slideCurrent), '-100%', 0);
    slideBox.eq(slideCurrent).addClass('show');
    slideBox.eq(1).removeClass('now');
    prevBtn.addClass('hide');
    prevBtn.prop('disabled',true);
    nextBtn.removeClass('hide');
    nextBtn.prop('disabled',false);
    slideTimer();
});

function slideTimer(){
    timer=setInterval(skillSlide,4000);
}
$(window).resize(function(){
    if($(window).width()<1000){
        clearInterval(timer);
        if($(window).scrollTop() >= section.eq(1).offset().top){
            skillBarAni();
        }
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

function skillBarAni(){
    $('.skill_bar').each(function(){
        skillBar=$(this).find('.bar'), barData=skillBar.attr('data-rate');
        skillBar.stop().animate({width: barData+'%'},3000);
    });
}