window.addEventListener('load', e =>{
    const filterBtn = document.querySelector('.transactions-search form select');
    const filterContent = document.querySelector('.options-modified');

    filterBtn.addEventListener('click', e =>{
        filterContent.classList.toggle('hide')
    })
})