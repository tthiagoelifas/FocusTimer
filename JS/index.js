import {
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonMinus,
  treeDisplay,
  rainDisplay,
  coffeeDisplay,
  fireDisplay,
  buttonSun,
  buttonMoon,
  clickTreeDisplay,
  clickRainDisplay,
  clickCoffeeDisplay,
  clickFireDisplay,
  volumeTree,
  volumeRain,
  volumeCoffee,
  volumeFire
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
  pauseFireSound,
  treeSound,
  rainSound,
  coffeeSound,
  fireSound
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

buttonSun.addEventListener('click',function(){
  buttonSun.classList.toggle('hidden')
  buttonMoon.classList.toggle('hidden')
  document.querySelector('body').classList.toggle('dark')
})

buttonMoon.addEventListener('click',function(){
  buttonSun.classList.toggle('hidden')
  buttonMoon.classList.toggle('hidden')
  document.querySelector('body').classList.toggle('dark')
 

})

clickTreeDisplay.addEventListener("click",function(){
  treeDisplay.classList.toggle('selectCard')
  if(treeDisplay.classList.contains('selectCard')){
    playTreeSound()
  }else{
    pauseTreeSound()
  }
  
})
clickRainDisplay.addEventListener("click",function(){
  rainDisplay.classList.toggle('selectCard')
  if(rainDisplay.classList.contains('selectCard')){
    playRainSound()
  }else{
    pauseRainSound()
  }
})
clickCoffeeDisplay.addEventListener("click",function(){
  coffeeDisplay.classList.toggle('selectCard')
  if(coffeeDisplay.classList.contains('selectCard')){
    playCoffeeSound()
  }else{
    pauseCoffeeSound()
  }
})
clickFireDisplay.addEventListener("click",function(){
  fireDisplay.classList.toggle('selectCard')
  if(fireDisplay.classList.contains('selectCard')){
    playFireSound()
  }else{
    pauseFireSound()
  }
})

volumeTree.addEventListener('change',() => {
  treeSound.volume = volumeTree.value
})
volumeRain.addEventListener('change',() => {
  rainSound.volume = volumeRain.value
})
volumeCoffee.addEventListener('change',() => {
  coffeeSound.volume = volumeCoffee.value
})
volumeFire.addEventListener('change',() => {
  fireSound.volume = volumeFire.value
})



