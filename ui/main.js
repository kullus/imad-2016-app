console.log('Loaded!');

//change the text of main text
var element=document.getElementById('main-txt');
element.innerHTML='kuldeep';

//move the image
var img = document.getElementById('madi');
var marginLeft=0;
function moveright(){
    marginLeft=marginLeft+5;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function() {
    var interval=setInterval(moveright,50);
};