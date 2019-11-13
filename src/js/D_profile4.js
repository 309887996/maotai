var strongs = document.querySelectorAll('.Tobody_bottomToLeft>strong');
var honer = document.querySelector('.Tobody_bottomToLeft .foreign');
var glory = document.querySelector('.Tobody_bottomToLeft .inland');

function switchTo(){
    for (var i = 0; i < strongs.length; i++) {
        strongs[i].index = i;
        strongs[i].onclick = function () {
            // console.log(666)
            // 清除所有的激活激活状态
            for (var i = 0; i < strongs.length; i++) {
                strongs[i].classList.remove('activeStr');
            }
            // 添加激活状态
            this.classList.add('activeStr');
            if(this.index == 1){
                glory.style.display = 'block';
                honer.style.display = 'none';
            }
            if(this.index == 0){
                honer.style.display = 'block';
                glory.style.display = 'none';
            }
        }
    }
}
switchTo();


