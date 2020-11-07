'use strict';

function getDogImage(imageQuantity) {
    let link = `
        https://dog.ceo/api/breeds/image/random/${imageQuantity}
    `;
    fetch(link)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        .catch(error => alert('Something went wrong. Try again later.'));
}

// Question 2 Requirements: Builds on previous code 
// & displays images in DOM (See below)
function displayResults(responseJson) {
    console.log(responseJson);
    let allImages = responseJson.message;
    let results = grabImages(allImages);

    //display the results section
    $('.results').removeClass('hidden');

    //replace the existing image(s) with the new one(s)
    $('.results').html(results);
}

function grabImages(allImages) {
    let imageArray = "";
    for (let i = 0; i < allImages.length; i++) {
        imageArray += `
        <img src=${allImages[i]}>
        `;
    }
    return imageArray;
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        var imageQuantity = $('#quantity').val();
        getDogImage(imageQuantity);
    });
}

$(function () {
    console.log('App loaded! Waiting for submit!');
    watchForm();
});