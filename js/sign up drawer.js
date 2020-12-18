window.addEventListener('load', e=>{
    const form = document.querySelector('header form');
    const drawer_header = document.querySelector('header .sign-up');
    const drawer2 = document.querySelector('.get-started .sign-up');
    const allDrawer = [drawer_header, drawer2]
    const cancelForm = document.querySelector('.cancel-form');

    allDrawer.forEach(drawer=>{
        drawer.addEventListener('click', e=>{
            form.classList.toggle('away');
            if(form.classList.contains('away') === false){
                window.scrollTo({
                    top:0,
                    left:0,
                    behavior:'smooth'
                })
                drawer_header.style.backgroundColor = 'white';
                drawer_header.firstChild.style.color = 'black';
    
            }else{
                drawer_header.style.backgroundColor = '';
                drawer_header.firstChild.style.color = '';
            }
        });
    })
    cancelForm.addEventListener('click', e=>{
        form.classList.toggle('away');
        if(form.classList.contains('away') === false){
            drawer_header.style.backgroundColor = 'white';
            drawer_header.firstChild.style.color = 'black';

        }else{
            drawer_header.style.backgroundColor = '';
            drawer_header.firstChild.style.color = '';
        }
    })
})