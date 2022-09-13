export default function() {
    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

    const forestAudio = new Audio('/audio/Floresta.wav')
    const rainAudio = new Audio("/audio/CHuva.wav")
    const fireAudio = new Audio("/audio/Lareira.wav")
    const coffeeAudio = new Audio("/audio/cafeteria.wav")
    buttonPressAudio.volume = 0.2
    kitchenTimer.volume = 0.35


    function pressButton() {
        buttonPressAudio.play()
    }

    function timeEnd() {
        kitchenTimer.play()
    }




    let forestinput = document.querySelector('#slider3')

    forestinput.addEventListener('change', () => {
      let slider = forestinput.value / 100;
      forestAudio.volume = slider;
      
    });
    


    
    let chuvainput = document.querySelector('#slider1')
    
    chuvainput.addEventListener('change', () => {
      let slider = chuvainput.value / 100;
      rainAudio.volume = slider;
      
    });


    
    let coffeinput = document.querySelector('#slider4')
    
    coffeinput.addEventListener('change', () => {
      let slider = coffeinput.value / 100;
      coffeeAudio.volume = slider;
      
    });


    
    let fireinput = document.querySelector('#slider2')
    
    fireinput.addEventListener('change', () => {
      let slider = fireinput.value / 100;
      fireAudio.volume = slider;
      
    });

    



    return {
        pressButton,
        timeEnd,
        forestAudio,
        rainAudio,
        fireAudio,
        coffeeAudio,
        forestinput,
        fireinput,
        coffeinput,
        chuvainput
        
        
        
    }
}