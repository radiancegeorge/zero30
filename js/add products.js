window.addEventListener('load', e =>{
    const addProductBtn = document.querySelector('.add-product');
    const content = document.querySelector('.new-product');
    const cancel = document.querySelector('.new-product .buttons [type="reset"]');
    addProductBtn.addEventListener('click', e =>{
        content.classList.toggle('hide');
    });

    cancel.addEventListener('click', e=>{
        content.classList.toggle('hide');
    })
})