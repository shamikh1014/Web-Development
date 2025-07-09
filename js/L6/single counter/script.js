
var current=document.querySelector('.current');
var next=document.querySelector('.next');

function startCounter(){
    var interval=setInterval(AnimationEffect, 1000);
}

function animate(){
    
    next.classList.add('animate');
    setTimeout(function(){
        next.classList.remove('animate');
    }, 500);

}