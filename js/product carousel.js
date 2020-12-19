window.addEventListener('load', e =>{
    const imageContainer = document.querySelector('.carousel_description .carousel')
    const boxes = document.querySelectorAll('.carousel_description .carousel div');

    const extraImages = [boxes[0]];
    if(boxes.length > 1){
        const div = document.createElement('div');
        const div2 = document.createElement('div');
        const img = document.createElement('img');
        const img2 = document.createElement('img');
        div.className = 'img';
        img.src = extraImages[0].firstChild.src;
        div.appendChild(img)
        imageContainer.appendChild(div);
    }

    const imagesBox = document.querySelectorAll('.carousel_description .carousel div');


    const lengthOfImages = imagesBox.length;
    let width = imagesBox[0].clientWidth;
    const counter = lengthOfImages - 1;
    let imageIndex = 0;


    //create smooth slides by adding extra images
    




    //just to keep changing image by changing numbers
    const increaseImageIndex = setInterval(() => {
        imageIndex === counter ? imageIndex = 1 : imageIndex += 1;
    }, 3000);

    const slide = e =>{
        imagesBox.forEach(image =>{
            if(imageIndex === counter){
                image.style.transform = `translateX(${imageIndex *- width}px)`;
                setTimeout(() => {
                    image.style.transition = '0s';
                    image.style.transform = `translateX(${0 *- width}px)`;
                }, 800);

            }else{
                image.style.transition ='0.3s'
                image.style.transform = `translateX(${imageIndex *- width}px)`;
            }
        })
    }


    const startSlide = setInterval(() => {
        slide()
    }, 3000);

    window.onresize = e=>{
        width = imagesBox[0].clientWidth;
        slide()
        
    }
})