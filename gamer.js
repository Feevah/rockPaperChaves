var score1, score2, roll1, roll2; 



score1 = document.getElementById('score-1').textContent = 0;
score2 = document.getElementById('score-2').textContent = 0;


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
p1DOM.src = 'man-' + char1 + '.png';
p2DOM.src = 'man-' + char2 + '.png';
// document.querySelector(".player-2-panel").style.display='block';
// document.querySelector(".player-1-panel").style.display='block';

// document.querySelector(".intro").style.display='block';
// document.querySelector('.players').style.display='none';

}

function rockIt (){

// make pieces appear
document.querySelector('.rock').style.display='block'
document.querySelector('.paper').style.display='block'

// random selector

var result1 = Math.floor(Math.random() * 3) + 1;
var result2 = Math.floor(Math.random() * 3) + 1;

// set pieces equal to random selecto

var p1Result = document.querySelector('.rock')
var p2Result = document.querySelector('.paper')

roll1 = p1Result.src = 'piece-' + result1 + '.png';
roll2 = p2Result.src = 'piece-' + result2 + '.png';

// updtae score

if(result1 === 2 && result2 === 1){
	score1 += 1
}
else if (result1 === 3  && result2 === 2){
	score1 +=1
} 
else if (result1 === 1 && result2 === 3){
	score1 +=1
}
else if (result1 === result2){
	score1 === score1 && score2 === score2;
}
else {score2 += 1}

document.getElementById('score-1').textContent = score1;
document.getElementById('score-2').textContent = score2;


// document.querySelector(".player-2-panel").style.display='block';
// document.querySelector(".player-1-panel").style.display='block';

}


document.querySelector('.rock').style.display='none'
document.querySelector('.paper').style.display='none'

document.querySelector('.playOn').addEventListener('click', rockIt);
document.querySelector('.players').addEventListener('click', choose);
document.querySelector(".intro").style.display='block';
document.querySelector(".player-2-panel").style.display='block';
document.querySelector(".player-1-panel").style.display='block';
