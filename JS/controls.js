export default function Controls  ({
  buttonPause,
  buttonPlay,
  
}) {


  function play() {
    buttonPause.classList.remove('hide')
    buttonPlay.classList.add('hide')
  }

   function pause() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }

  function reset() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')

  }

  

return {
  play,
  pause,
  reset
}

}
