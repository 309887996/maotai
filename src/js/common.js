var d_Span = document.querySelector('.comm_nav>span');
var d_Ul = document.querySelector('.comm_nav ul');
var d_Div = document.querySelector('.comm_nav>div');
var d_I = document.querySelector('.comm_nav>div i:nth-child(1)');
var d_As = document.querySelectorAll('.comm_nav ul li>a');

// nav显示隐藏
d_Span.onclick = function () {
    setTimeout(Block, 100);
}
d_I.onclick = function () {
    setTimeout(None, 100);
}
function Block() {
    d_Span.style.display = 'none';
    d_Ul.style.display = 'none';
    d_Div.style.display = 'block';
}
function None() {
    d_Span.style.display = 'block';
    d_Ul.style.display = 'block';
    d_Div.style.display = 'none';
}
// nav选项切换
function switchTo(){
    for (var i = 0; i < d_As.length; i++) {
        d_As[i].index = i;
        d_As[i].onclick = function () {
            // console.log(666)
            // 清除所有的激活激活状态
            for (var i = 0; i < d_As.length; i++) {
                d_As[i].classList.remove('activeA');
            }
            // 添加激活状态
            this.classList.add('activeA');
        }
    }
}
switchTo();
// 获取当前时间
var toDay = document.querySelector('.roof .toDay');

function getTime(){
    var date = new Date()
    var years = date.getFullYear();
    var mouths = date.getMonth() + 1;
    var day = date.getDate();
    var weeks = date.getDay();
    var arr = ['星期一','星期二','星期三','星期四','星期五','星期六','星期日'];
    toDay.innerHTML = years + '年' + mouths + '月' + day + '日&nbsp;&nbsp;' + arr[weeks - 1];
}
getTime();

