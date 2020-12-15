window.addEventListener('load', ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav');
    const cancel = document.querySelector('.cancel');

    burger.addEventListener('click', ()=>{
        nav.classList.contains('animate-nav') === false && nav.classList.toggle('animate-nav');
        cancel.classList.contains('show-cancel') === false && cancel.classList.toggle('show-cancel');
    });

    cancel.addEventListener('click', e=>{
        nav.classList.contains('animate-nav') === true && nav.classList.toggle('animate-nav');
        cancel.classList.contains('show-cancel') === true && cancel.classList.toggle('show-cancel');

    })
})