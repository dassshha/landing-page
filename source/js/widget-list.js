import {onWidgetCardClicked} from "./widget-card.js";

export const fillWidget = (lamps) => {
    const cardTemplate = $('#widget-card').contents();

    const lampsList = lamps.map((lamp) => {
        const card = cardTemplate.clone();
        card.attr('id', lamp.id);
        card.find('.widget__img').attr('src', lamp.image).attr('alt', lamp.name);
        card.click(onWidgetCardClicked);
        return card;
    });

    $('#widget-list').append(lampsList);
    $('.widget-list').css('background-image', 'none');
};
