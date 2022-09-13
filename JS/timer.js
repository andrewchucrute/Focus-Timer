
import Sound from "./sounds.js"

export default function Timer({
  secondsDisplay,
  minutesDisplay,
  timerTimeOut,
  
}) {


  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2,'0')
    secondsDisplay.textContent = String(seconds).padStart(2,'0') 
  
  }
  
    function countdown() {
  
  
      timerTimeOut = setTimeout(function() {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0
        
      updateDisplay(minutes, 0)
  
        
        if (isFinished) {
          updateDisplay()
          resetTimer()
          Sound().timeEnd()
            return
        }
        
        if (seconds <= 0) {
            
            seconds = 60
            --minutes
        }
        
        updateDisplay(minutes, String(seconds -1))
  
  
        countdown()
    }, 1000 )   
  }


/////////////////////////////



	function moretime5() {
		updateDisplay(
			Number(minutesDisplay.textContent) + 5,
			Number(secondsDisplay.textContent)
		)
	}

  function fewer5() {
		let minutes = Number(minutesDisplay.textContent)
		let seconds = Number(secondsDisplay.textContent)

		if (minutes > 5) {
			updateDisplay(minutes - 5, seconds)
		} else {
			updateDisplay(0, seconds)
		}
    if (minutes < 5) {
      alert('Não é possível colocar números negativos.')
      updateDisplay(5,0)
    }
	}
  
  function resetTimer() {
    updateDisplay(5, 0)
    clearTimeout(timerTimeOut)
  }
  
  function pausetimer() {
      clearTimeout(timerTimeOut)
  
    }


return {
    countdown, 
    pausetimer,
    resetTimer,
    moretime5,
    fewer5
}

}