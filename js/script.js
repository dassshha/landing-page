import {getLamps} from './api.js';
import {fillWidget} from "./widget-list.js";
import {fillLocalStorage} from "./data.js";
import {addModeSwitchersToButtons} from "./mode-button.js";

$(function () {
    addModeSwitchersToButtons();
    getLamps().
        then((lamps) => fillLocalStorage(lamps)).
        then((lamps) => {
        fillWidget(lamps);
        $('#1').click();
    }).
        catch((error) => console.log(error));
});
