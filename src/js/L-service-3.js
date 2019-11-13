(function () {
    var Otext1 = document.querySelector('.big-txt1 .text1');
    var Otexta = document.querySelector('.texta');
    var Otext2 = document.querySelector('.text2');
    var Otext3 = document.querySelector('.text3');
    var Otext4 = document.querySelector('.text4');
    var Otext5 = document.querySelector('.text5');
    var Otext6 = document.querySelector('.text6');
    var Orefer = document.querySelector('.refer');
    var Oreset = document.querySelector('.reset');
    var wenBen1 = document.querySelector('.wenben1');
    var wenBen2 = document.querySelector('.wenben2');
    var wenBen3 = document.querySelector('.wenben3');
    var wenBen4 = document.querySelector('.wenben4');
    var wenBen5 = document.querySelector('.wenben5');
    var wenBen6 = document.querySelector('.wenben6');

    Orefer.onclick = function () {

        if (Otext1.value == '') {
            wenBen1.style.color = 'red';
            wenBen1.innerHTML = '&nbsp;&nbsp请填写标题！';
        } else {
            wenBen1.innerHTML = '';
        };

        if (Otexta.value == '') {
            wenBen2.style.color = 'red';
            wenBen2.innerHTML = '&nbsp;&nbsp请填写内容！';
        }
        else {
            wenBen2.innerHTML = '';
        };
        if (Otext2.value == '') {
            wenBen3.style.color = 'red';
            wenBen3.innerHTML = '&nbsp;&nbsp请填写姓名！';
        }
        else {
            wenBen3.innerHTML = '';
        };
        var reg = /^1\d{10}$/;
        if (Otext3.value == '') {
            wenBen4.style.color = 'red';
            wenBen4.innerHTML = '&nbsp;&nbsp请填写联系电话！';
        } else {
            wenBen4.innerHTML = ''
            if (reg.test(Otext3.value) == true) {
                wenBen4.innerHTML = ''
            } else {
                wenBen4.style.color = 'red'
                wenBen4.innerHTML = '&nbsp;&nbsp联系电话格式错误！';
            };
        };
        var reg = /^\w+@\w+\.\w+$/;
        if (Otext4.value == '') {
            wenBen5.style.color = 'red';
            wenBen5.innerHTML = '&nbsp;&nbsp请填写电子邮件！';
        } else {
            wenBen5.innerHTML = '';
            if (reg.test(Otext4.value) == true) {
                wenBen5.style.color = 'green';
                wenBen5.innerHTML = '';
            } else {
                wenBen5.innerHTML = '请输入正确的邮箱';
                wenBen5.style.color = 'red';
            };
        };
        if (Otext5.value == '') {
            wenBen6.style.color = 'red';
            wenBen6.innerHTML = '&nbsp;&nbsp请填写验证码！';
        } else {
            wenBen6.innerHTML = '';
            if (Otext5.value != Otext6.value) {
                wenBen6.innerHTML = '&nbsp;&nbsp验证码不一致！';
                wenBen6.style.color = 'red';
            } else {
                wenBen6.innerHTML = '';
            };
        };

    };
    var numArr = [];
    for (var i = 0; i < 10; i++) {
        numArr.push(i);
    };
    var smallArr = []
    for (var i = 97; i <= 122; i++) {
        smallArr.push(String.fromCharCode(i));
    };
    var bigArr = [];
    for (var i = 65; i <= 90; i++) {
        bigArr.push(String.fromCharCode(i));
    };
    var allArr = numArr.concat(smallArr, bigArr);
    var code = ''
    for (var i = 0; i < 4; i++) {
        var index = parseInt(Math.random() * allArr.length);
        var res = allArr.splice(index, 1);
        code = code + res;
    }
    Otext6.value = code;

    Otext6.onclick = function () {
        var code1 = '';
        for (var i = 0; i < 4; i++) {
            var index = allArr[parseInt(Math.random() * allArr.length)];
            code1 = code1 + index;
        }
        Otext6.value = code1;
    }
    Oreset.onclick = function () {
        Otext1.value ='';
        Otext2.value ='';
        Otext3.value ='';
        Otext4.value ='';
        Otext5.value ='';
        Otexta.value ='';
    }
})();