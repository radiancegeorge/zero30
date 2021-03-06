window.addEventListener('load', e =>{
    // alert('loaded')
    const addUserBtn = document.querySelector('.profile-detail-content .add-user-btn');
    const addUser = document.querySelector('.add-user-content');
    const resetBtn = document.querySelector('.add-user-content [type="reset"]');
    const roles = document.querySelectorAll('.default-roles ul li');
    const rolesContent = document.querySelectorAll('.abilities');

    // console.log(rolesContent.index)

    addUserBtn.addEventListener('click', e =>{
        addUser.classList.toggle('hide');
    });
    resetBtn.addEventListener('click', e=>{
        addUser.classList.toggle('hide')
    });



    roles.forEach(role=>{
        role.addEventListener('click', e =>{
            if(role.classList.contains('selected-opt')){
                //do nothing
            }else{
                role.classList.toggle('selected-opt');
                rolesContent.forEach(content=>{
                    if(rolesContent.indexOf(content) === roles.indexOf(e.target)){
                        content.classList.toggle('not-selected')
                    }else{
                        content.classList.add('not-selected')
                    }
                })
            }
        })
    })
})