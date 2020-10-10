$(document).ready(() => {
    let images = ['(../resources/images/desktop-image-hero-1_auto_x1.jpg)', '(../resources/images/desktop-image-hero-2_auto_x1.jpg)', '(../resources/images/desktop-image-hero-3_auto_x1.jpg)'];
    let head = ['Discover innovative ways to decorate', 'We are available all across the globe', 'Manufactured with the best materials',];
    let desc = [
        "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
        "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."];
    const $slideImg = $('.top-left');
    const $buttonLeft = $('.button-left');
    const $buttonRight = $('.button-right');
    const $heading = $('#heading');
    const $description = $('#description');
    
    let menuOpen = false;
    let i = 0;

    $('.menu-btn').on('click', event => {
        if(!menuOpen) {
            $(event.currentTarget).addClass('open');
            menuOpen = true;
            $('.room').fadeOut();
            $('.one').fadeIn()
            $('.two').fadeIn()
            $('.three').fadeIn()
            $('.four').fadeIn()
        } else {
            $(event.currentTarget).removeClass('open');
            menuOpen = false;
            $('.room').fadeIn();
        }
    });

    const prev = () => {
        if (i <= 0 )
            i = images.length;
            i--;
            return i;
    }

    const next = () => {
        if(i >= images.length-1) 
            i -= 1;
            i++;
            return i;
    }

    $($buttonLeft).on('click', () => {
        prev();
        $slideImg.css('background', 'url' + images[i]);
        $slideImg.css('background-repeat', 'no-repeat');
        $slideImg.css('background-size', '883px 470px');
        $heading.html(head[i]);
        $($description).html(desc[i]);
    });

    $($buttonRight).on('click', () => {
        next();
        $slideImg.css('background', 'url' + images[i]);
        $slideImg.css('background-repeat', 'no-repeat');
        $slideImg.css('background-size', '883px 470px');
        $heading.html(head[i]);
        $($description).html(desc[i]);
    });
});
