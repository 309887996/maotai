//top 图片关闭
var top_image = document.querySelector('.L_top_image');
var top_image_a = document.querySelector('.Image_a');

top_image_a.onclick = function () { //点击事件
    top_image.style.display = 'none';
}

//一二级菜单
var L_left_one = document.querySelector('.L_left_one'); //第一个
var L_menu_2 = document.querySelector('.L_menu_2');

L_left_one.onmouseover = function () { //鼠标移入
    L_menu_2.style.display = 'block';
}
L_left_one.onmouseleave = function () { //鼠标移入
    L_menu_2.style.display = 'none';
}
L_menu_2.onmouseleave = function () { //鼠标移出
    L_menu_2.style.display = 'none';
}

var L_left_two = document.querySelector('.L_left_two'); //第二个
var L_menu_2_two = document.querySelector('.L_menu_2_two');
L_left_two.onmouseover = function () { //鼠标移入
    L_menu_2_two.style.display = 'block';
}
L_left_two.onmouseleave = function () { //鼠标移入
    L_menu_2_two.style.display = 'none';
}
L_menu_2_two.onmouseleave = function () { //鼠标移出
    L_menu_2_two.style.display = 'none';
}

var L_left_three = document.querySelector('.L_left_three'); //第三个
var L_menu_2_three = document.querySelector('.L_menu_2_three');
L_left_three.onmouseover = function () { //鼠标移入
    L_menu_2_three.style.display = 'block';
}
L_left_three.onmouseleave = function () { //鼠标移入
    L_menu_2_three.style.display = 'none';
}
L_menu_2_three.onmouseleave = function () { //鼠标移出
    L_menu_2_three.style.display = 'none';
}

var L_left_four = document.querySelector('.L_left_four'); //第四个
var L_menu_2_four = document.querySelector('.L_menu_2_four');
L_left_four.onmouseover = function () { //鼠标移入
    L_menu_2_four.style.display = 'block';
}
L_left_four.onmouseleave = function () { //鼠标移入
    L_menu_2_four.style.display = 'none';
}
L_menu_2_four.onmouseleave = function () { //鼠标移出
    L_menu_2_four.style.display = 'none';
}

var L_left_five = document.querySelector('.L_left_five'); //第五个
var L_menu_2_five = document.querySelector('.L_menu_2_five');
L_left_five.onmouseover = function () { //鼠标移入
    L_menu_2_five.style.display = 'block';
}
L_left_five.onmouseleave = function () { //鼠标移入
    L_menu_2_five.style.display = 'none';
}
L_menu_2_five.onmouseleave = function () { //鼠标移出
    L_menu_2_five.style.display = 'none';
}

var L_left_six = document.querySelector('.L_left_six'); //第六个
var L_menu_2_six = document.querySelector('.L_menu_2_six');
L_left_six.onmouseover = function () { //鼠标移入
    L_menu_2_six.style.display = 'block';
}
L_left_six.onmouseleave = function () { //鼠标移入
    L_menu_2_six.style.display = 'none';
}
L_menu_2_six.onmouseleave = function () { //鼠标移出
    L_menu_2_six.style.display = 'none';
}

// 点击切换图片
var L_rotate_a1 = document.querySelector('.L_rotate_a1');
var L_rotate_a2 = document.querySelector('.L_rotate_a2');
L_rotate_a1.onclick = function () {
    $('.L_img_ul').each(function (a, b) {
        b.style.left = $(b).position().left + 128 + 'px';
    });
}
L_rotate_a2.onclick = function () {
    $('.L_img_ul').each(function (a, b) {
        b.style.left = $(b).position().left - 128 + 'px';
    });
}

// ajax数据交互 加载数据
$(function(){
    $.ajax({
        url:'../../data/shopping.json',
        type:'get',
        dateType:'json',
        cache:false,
        success:function(json){
            var sale = '';
            $.each(json,function(index,item){
                $('.L_sale_d2 ul li').each(function(a,b){
                    if(a==index){
                        $(b).append('<div class="L_sale_img"><a href="#"><img src="'+item.image+'" alt=""></a></div><div class="L_sale_size"><p>'+item.name+'</p><span>'+item.price+'</span></div>');
                    }
                });
            });
        }
    });
});

$(function(){
    $.ajax({
        url:'../../data/small.json',
        type:'get',
        dateType:'json',
        cache:false,
        success:function(json){
            $.each(json,function(index,item){
                $('.small').each(function(a,b){
                    if(a==index){
                        $(b).append('<a href="#"><div class="small_img"><img src="'+item.image+'" alt=""></div><div class="small_siez"><p>'+item.name+'</p><span>'+item.price+'</span></div></a>');
                    }
                });
            });
        }
    });
});