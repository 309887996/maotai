function Jumppage() {
    if ($('.num1').text() == 1) {
        for (i = 10; i < $('.List li').length; i++) {
            $('.List li')[i].style.display = 'none';
        };
    } else if ($('.num1').text() == 2) {
        for (i = 0; i < 10; i++) {
            $('.List li')[i].style.display = 'none';
        };
    };
};
function col() {
    for (i = 0; i < $('.List li').length; i++) {
        if (!(i % 2)) {
            $('.List li')[i].style.background = '#eee';

        };
    };
};
$('.shouye').on("click", function () {
    $('.num1').text('1');
    for (i = 0; i < 10; i++) {
        $('.List li')[i].style.display = 'block';
    };
    Jumppage();
});

$('.shangye').on("click", function () {
    $('.num1').text('1');
    for (i = 0; i < 10; i++) {
        $('.List li')[i].style.display = 'block';
    };
    Jumppage();
});

$('.xieye').on("click", function () {
    $('.num1').text('2');
    for (i = 10; i < $('.List li').length; i++) {
        $('.List li')[i].style.display = 'block';
    };
    Jumppage();
});
$('.weiye').on("click", function () {
    $('.num1').text('2');
    for (i = 10; i < $('.List li').length; i++) {
        $('.List li')[i].style.display = 'block';
    };
    Jumppage();
});
$('.go').on("click", function () {
    if ($('.tiaoye').val() == 1) {
        $('.num1').text('1');
        for (i = 0; i < 10; i++) {
            $('.List li')[i].style.display = 'block';
        };
        Jumppage();
    }
    else if ($('.tiaoye').val() == 2) {
        $('.num1').text('2');
        for (i = 10; i < $('.List li').length; i++) {
            $('.List li')[i].style.display = 'block';
        };
        Jumppage();
    } else {
        $('.tiaoye').val('1')
    };

});


(function () {
    $.ajax({
        url: '../../data/L-investorC.json',
        type: 'get',
        dataType: 'json',
        cache: false,
        success: function (json) {
            var results = '';
            $.each(json, function (index, item) {
                results += '<li><i></i><a href="###">' + item.notice + '</a><span>' + item.date + '</span></li>';
            });
            $('.List').html(results);
            Jumppage();
            col();
        },
    });


})();