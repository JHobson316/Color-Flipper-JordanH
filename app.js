"use strict"
// Grabbing each 
let backgroundName = document.querySelector("#color-name");
let resetButton = document.querySelector("#reset-button");
let imageButton = document.querySelector("#image-button")
let colorButton = document.querySelector("#color-button");

colorButton.addEventListener('click', () =>{
    // Making a random number for each part of the hex code
    let randoR = Math.floor(Math.random()*256);
    let randoG = Math.floor(Math.random()*256);
    let randoB = Math.floor(Math.random()*256);
    // Structuring each value to represent hex code
    let newColor = `rgb(${randoR}, ${randoG}, ${randoB})`
    // Made an array of color values including the random hex
    // included newcolor in multiple times to give it a higher chance of being picked
    const colorArray = ['Red', 'Green', 'Blue', 'Cyan', 'Orange', newColor, newColor, newColor];
    const element = document.querySelector('body');
    // colorPicker selects one of the index values from the array
    let colorPicker = Math.floor(Math.random()*colorArray.length);
    // The background image is set to a blank value in case there is a background image displayed at the moment
    element.style.backgroundImage = '';
    // The background color is changed to the randomly picked array item
    element.style.backgroundColor = colorArray[colorPicker];
    backgroundName.innerHTML = `Background color: ${colorArray[colorPicker]}`
});

// Making all images indie game wallpapers that I like
imageButton.addEventListener('click', () => {
    let imageArray = ['firewatch','nitw','ahat','superhot','hades','deathsdoor','celeste', 'brcf'];
    const element = document.querySelector('body');
    let randoImage = Math.floor(Math.random()*imageArray.length);
    // The background image is set to the file found in the path
    // by using the randomly picked item's name
    element.style.backgroundImage = `url('./assets/${imageArray[randoImage]}.jpg')`;
    element.style.backgroundColor = '';
    // A message is returned depending on the background image picked
    // Realized a bit too late that this would have been more efficient wih objects
    if (imageArray[randoImage] == 'firewatch'){
        backgroundName.innerHTML = 'The game in the image is Firewatch!'
    }
    if (imageArray[randoImage] == 'nitw'){
        backgroundName.innerHTML = 'The game in the image is Night in the Woods!'
    }
    if (imageArray[randoImage] == 'ahat'){
        backgroundName.innerHTML = 'The game in the image is A Hat in Time!'
    }
    if (imageArray[randoImage] == 'superhot'){
        backgroundName.innerHTML = 'The game in the image is SuperHot!'
    }
    if (imageArray[randoImage] == 'hades'){
        backgroundName.innerHTML = 'The game in the image is Hades!'
    }
    if (imageArray[randoImage] == 'deathsdoor'){
        backgroundName.innerHTML = "The game in the image is Death's Door!"
    }
    if (imageArray[randoImage] == 'celeste'){
        backgroundName.innerHTML = 'The game in the image is Celeste!'
    }
    if (imageArray[randoImage] == 'brcf'){
        backgroundName.innerHTML = 'The game in the image is Bomb Rush Cyberfunk!'
    }
})
// The reset button returns the background to its default white
resetButton.addEventListener('click', () => {
    const element = document.querySelector('body');
    element.style.backgroundImage = '';
    element.style.backgroundColor = 'rgb(255, 255, 255)'
})

