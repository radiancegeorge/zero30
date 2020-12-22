window.addEventListener('load', e =>{
    NodeList.prototype.indexOf = Array.prototype.indexOf;
    const imageContainer = document.querySelector('.carousel_description .carousel')
    const circlesContainer = document.querySelector('.carousel_description .carousel .circles')
    const boxes = document.querySelectorAll('.carousel_description .carousel .img');
    const buttons = document.querySelectorAll('.carousel_description .carousel span');
    const extraImages = [boxes[0]];
    if(boxes.length > 1){
        const div = document.createElement('div');
        const img = document.createElement('img');
        div.className = 'img';
        img.src = extraImages[0].firstChild.src;
        div.appendChild(img)
        imageContainer.appendChild(div);
    }

    const imagesBox = document.querySelectorAll('.carousel_description .carousel .img');


    const lengthOfImages = imagesBox.length;
    let width = imagesBox[0].clientWidth;
    const counter = lengthOfImages - 1;
    let imageIndex = 0;


    //create smooth slides by adding extra images
    




    //just to keep changing image by changing numbers
    // const increaseImageIndex = setInterval(() => {
    //     imageIndex === counter ? imageIndex = 1 : imageIndex += 1;
    // }, 3000);

    // const slide = e =>{
    //     imagesBox.forEach(image =>{
    //         if(imageIndex === counter){
    //             image.style.transform = `translateX(${imageIndex *- width}px)`;
    //             setTimeout(() => {
    //                 image.style.transition = '0s';
    //                 image.style.transform = `translateX(${0 *- width}px)`;
    //             }, 800);

    //         }else{
    //             image.style.transition ='0.3s'
    //             image.style.transform = `translateX(${imageIndex *- width}px)`;
    //         }
    //     })
    // }


    // const startSlide = setInterval(() => {
    //     slide()
    // }, 3000);

    window.onresize = e=>{
        width = imagesBox[0].clientWidth;
        // slide()
        imagesBox.forEach(image =>{
            image.style.transform = `translateX(${imageIndex *- width}px)`;
        })

        
    }



    if(buttons.length >= 1){
        buttons[0].addEventListener('click', e =>{
            // console.log(buttons[0])
            imageIndex <= 0 ? imageIndex = counter -1 : imageIndex -= 1;
    
            imagesBox.forEach(image =>{
                image.style.transform = `translateX(${imageIndex *- width}px)`;
                console.log(imageIndex);
                if(imageIndex === 0){
                    setTimeout(() => {
                        image.style.transition = '0s';
                        imageIndex = counter;
                        image.style.transform = `translateX(${imageIndex *- width}px)`;
                    }, 400);
                }
            })
            console.log('done');
            imagesBox.forEach(image =>{
                image.style.transition = '0.3s'
            })
        });
    
        buttons[1].addEventListener('click', e =>{
            imageIndex >= counter ? imageIndex = 0 : imageIndex += 1;
            imagesBox.forEach(image =>{
                image.style.transform = `translateX(${imageIndex *- width}px)`;
                console.log(imageIndex);
                if(imageIndex === counter){
                    setTimeout(() => {
                        image.style.transition = '0s';
                        imageIndex = 0;
                        image.style.transform = `translateX(${imageIndex *- width}px)`;
                    }, 400);
                }
            });
            
            imagesBox.forEach(image =>{
                image.style.transition = '0.3s'
            })
    
            console.log('done')
        });
    }

    for(let i = 1; i < lengthOfImages; i++){
        const dot = document.createElement('div');
        dot.className = 'dot';
        circlesContainer.appendChild(dot)
    }


    setInterval(() => {
        
        const dots = document.querySelectorAll('.dot');
        dots.forEach(dot =>{
            dots.indexOf(dot) === (imageIndex) ? dot.style.borderColor = 'rgba(96, 84, 84, 0.76)' : dot.style.borderColor = ''; 
        })

    }, 500);






    //ccustom switch section

    const radioButton = document.querySelector('.overview .active [type="radio"]');
    const customSwitch = document.querySelector('.overview .active .rect');
    customSwitch.addEventListener('click', e =>{
        customSwitch.classList.toggle('on');
        radioButton.checked = !radioButton.checked
    })
});

//finish !!!!!