window.addEventListener('load', e =>{
    // alert('loaded')
    const addUserBtn = document.querySelector('.profile-detail-content .add-user-btn');
    const addUser = document.querySelector('.add-user-content');
    const resetBtn = document.querySelector('.add-user-content [type="reset"]');
    addUserBtn.addEventListener('click', e =>{
        addUser.classList.toggle('hide');
    });
    resetBtn.addEventListener('click', e=>{
        addUser.classList.toggle('hide')
    })
})