window.addEventListener('load', e =>{
    NodeList.prototype.indexOf = Array.prototype.indexOf;
   
    const roles = document.querySelectorAll('.default-roles ul li');
    const rolesContent = document.querySelectorAll('.abilities');
   



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