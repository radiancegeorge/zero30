window.addEventListener('load', e =>{
    const addProductBtns = document.querySelectorAll('.add-product');
    const content = document.querySelector('.new-product');
    const cancel = document.querySelector('.new-product .buttons [type="reset"]');
    
    addProductBtns.forEach(addProductBtn=>{
        addProductBtn.addEventListener('click', e =>{
            content.classList.toggle('hide');
        });
    })

    cancel.addEventListener('click', e=>{
        content.classList.toggle('hide');
    })
})