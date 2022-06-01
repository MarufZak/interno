window.addEventListener('DOMContentLoaded',()=>{
    const nav = document.querySelector('.header__nav');
    const burger = document.querySelector('.header__burger');

    burger.addEventListener('click',()=>{
        burger.classList.toggle('active'); 
        nav.classList.toggle('active');
    });
})