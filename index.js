var red = document.getElementById('red');
var blue = document.getElementById('blue');
var green = document.getElementById('green');
var yellow = document.getElementById('yellow');


// create web audio api context




red.onclick = function(){

var audioCtx = new AudioContext();

// create Oscillator node
var oscillator = audioCtx.createOscillator();

	oscillator.type = 'triangle';
	oscillator.frequency.setValueAtTime(540, audioCtx.currentTime); // value in hertz
	oscillator.connect(audioCtx.destination);


var oscillatorNode = audioCtx.createOscillator();

oscillator.start();

oscillator.stop(audioCtx.currentTime + 0.2)

}


green.onclick = function(){

var audioCtx = new AudioContext();

// create Oscillator node
var oscillator = audioCtx.createOscillator();

	oscillator.type = 'triangle';
	oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // value in hertz
	oscillator.connect(audioCtx.destination);


var oscillatorNode = audioCtx.createOscillator();

oscillator.start();

oscillator.stop(audioCtx.currentTime + 0.2)

}


blue.onclick = function(){

var audioCtx = new AudioContext();

// create Oscillator node
var oscillator = audioCtx.createOscillator();

	oscillator.type = 'triangle';
	oscillator.frequency.setValueAtTime(340, audioCtx.currentTime); // value in hertz
	oscillator.connect(audioCtx.destination);


var oscillatorNode = audioCtx.createOscillator();

oscillator.start();

oscillator.stop(audioCtx.currentTime + 0.2)

}


yellow.onclick = function(){

var audioCtx = new AudioContext();

// create Oscillator node
var oscillator = audioCtx.createOscillator();

	oscillator.type = 'triangle';
	oscillator.frequency.setValueAtTime(240, audioCtx.currentTime); // value in hertz
	oscillator.connect(audioCtx.destination);


var oscillatorNode = audioCtx.createOscillator();

oscillator.start();

oscillator.stop(audioCtx.currentTime + 0.2)

}








