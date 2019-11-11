var d_Ulis = document.querySelectorAll('.banner ul li');
var d_Olis = document.querySelectorAll('.banner ol li');
var index = 0;
var timer;

for(var i = 0; i < d_Olis.length; i++){
    d_Olis[i].index =i;
    d_Olis[i].onmouseenter = function(){
        clearInterval(timer);
        index = this.index;
        act();
    }
    d_Olis[i].onmouseleave = function(){
        start();
    }
}
function start(){
    timer = setInterval(function () {
    
    index++;
    if(index > d_Olis.length -1){
        index = 0;
    }
    act();
    
}, 2000)
}


function act(){
    for(var i = 0;i < d_Ulis.length; i++){
        // d_Ulis[i].classList.remove('activeLI');
        d_Ulis[i].style.left = '-100%'
        d_Olis[i].classList.remove('activeLI');
        
    }
    // d_Ulis[index].classList.add('activeLI');
    d_Ulis[index].style.left = '0'
    d_Olis[index].classList.add('activeLI');
}
