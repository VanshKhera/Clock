window.onload = function () {
  
    var seconds = 00; 
    var tens = 00; 
    var minutes = 00;
    var hours = 00;
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var appendMinutes = document.getElementById("minutes")
    var appendHours = document.getElementById("hours")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval;
  
      buttonStart.onclick = function() {

      clearInterval(Interval);
      Interval = setInterval(startTimer, 10);
      }

      buttonStop.onclick = function() {
         clearInterval(Interval);
      }
    
    buttonReset.onclick = function() {
       clearInterval(Interval);
      tens = "00";
        seconds = "00";
      appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }
    
     
    
    function startTimer () {
      tens++; 
      
      if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){
        appendTens.innerHTML = tens;
        
      } 
      
      if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }
      if (seconds > 59){
        minutes++;
        appendSeconds.innerHTML = "0" + 0;
        seconds = 0
        appendMinutes.innerHTML = "0" + minutes;
      }
      if (minutes > 59){
        hours++;
        appendMinutes.innerHTML = "0" + 0;
        minutes = 0
        appendHours.innerHTML = "0" + hours;
      }
    
    }
    
  
  }

var controls = document.getElementById("controls")
var btn = document.getElementById("button-start")
var btn2 = document.getElementById("button-stop")
var btn3 = document.getElementById("button-reset")
var t = document.getElementById("t")

controls.addEventListener("click", function e(){
    if (btn.style.display == ""){
        btn.style.display = "none"
        btn2.style.display = "none"
        btn3.style.display = "none"

        t.style.fontSize = "280px"
        controls.innerHTML = "Show Controls"
    }
    else{
        btn.style.display = ""
        btn2.style.display = ""
        btn3.style.display = ""

        t.style.fontSize = "238px"
        controls.innerHTML = "Hide Controls"
    }
})

document.addEventListener('keyup', event => {
  if (event.code === 'Space') {
    // SOON!
    // console.log("Space pressed")
  }
})