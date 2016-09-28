console.log('Loaded!');

// change the text of main-text div
var element = document.getElementbyId('main-text');

element.innerhtml = "New value";


// Move the image
var img = document.getElementbyId('img');
img.onclick= function () {
 img.style.marginleft = "100px";
};