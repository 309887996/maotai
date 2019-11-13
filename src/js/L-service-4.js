(function () {
    var OTxT1 = document.querySelector('.TxT1');
    var OTxT2 = document.querySelector('.TxT2');
    var OTxT3 = document.querySelector('.TxT3');
    var OTxT4 = document.querySelector('.TxT4');
    var OTxT5 = document.querySelector('.TxT5');
    var OTxT6 = document.querySelector('.TxT6');
    var OTxT7 = document.querySelector('.TxT7');
    var OTxT8 = document.querySelector('.TxT8');
    var OTxT9 = document.querySelector('.TxT9');
    var OTxT10 = document.querySelector('.TxT10');
    var Orefer = document.querySelector('.refer');
    var Oreset = document.querySelector('.reset');
    var wenBen1 = document.querySelector('.wenben1');
    var wenBen2 = document.querySelector('.wenben2');
    var wenBen3 = document.querySelector('.wenben3');
    var wenBen4 = document.querySelector('.wenben4');
    var wenBen5 = document.querySelector('.wenben5');
    var wenBen6 = document.querySelector('.wenben6');
    var wenBen7 = document.querySelector('.wenben7');
    var wenBen8 = document.querySelector('.wenben8');
    var wenBen9 = document.querySelector('.wenben9');

    Orefer.onclick = function () {

        if (OTxT1.value == '') {
            wenBen1.style.color = 'red';
            wenBen1.innerHTML = '&nbsp;&nbsp请填写投诉标题！';
        } else {
            wenBen1.innerHTML = '';
        };
        if (OTxT2.value == '') {
            wenBen2.style.color = 'red';
            wenBen2.innerHTML = '&nbsp;&nbsp请填写投诉类型！';
        } else {
            wenBen2.innerHTML = '';
        };
        if (OTxT3.value == '') {
            wenBen3.style.color = 'red';
            wenBen3.innerHTML = '&nbsp;&nbsp请填写投诉原因！';
        } else {
            wenBen3.innerHTML = '';
        };
        if (OTxT4.value == '') {
            wenBen4.style.color = 'red';
            wenBen4.innerHTML = '&nbsp;&nbsp请填写姓名！';
        } else {
            wenBen4.innerHTML = '';
        };
        var reg = /^1\d{10}$/;
        if (OTxT5.value == '') {
            wenBen5.style.color = 'red';
            wenBen5.innerHTML = '&nbsp;&nbsp请填写联系电话！';
        } else {
            wenBen5.innerHTML = '';
            if (reg.test(OTxT5.value) == true) {
                wenBen5.innerHTML = '';
            } else {
                wenBen5.style.color = 'red';
                wenBen5.innerHTML = '&nbsp;&nbsp联系电话格式错误！';
            };
        };
        var reg = /^\w+@\w+\.\w+$/;
        if (OTxT6.value == '') {
            wenBen6.style.color = 'red';
            wenBen6.innerHTML = '&nbsp;&nbsp请填写电子邮件！';
        } else {
            wenBen6.innerHTML = '';
            if (reg.test(OTxT6.value) == true) {
                wenBen6.style.color = 'green';
                wenBen6.innerHTML = '';
            } else {
                wenBen6.innerHTML = '请输入正确的邮箱';
                wenBen6.style.color = 'red';
            };
        };
        if (OTxT8.value == '') {
            wenBen8.style.color = 'red';
            wenBen8.innerHTML = '&nbsp;&nbsp请填写投诉证明！';
        } else {
            wenBen8.innerHTML = '';
        };
        if (OTxT9.value == '') {
            wenBen9.style.color = 'red';
            wenBen9.innerHTML = '&nbsp;&nbsp请填写验证码！';
        } else {
            wenBen9.innerHTML = '';
            if (OTxT9.value != OTxT10.value) {
                wenBen9.innerHTML = '&nbsp;&nbsp验证码不一致！';
                wenBen9.style.color = 'red';
            } else {
                wenBen9.innerHTML = '';
            };
        };
    };
    var numArr = [];
    for (var i = 0; i < 10; i++) {
        numArr.push(i);
    };
    var smallArr = [];
    for (var i = 97; i <= 122; i++) {
        smallArr.push(String.fromCharCode(i));
    };
    var bigArr = [];
    for (var i = 65; i <= 90; i++) {
        bigArr.push(String.fromCharCode(i));
    };
    var allArr = numArr.concat(smallArr, bigArr);
    var code = '';
    for (var i = 0; i < 4; i++) {
        var index = parseInt(Math.random() * allArr.length)
        var res = allArr.splice(index, 1);
        code = code + res;
    }
    OTxT10.value = code;

    OTxT10.onclick = function () {
        var code1 = '';
        for (var i = 0; i < 4; i++) {
            var index = allArr[parseInt(Math.random() * allArr.length)];
            code1 = code1 + index;
        };
        OTxT10.value = code1;
    };
    Oreset.onclick = function () {
        OTxT1.value = '';
        OTxT2.value = '';
        OTxT3.value = '';
        OTxT4.value = '';
        OTxT5.value = '';
        OTxT6.value = '';
        OTxT7.value = '';
        OTxT8.value = '';
        OTxT9.value = '';
    };


})();
