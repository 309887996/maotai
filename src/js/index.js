
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
var figures = document.querySelectorAll('.product figure');

function switchTo() {
    for (var i = 0; i < spans.length; i++) {
        spans[i].index = i;
        $.ajax({
            url: '../../data/index2.json',
            type: 'get',
            dataType: 'json',
            success: function (date) {

                for (var j = 0; j < figures.length; j++) {
                    figures[j].innerHTML = '';
                    figures[j].innerHTML = '<img src="' + date[j].src + '"><figcaption><p><a href="#">' + date[j].name + '</a></p></figcaption><figcaption><p><a href="#">' + date[j].name + '</a></p><span>' + date[j].title + '</span><span>' + date[j].type + '</span><i><a href="#">详情</a></i>';
                    // console.log(date[j].src)
                }
            },
            failed: function (code) {
                alert('错误代码' + code)
            }
        })
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
            if (this.index) {
                $.ajax({
                    url: '../../data/index2.json',
                    type: 'get',
                    dataType: 'json',
                    success: function (date) {

                        for (var j = figures.length; j < date.length; j++) {
                            figures[j - figures.length].innerHTML = '';
                            figures[j - figures.length].innerHTML = '<img src="' + date[j].src + '"><figcaption><p><a href="#">' + date[j].name + '</a></p></figcaption><figcaption><p><a href="#">' + date[j].name + '</a></p><span>' + date[j].title + '</span><span>' + date[j].type + '</span><i><a href="#">详情</a></i>';
                            // console.log(date[j].src)
                        }
                    },
                    failed: function (code) {
                        alert('错误代码' + code)
                    }
                })
            } 
            if(this.index == 0){
                $.ajax({
                    url: '../../data/index2.json',
                    type: 'get',
                    dataType: 'json',
                    success: function (date) {
        
                        for (var j = 0; j < figures.length; j++) {
                            figures[j].innerHTML = '';
                            figures[j].innerHTML = '<img src="' + date[j].src + '"><figcaption><p><a href="#">' + date[j].name + '</a></p></figcaption><figcaption><p><a href="#">' + date[j].name + '</a></p><span>' + date[j].title + '</span><span>' + date[j].type + '</span><i><a href="#">详情</a></i>';
                            // console.log(date[j].src)
                        }
                    },
                    failed: function (code) {
                        alert('错误代码' + code)
                    }
                })
            }
        }
    }
}
    switchTo();
