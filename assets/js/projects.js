setTimeout(()=>{
    const titlePage = document.querySelector('.title-page');
    titlePage.classList.add('animate-fade');
},300);

const cards = document.querySelectorAll('.card');
let time = 300;

cards.forEach(card=>{
    time+=500;
    setTimeout(()=>{
        card.classList.add('animate-fade');
    },time)
})