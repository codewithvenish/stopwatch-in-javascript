const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

let hrs=mins=secs=ms=0, startTimer;

startBtn.addEventListener('click',() =>{

    
    startBtn.classList.add('start-active');
    stopBtn.classList.remove('stop-active');

    startTimer = setInterval(() =>{
     ms++;
     if(ms == 100){
          secs++;
          ms = 0;
     }
     if(secs == 60){
        mins++;
        secs = 0;
     }
     if(mins == 60){
        hrs++;
        mins = 0;
     }
     updateDisplay();
    },10)
});

stopBtn.addEventListener('click',() =>{


    startBtn.classList.remove('start-active');
    stopBtn.classList.add('stop-active');


    clearInterval(startTimer);
});

resetBtn.addEventListener('click',() =>{

    startBtn.classList.remove('start-active');
    stopBtn.classList.remove('stop-active');

    
    hrs=mins=secs=ms=0;
    updateDisplay();
    clearInterval(startTimer);
});

function updateDisplay(){
  let hours = hrs < 10 ? '0' + hrs : hrs;
  let minutes = mins < 10 ? '0' + mins : mins;
  let seconds = secs < 10 ? '0' + secs : secs;
  let millisecs = ms < 10 ? '0' + ms : ms;


   document.querySelector('.hrs').innerText = hours;
   document.querySelector('.mins').innerText = minutes;
   document.querySelector('.secs').innerText = seconds;
   document.querySelector('.ms').innerText = millisecs;
}