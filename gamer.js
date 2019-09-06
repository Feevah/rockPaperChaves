var scores, roll; 





function choose (){

var char1 = Math.floor(Math.random() * 5) + 1;
var char2 = Math.floor(Math.random() * 5) + 1;

// function char3 (){
// 	if (char1 === char2){
// 	char2 + 1;
// }}

var p1DOM = document.querySelector('.chaves')
var p2DOM = document.querySelector('.prof')

p1DOM.style.display = 'block';
p2DOM.style.display = 'block';
p1DOM.src = 'man-' + char1 + '.jpg';
p2DOM.src = 'man-' + char2 + '.jpg';


}

document.querySelector('.players').addEventListener('click', choose);

document.querySelector(".chaves").style.display='none';
document.querySelector(".prof").style.display='none';
