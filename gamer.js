var scores, roll1, roll2; 



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

function rockIt (){
	var result1 = Math.floor(Math.random() * 3) + 1;
	var result2 = Math.floor(Math.random() * 3) + 1;

	if (result1 === result2){
	result1 = result2 + 1;
	}

var p1Result = document.querySelector('.rock')
var p2Result = document.querySelector('.paper')

roll1 = p1Result.src = 'piece-' + result1 + '.png';
roll2 = p2Result.src = 'piece-' + result2 + '.png';

document.querySelector(".player-2-panel").style.display='block';
document.querySelector(".player-1-panel").style.display='block';

}


document.querySelector('.playOn').addEventListener('click', rockIt);
document.querySelector('.players').addEventListener('click', choose);
document.querySelector(".intro").style.display='none';
document.querySelector(".player-2-panel").style.display='none';
document.querySelector(".player-1-panel").style.display='none';
