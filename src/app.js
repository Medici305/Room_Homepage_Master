let sliderImg = document.querySelector('.top-left');
let images = ['../resources/images/desktop-image-hero-2_auto_x1.jpg', '../resources/images/desktop-image-hero-3_auto_x1.jpg'];
let buttonLeft = document.querySelector('.bottom-left');
let buttonRight = document.querySelector('.bottom-right');
let i = 0;

const prev = () => {
    if (i <= 0 ) {
        i = images.length;
        i--;
        return setImg();
    }
}

const next = () => {
    if(i >= 0 ) {
        i -= 1;
        i++;
        return setImg();
    }
}

const setImg = () => {
    return sliderImg.getElementsByClassName.backgroundColor = 'red';
}

buttonLeft.onclick = prev();
buttonRight.onclick = next();

