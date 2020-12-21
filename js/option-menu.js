window.onload = e =>{
    const optionMenu = document.querySelector('.option-profile-menu');
    const btn = document.querySelector('.more-option');
    btn.addEventListener('click', e=>{
        optionMenu.classList.toggle('hide')
    })
}