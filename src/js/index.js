var d_Ulis = document.querySelectorAll('.banner ul li');
var d_Olis = document.querySelectorAll('.banner ol li');
var d_Ulis1 = document.querySelectorAll('.wrap_news .news .news_left ul li');
var d_Olis1 = document.querySelectorAll('.wrap_news .news .news_left ol li');

// 轮播图
var index = 0;
var timer;
clearInterval(timer);
for (var i = 0; i < d_Olis.length; i++) {
    d_Olis[i].index = i;
    d_Olis[i].onmouseenter = function () {
        clearInterval(timer);
        index = this.index;
        act();
    }
    d_Olis[i].onmouseleave = function () {
        start();
    }
}
function start() {
    timer = setInterval(function () {

        index++;
        if (index > d_Olis.length - 1) {
            index = 0;
        }
        act();

    }, 4000)
}

function act() {
    for (var i = 0; i < d_Ulis.length; i++) {
        d_Ulis[i].classList.remove('activeLI');
        d_Olis[i].classList.remove('activeLI');
    }
    d_Ulis[index].classList.add('activeLI');
    d_Olis[index].classList.add('activeLI');
}







// 请求数据
var n = 0;
var timer2;
clearInterval(timer2);
timer2 = setInterval(function () {
    n++;
    $.ajax({
        url: '../../data/index1.json',
        type: 'get',
        dataType: 'json',
        success: function (date) {
            // console.log(date);
            $('.tit span').html('');
            if (n >= date.length) {
                n = 0;
            };
            $('.tit span').html(date[n].title);
        },
        failed: function (code) {
            alert('错误代码' + code);
        }
    })
}, 3000)


// 请求json数据
$.ajax({
    url: '../../data/index.json',
    type: 'get',
    dataType: 'json',
    success: function (date) {
        // console.log(date);
        var ul = document.querySelector('.news_right ul');
        ul.innerHTML = '';
        for (var i = 0; i < date.length; i++) {
            ul.innerHTML += '<li><a href="#">' + date[i].newsTitle + '<span>' + date[i].newsDate + '</span></a></li>';
        }
    },
    failed: function (code) {
        alert('错误代码' + code)
    }
})

var spans = document.querySelectorAll('.product>p span');
var Is = document.querySelectorAll('.product>p span i');


function switchTo(){
    for (var i = 0; i < spans.length; i++) {
        spans[i].index = i;
        spans[i].onclick = function () {
            // console.log(666)
            // 清除所有的激活激活状态
            for (var i = 0; i < spans.length; i++) {
                spans[i].classList.remove('activeSpan');
                Is[i].classList.remove('activeI');
            }
            // 添加激活状态
            this.classList.add('activeSpan');
            Is[this.index].classList.add('activeI');
        }
    }
}
switchTo();
