let countDown;
const timerDisplay = document.querySelector('.time-left');
const endTime = document.querySelector('.end-time');
const buttons = document.querySelectorAll('[data-time]');
const stop = document.querySelector('.stop');
function timer(seconds){
	clearInterval(countDown);
	const now = Date.now();
	const then = Math.round(seconds - (now / 1000));
	console.log(then);
	displayTimeLeft(then);
	// displayEndTime(then);
	countDown = setInterval(() => {
		const secondsLeft = Math.round(seconds - (Date.now() / 1000));
		if(secondsLeft < 0){
			clearInterval(countDown);
			return;
		}

		displayTimeLeft(secondsLeft);
	},1000);
}

function displayTimeLeft(seconds){
	const days = Math.floor(seconds / (3600 * 24));
	let remainSeconds = seconds % (3600 * 24);
	const hours = Math.floor(remainSeconds / 3600);
	remainSeconds = remainSeconds % 3600;
	const minutes = Math.floor(remainSeconds / 60);
	remainSeconds = remainSeconds % 60;
	const display = `${days}:${hours}:${minutes}:${remainSeconds < 10 ? '0' : ''}${remainSeconds}`;
	// console.log(days,hours,minutes,remainSeconds);
	document.title = display;
	timerDisplay.textContent = display;
}
function startTimer(){
	const seconds = parseInt(this.dataset.time);
	timer(seconds);
}
buttons.forEach(button => button.addEventListener('click', startTimer));
stop.addEventListener('click',stopTimer);
document.customForm.addEventListener('submit',function(e){
	e.preventDefault();
	const seconds = (new Date(this.times.value)).getTime();
	if(seconds < Date.now()){
		alert('Quá khứ rồi đếm làm gì!!');
		return;
	}
	timer(seconds / 1000);
	this.reset();
})
function stopTimer(){
	timer(0);
}