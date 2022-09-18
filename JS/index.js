
////// IMPORTS //////

import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"


const timer = Timer({
  secondsDisplay,
  minutesDisplay,
})

const controls = Controls({
    buttonPause,
    buttonPlay,
  })




///// Buttons /////

  buttonPlay.addEventListener('click', function() {
    controls.play()
    timer.countdown()
    sound.pressButton()
 
  })
      
  buttonPause.addEventListener('click', function() {
    controls.pause()
    timer.pausetimer()
    sound.pressButton()
    

  })

  buttonReset.addEventListener('click', function() {
    timer.resetTimer()
    controls.reset()
    sound.pressButton()

  })

  buttonMore5.addEventListener('click', function() {
    timer.moretime5()
    sound.pressButton()

  })

  buttonfewer5.addEventListener('click', function() {
    timer.fewer5()
    sound.pressButton()

  })

  buttonflorest.addEventListener('click', function() {
    buttonflorest.classList.toggle ('blue')
    input.classList.toggle ('white')
    toggleAudioPlay(sound.forestAudio)




  })

  buttonrain.addEventListener('click', function() {
    buttonrain.classList.toggle ('blue')
    input2.classList.toggle ('white')
    toggleAudioPlay(sound.rainAudio)

  })

  buttonfire.addEventListener('click', function() {
    buttonfire.classList.toggle ('blue')
    input3.classList.toggle ('white')
    toggleAudioPlay(sound.fireAudio)

  })

  buttoncoffe.addEventListener('click', function() {
    buttoncoffe.classList.toggle ('blue')
    input4.classList.toggle ('white')
    toggleAudioPlay(sound.coffeeAudio)    
  })

  buttondark.addEventListener('click', function() {
    sound.pressButton()

    buttondark.classList.add('hide')
    btnlight.classList.remove ('hide')
    


    document.body.classList.toggle ('dark')
    
    buttoncoffe.classList.toggle ('card-dark')
    buttonfire.classList.toggle ('card-dark')
    buttonrain.classList.toggle ('card-dark')
    buttonflorest.classList.toggle ('card-dark')
    
    input4.classList.toggle ('card-dark2')
    input3.classList.toggle ('card-dark2')
    input2.classList.toggle ('card-dark2')
    input.classList.toggle ('card-dark2')

   minutesDisplay.classList.toggle ('dark-span')
   secondsDisplay.classList.toggle ('dark-span')
   twopoints.classList.toggle ('dark-span')


   buttonPlay.classList.toggle ('buttonsdark')
   buttonReset.classList.toggle ('buttonsdark')
   buttonPause.classList.toggle ('buttonsdark')
   buttonMore5.classList.toggle ('buttonsdark')
   buttonfewer5.classList.toggle ('buttonsdark')
   

    buttondark.classList.toggle ('buttonsdark')




  })

  btnlight.addEventListener('click', function() {
    sound.pressButton()

    buttondark.classList.remove('hide')
    btnlight.classList.add ('hide')
    


    document.body.classList.toggle ('dark')
    
    buttoncoffe.classList.toggle ('card-dark')
    buttonfire.classList.toggle ('card-dark')
    buttonrain.classList.toggle ('card-dark')
    buttonflorest.classList.toggle ('card-dark')
    
    input4.classList.toggle ('card-dark2')
    input3.classList.toggle ('card-dark2')
    input2.classList.toggle ('card-dark2')
    input.classList.toggle ('card-dark2')

   minutesDisplay.classList.toggle ('dark-span')
   secondsDisplay.classList.toggle ('dark-span')
   twopoints.classList.toggle ('dark-span')


   buttonPlay.classList.toggle ('buttonsdark')
   buttonReset.classList.toggle ('buttonsdark')
   buttonPause.classList.toggle ('buttonsdark')
   buttonMore5.classList.toggle ('buttonsdark')
   buttonfewer5.classList.toggle ('buttonsdark')
   

    buttondark.classList.toggle ('buttonsdark')



  })

//////////

import {
  buttonPlay,
  buttonPause,
  minutesDisplay,
  secondsDisplay,
  buttonReset,
  buttonMore5,
  buttonfewer5,
  buttonflorest,
  buttonrain,
  buttonfire,
  buttoncoffe,
  input,
  input2,
  input3,
  input4,
  buttondark,
  twopoints,
  btnlight
  

} from './elements.JS'
import sounds from "./sounds.js"


///// Função do audio //////
function toggleAudioPlay(myAudio) {
  let isPaused = myAudio.paused

     if (isPaused) {
      myAudio.play();
    } else {
      myAudio.pause();
    }
  }

  const sound = Sound()