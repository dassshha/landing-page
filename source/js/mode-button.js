export const onButtonLightModeClicked = () => {
    $('.big-picture__back').attr('src', './img/big-pic-day.jpg').attr('alt', 'Light mode');
    $('.big-picture__lamp').css('display', 'block');
}

const onButtonDarkModeClicked = async () => {
    const lampId = $('.widget-card_active').attr('id')
    const lamp = await JSON.parse(localStorage.getItem(lampId));
    if (lamp.isDarkMode) {
        $('.big-picture__back').attr('src', './img/big-pic-night.jpg').attr('alt', 'Dark mode');
        $('.big-picture__lamp').css('display', 'none');
    }

}

export const addModeSwitchersToButtons = () => {
    $('.button_light').click(onButtonLightModeClicked);
    $('.button_dark').click(onButtonDarkModeClicked);
};
