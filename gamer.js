var scores, roll; 



document.getElementById('score-1').textContent ='0';
document.getElementById('score-2').textContent ='0';


function choose (){

var char1 = Math.floor(Math.random() * 5) + 1;
var char2 = Math.floor(Math.random() * 5) + 1;

	if (char1 === char2){
	char2 = char1 + 1;
	}

var p1DOM = document.querySelector('.chaves')
var p2DOM = document.querySelector('.prof')

p1DOM.style.display = 'block';
p2DOM.style.display = 'block';
p1DOM.src = 'man-' + char1 + '.jpg';
p2DOM.src = 'man-' + char2 + '.jpg';
document.querySelector(".player-2-panel").style.display='block';
document.querySelector(".player-1-panel").style.display='block';

document.querySelector(".intro").style.display='block';
document.querySelector('.players').style.display='none';
}


document.querySelector('.playOn').addEventListener('click', choose);
document.querySelector('.players').addEventListener('click', choose);
document.querySelector(".intro").style.display='none';
document.querySelector(".player-2-panel").style.display='none';
document.querySelector(".player-1-panel").style.display='none';
