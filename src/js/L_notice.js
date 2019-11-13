//点击跳转页面
var L_navFix_a = document.querySelector('.L_navFix_center span .gs');
L_navFix_a.onclick = function () {
    location.href = '../page/journalism.html';
}

$(function () {
    $.ajax({
        url: '../../data/L_notice.json',
        type: 'get',
        dateType: 'json',
        cache: false,
        success: function (json) {
            $.each(json, function (index, item) {
                $('.L_Fix_rig_d div ul').each(function (a, b) {
                    $(b).append('<li class="L_Fix_bac"><a href="javascript:">' + item.name + '</a><span>' + item.time + '</span></li>');
                });
            });

            $('.L_Fix_rig_d div ul li').each(function(a,b){
                if (a % 2 !== 1) {
                    b.classList.add('L_Fix_bac');
                }else{
                    b.classList.remove('L_Fix_bac');
                }
            });
        
        }        
    });
});