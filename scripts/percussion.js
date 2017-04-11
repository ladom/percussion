window.addEventListener('keydown', function(e) {
	var number = e.keyCode;
	console.log(number)
	const audio = document.querySelector('audio[data-key="' + number + '"]');
	const key = document.querySelector('.key[data-key="' + number + '"]');
	if (!audio) return;
	
	audio.currentTime = 0; 
	audio.play();

	key.classList.add('playing');

	function removeTransition(e) {
		if (e.propertyName !== 'transform') return;

		this.classList.remove('playing');
	}

	const keys = document.querySelectorAll('.key');
	keys.forEach(key => key.addEventListener('transitionend', removeTransition));
});