import {minutesDisplay, secondsDisplay} from './elements.js'


let initalMinutes = Number(minutesDisplay.innerText)
let initalSeconds = Number(secondsDisplay.innerText)
let minutes = Number(minutesDisplay.innerText)
let seconds = Number(secondsDisplay.innerText)
let timerInterval

export function countDown(){
  timerInterval = setInterval(function (){
  
    if (minutes == 0 && seconds == 0){
      return
    }

    if(seconds <= 0){
      seconds = 60
      minutes--
    }
    seconds--

    minutesDisplay.innerText = String(minutes).padStart(2, "0")
    secondsDisplay.innerText = String(seconds).padStart(2, "0")
  } ,1000)
  
} 

export function stopCountDown(){
  clearInterval(timerInterval)
}

export function resetDisplay(){
  minutesDisplay.innerText = String(initalMinutes).padStart(2, "0")
  secondsDisplay.innerText = String(initalSeconds).padStart(2, "0")
  minutes = initalMinutes
  seconds = initalSeconds
}

export function plusFive(){
  stopCountDown()
  resetDisplay()
  let plusMinutes = Number(minutesDisplay.innerText) + 5
  if(plusMinutes >= 50){
    plusMinutes = 50
  } 
  minutesDisplay.innerText = String(plusMinutes).padStart(2, '0')
  minutes = plusMinutes
  initalMinutes = plusMinutes

}

export function minusFive(){
  stopCountDown()
  resetDisplay()
  let minusMinutes = Number(minutesDisplay.innerText) - 5
  if(minusMinutes <= 0){
    minusMinutes = 5
  }
  minutesDisplay.innerText = String(minusMinutes).padStart(2, '0')
  minutes = minusMinutes
  initalMinutes = minusMinutes
}
