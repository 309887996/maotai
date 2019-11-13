
(function () {
    function times() {
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hour = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        if (month < 9) {
            month = '0' + month
        };
        if (day < 9) {
            day = '0' + day
        };
        if (hour < 9) {
            hour = '0' + hour
        };
        if (minutes < 9) {
            minutes = '0' + minutes
        };
        if (seconds < 9) {
            seconds = '0' + seconds
        };
        $('.L-time').text(year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds)
    }
    times();
    setInterval(function () {
        times();
    }, 1000)
})();
(function () {
    $.ajax({
        url: '../../data/L-investorA.json',
        type: 'get',
        dataType: 'json',
        cache: false,
        success: function (json) {
            var results = ''
            $.each(json, function (index, item) {
                results += '<span>'+item.num1+' </span><img src="../img/L-xiaoimg.png" alt=""><strong><span>'+item.num2+'</span><span>(</span><span>'+item.num3+'</span><span>)</span></strong><em><span>今开<b>'+item.num4+'</b></span><span>昨收<b>'+item.num5+'</b></span></em><em><span>最高<b>'+item.num6+'</b></span><span>最低<b>'+item.num7+'</b><span></em><em><span>成交量<b>'+item.num8+'</b>万手</span><span>成交额<b>'+item.num9+'</b>亿元</span></em>'
            });
            $('.L-num').html(results);

        },
    });

})();
(function(){
    $.ajax({
        url: '../../data/L-investorB.json',
        type: 'get',
        dataType: 'json',
        cache: false,
        success: function (json) {
            var results = ''
            $.each(json, function (index, item) {
                results += '<li><i></i><a href="###">'+item.notice+'</a><span>'+item.dates+'</span></li>'
            });
            $('.List1').html(results);

        },
    });
})();
(function(){
    $.ajax({
        url: '../../data/L-investorC.json',
        type: 'get',
        dataType: 'json',
        cache: false,
        success: function (json) {
            var results = ''
            $.each(json, function (index, item) {
                results += '<li><i></i><a href="###">'+item.notice+'</a><span>'+item.dates+'</span></li>'
            });
            $('.List2').html(results);
        },
    });
})();