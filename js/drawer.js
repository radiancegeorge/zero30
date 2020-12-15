window.addEventListener('load', e=>{
    // alert('works')
    const nav = document.querySelector('header ul');
    const burger = document.querySelector('.burger');

    burger.addEventListener('click', e=>{
        nav.classList.toggle('hide')
    })
})