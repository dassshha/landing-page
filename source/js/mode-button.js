export const onButtonLightModeClicked = () => {
    $('#big-picture__back_source').attr('srcset', './img/big-pic-day@1x.webp 1x, ./img/big-pic-day@2x.webp 2x');
    $('.big-picture__back').attr('src', './img/big-pic-day@1x.jpg').attr('srcset', './img/big-pic-day@1x.jpg 1x, ./img/big-pic-day@2x.jpg 2x').attr('alt', 'Light mode');
    $('.big-picture__lamp').css('display', 'block');
}

const onButtonDarkModeClicked = async () => {
    const lampId = $('.widget-card_active').attr('id')
    const lamp = await JSON.parse(localStorage.getItem(lampId));
    if (lamp.isDarkMode) {
        $('#big-picture__back_source').attr('srcset', './img/big-pic-night@1x.webp 1x, ./img/big-pic-night@2x.webp 2x');
        $('.big-picture__back').attr('src', './img/big-pic-night@1x.jpg').attr('srcset', './img/big-pic-night@1x.jpg 1x, ./img/big-pic-night@2x.jpg 2x').attr('alt', 'Dark mode');
        $('.big-picture__lamp').css('display', 'none');
    }

}

export const addModeSwitchersToButtons = () => {
    $('.button_light').click(onButtonLightModeClicked);
    $('.button_dark').click(onButtonDarkModeClicked);
};
