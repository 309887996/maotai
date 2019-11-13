function Jumppage() {
    if ($('.num1').text() == 1) {
        for (i = 4; i < $('.List li').length; i++) {
            $('.List li')[i].style.display = 'none';
        }
    } else if ($('.num1').text() == 2) {
        for (i = 0; i < 4; i++) {
            $('.List li')[i].style.display = 'none';
        }
    }
}
$('.shouye').on("click", function () {
    $('.num1').text('1');
    for (i = 0; i < 4; i++) {
        $('.List li')[i].style.display = 'block';
    }
    Jumppage();
});

$('.shangye').on("click", function () {
    $('.num1').text('1');
    for (i = 0; i < 4; i++) {
        $('.List li')[i].style.display = 'block';
    }
    Jumppage();
});

$('.xieye').on("click", function () {
    $('.num1').text('2');
    for (i = 4; i < $('.List li').length; i++) {
        $('.List li')[i].style.display = 'block';
    }
    Jumppage();
});
$('.weiye').on("click", function () {
    $('.num1').text('2');
    for (i = 4; i < $('.List li').length; i++) {
        $('.List li')[i].style.display = 'block';
    }
    Jumppage();
});
$('.go').on("click", function () {
    if ($('.tiaoye').val() == 1) {
        $('.num1').text('1');
        for (i = 0; i < 4; i++) {
            $('.List li')[i].style.display = 'block';
        }
        Jumppage();
    }
    else if ($('.tiaoye').val() == 2) {
        $('.num1').text('2');
        for (i = 4; i < $('.List li').length; i++) {
            $('.List li')[i].style.display = 'block';
        }
        Jumppage();
    }else{
        $('.tiaoye').val('1')
    }

});

$(function () {
    $.ajax({
        url: '../../data/L-service-5.json',
        type: 'get',
        dataType: 'json',
        cache: false,
        success: function (json) {
            var results = ''
            $.each(json, function (index, item) {
                results += '<li><p>' + item.company + '</P><p>' + item.site +
                    '</P><P>' + item.name + '</p><span>' + item.tel +
                    '</span><span>' + item.sold + '</span><span>' + item.cellphone + '</span></li>';
            });
            $('.List').html(results);
            Jumppage();

        },
    });
});

//  $('.List li')

