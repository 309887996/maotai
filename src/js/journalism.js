$(function () {
    $.ajax({
        url: '../../data/navFix.json',
        type: 'get',
        dateType: 'json',
        cache: false,
        success: function (json) {
            $.each(json, function (index, item) {
                $('.L_navFix_top_right div ul').eq(0).each(function (a, b) {
                    $(b).append('<li><i></i><a href="#">' + item.name + '</a><span>' + item.time + '</span></li>');
                });
            });
            $.each(json, function (index, item) {
                $('.L_navFix_top_right div ul').eq(1).each(function (a, b) {
                    $(b).append('<li><i></i><a href="#">' + item.name + '</a><span>' + item.time + '</span></li>');
                });
            });
            Timer = setInterval(function () {
                var newstop = $('.news').position().top;
                newstop--;
                if (newstop <= -210) {
                    $('.news').css('top', 0);
                } else {
                    $('.news').css('top', newstop);
                }
            }, 100);

            var top_news = document.querySelector('.L_navFix_top_news');
            top_news.onmouseover = function () {
                clearInterval(Timer);
            }

            top_news.onmouseleave = function () {
                clearInterval(Timer);
                Timer = setInterval(function () {
                    var newstop = $('.news').position().top;
                    newstop--;
                    if (newstop <= -210) {
                        $('.news').css('top', 0);
                    } else {
                        $('.news').css('top', newstop);
                    }
                }, 100);
            }

        }
    });

    //获取轮播图的li
    var L_slide_li = document.querySelectorAll('.L_slide ul li');
    var L_slide1_li = document.querySelectorAll('.L_slide_1 ul li');

    var index = 0;
    var timer;

    for(var i = 0,len = L_slide1_li.length; i<len; i++){
        L_slide1_li[i].index = i;
        L_slide1_li[i].onmouseenter = function(){
            clearInterval(timer);
            index = this.index;
            activeOne();
        }

        L_slide1_li[i].onmouseleave = function(){
            start();
        }
    }

    function activeOne(){
        //清楚所有的激活状态
        for(var i = 0,len=L_slide1_li.length;i<len;i++){
            L_slide_li[i].classList.remove('L_active');
            L_slide1_li[i].classList.remove('on');
        }

        L_slide_li[index].classList.add('L_active');
        L_slide1_li[index].classList.add('on');
    }

    function start(){
        timer = setInterval(function(){
            index++;
            if (index>L_slide1_li.length - 1) {
                index = 0;
            }
            activeOne();
        },2000);
    }

    var L_newsWrap_hov_li = document.querySelectorAll('.L_newsWrap_right_hov ul li');
    var L_size = document.querySelectorAll('.L_newsWrap_size');
    L_newsWrap_hov_li[0].onmouseover = function(){ //鼠标移入事件
        L_newsWrap_hov_li[1].classList.remove('L_on');
        L_newsWrap_hov_li[0].classList.add('L_on');

        L_size[0].classList.add('L_size');
        L_size[1].classList.remove('L_size');
    }

    L_newsWrap_hov_li[1].onmouseover = function(){ //鼠标移入事件
        L_newsWrap_hov_li[0].classList.remove('L_on');
        L_newsWrap_hov_li[1].classList.add('L_on');

        L_size[1].classList.add('L_size');
        L_size[0].classList.remove('L_size');
    }

    //点击页内跳转
    var L_News_li = document.querySelector('.L_News_li');
    L_News_li.onclick = function(){
        location.href = '../page/L_notice.html';
    }
});
