window.addEventListener('load', e=>{
    const tabContainer = document.querySelector('.tab-profile-content');
    const [profileBtn, usersBtn] = document.querySelectorAll('.tab-toggle');
    const [profileSection, userSection] = document.querySelectorAll('.tab-profile-content > .wrap');
    // console.log(profileSection)
    let currentNum;

    const slide = (e)=>{
        const num = e;
        // console.log(currentNum)
        currentNum = num;
        const elemWidth = profileSection.clientWidth;
        // console.log(elemWidth) 
        profileSection.style.transform = `translateX(${num *elemWidth}px)`;
        userSection.style.transform = `translateX(${num * elemWidth}px)`;
    }

    usersBtn.addEventListener('click', e=>{
        slide(-1);
        usersBtn.classList.add('active');
        profileBtn.classList.remove('active')
    });
    profileBtn.addEventListener('click', e=>{
        slide(0);
        profileBtn.classList.add('active');
        usersBtn.classList.remove('active');
        // console.log('clicked')
    });

    window.addEventListener('resize', e=>{
        slide(currentNum);
    });


    // console.log(profileBtn)

})