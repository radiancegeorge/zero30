window.addEventListener('load', e =>{
    NodeList.prototype.indexOf = Array.prototype.indexOf;
   
    const roles = document.querySelectorAll('.default-roles ul li');
    const rolesContent = document.querySelectorAll('.abilities');
    const addUserBtn = document.querySelector('.custom-role span');
    const addUser = document.querySelector('.add-custom-role');
    const resetBtn = document.querySelector('.add-custom-role [type="reset"]');

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
                roles.forEach(roleAgain=>{
                    e.target !== roleAgain && roleAgain.classList.remove('selected-opt')
                })

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