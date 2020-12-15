window.addEventListener('load', e=>{
    const form = document.querySelector('header form');
    const drawer = document.querySelector('header .sign-up');

    drawer.addEventListener('click', e=>{
        form.classList.toggle('away');
        if(form.classList.contains('away') === false){
            drawer.style.backgroundColor = 'white';
            drawer.firstChild.style.color = 'black';

        }else{
            drawer.style.backgroundColor = '';
            drawer.firstChild.style.color = '';
        }
    })
})