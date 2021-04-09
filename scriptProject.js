let dots = document.querySelectorAll('.dots');
let cloud = document.querySelector('.fa-cloud');
function showText(classVar,startDot,finishDot){
    let obj = document.querySelector(`${classVar}`);
    for (let i = startDot-1; i < finishDot; i++) {
        dots[i].style.animationIterationCount = `infinite`;
        // animation-iteration-count: 
    }
    cloud.style.textShadow = `0px 0px 65px rgb(201, 227, 245)`;
    obj.classList.add('showAnimate');
}

function hiddenText(classVar,startDot,finishDot){
    let obj = document.querySelector(`${classVar}`);
    for (let i = startDot-1; i < finishDot; i++) {
        dots[i].style.animationIterationCount = `0`;
        // animation-iteration-count: 
    }
    cloud.style.textShadow = ``;
    obj.classList.remove('showAnimate');
}