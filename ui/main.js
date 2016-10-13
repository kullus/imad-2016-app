console.log('Loaded!');

//change the text of main text
var element=document.getElementById('main-txt');
element.innerHTML='kuldeep';

//move the image
var img = document.getElementById('madi');
img.onclick=function() {
    img.style.marginLeft=100px;
};