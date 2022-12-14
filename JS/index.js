import {
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonMinus,
  treeDisplay,
  rainDisplay,
  coffeeDisplay,
  fireDisplay,
} from "./elements.js"
import {countDown, stopCountDown, resetDisplay, plusFive, minusFive} from './timer.js'
import { 
  playTreeSound,
  pauseTreeSound,
  playRainSound,
  pauseRainSound,
  playCoffeeSound,
  pauseCoffeeSound,
  playFireSound,
  pauseFireSound
} from "./sounds.js"

buttonPlay.addEventListener('click', function(){
  stopCountDown()
  countDown()
})

buttonStop.addEventListener('click', function(){
  stopCountDown()
  resetDisplay()
})

buttonPlus.addEventListener('click', function(){
  plusFive()
})
buttonMinus.addEventListener('click', function(){
  minusFive()
})

treeDisplay.addEventListener("click",function(){
  treeDisplay.classList.toggle('selectCard')
  if(treeDisplay.classList.contains('selectCard')){
    playTreeSound()
  }else{
    pauseTreeSound()
  }
  
})
rainDisplay.addEventListener("click",function(){
  rainDisplay.classList.toggle('selectCard')
  if(rainDisplay.classList.contains('selectCard')){
    playRainSound()
  }else{
    pauseRainSound()
  }
})
coffeeDisplay.addEventListener("click",function(){
  coffeeDisplay.classList.toggle('selectCard')
  if(coffeeDisplay.classList.contains('selectCard')){
    playCoffeeSound()
  }else{
    pauseCoffeeSound()
  }
})
fireDisplay.addEventListener("click",function(){
  fireDisplay.classList.toggle('selectCard')
  if(fireDisplay.classList.contains('selectCard')){
    playFireSound()
  }else{
    pauseFireSound()
  }
})


