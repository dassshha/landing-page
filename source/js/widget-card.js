import {fillData} from "./fill.js";
import {onButtonLightModeClicked} from "./mode-button.js";

const makeActive = (id) => {
    $('.widget-card').removeClass('widget-card_active');
    $(`#${id}`).addClass('widget-card_active');
};


export const onWidgetCardClicked = async (evt) => {
    const lampId = evt.currentTarget.id;
    makeActive(lampId);
    onButtonLightModeClicked();

    const lamp = await JSON.parse(localStorage.getItem(lampId));
    fillData(lamp);
}
