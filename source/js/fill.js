
const fillFeature = (lamp, feature) => {
    const featureTemplate = $('#feature-row').contents().clone();

    featureTemplate.find('.features-list__term').text(feature.term);
    featureTemplate.find('.features-list__definition').text(feature.definition);

    return featureTemplate;
}

const fillFeatures = (lamp) => {
    $('.features-list').empty();
    const material = fillFeature(lamp, {term: 'Material: ', definition: lamp.material});
    const dimensionsParams =  `H ${lamp.height} х W ${lamp.weight} х D ${lamp.width}`
    const dimensions = fillFeature(lamp, {term: 'Dimensions (cm): ', definition: dimensionsParams});
    const weight = fillFeature(lamp, {term: 'Net Weight: ', definition: lamp.weight + 'kg'});
    const electrification = fillFeature(lamp, {term: 'Electrification: ', definition: lamp.electrification})
    $('.features-list').append(material, dimensions, weight, electrification);
};

const fillImg = (lamp) => {
    if ($('.info__img')) {
        $('.info__img').remove();
    }
    if ($('.big-picture__lamp')) {
        $('.big-picture__lamp').remove();
    }
    const singleLampTemplate = $('#single-lamp-img').contents().clone();
    const lampWithBackTemplate = $('#lamp-with-back').contents().clone();

    singleLampTemplate.attr('src', lamp.image).attr('alt', lamp.name);
    lampWithBackTemplate.attr('src', lamp.image).attr('alt', lamp.name);

    (singleLampTemplate).insertAfter($('.circle'));
    $('.big-picture').prepend(lampWithBackTemplate);
};

export const fillData = (lamp) => {
    fillFeatures(lamp);
    fillImg(lamp);
    $('.features-list').css('background-image', 'none');
};
