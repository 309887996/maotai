var ul = document.querySelector('.Tobody_bottomToLeft ul')


$.ajax({
    url:'../../data/D_profile1.json',
    type:'get',
    dataType:'json',
    success:function (date){
        ul.innerHTML = ''
        for(var i = 0; i < date.length; i++){
            ul.innerHTML += '<li class="clearfix"><img src="' + date[i].src + '"><span>' + date[i].name + '<br></span><i>' + date[i].position + '<br></i><strong>' + date[i].job + '</strong></li>';
        }
    },
    failed: function (code) {
        alert('错误代码' + code);
    }
})