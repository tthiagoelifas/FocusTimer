import { volumeTree, volumeRain, volumeCoffee, volumeFire } from "./elements.js"

export let treeSound = new Audio('./Sounds/Floresta.wav')
export let rainSound = new Audio('./Sounds/Chuva.wav')
export let coffeeSound = new Audio('./Sounds/Cafeteria.wav')
export let fireSound = new Audio('./Sounds/Lareira.wav')
export function playTreeSound(){
  treeSound.play()
  treeSound.loop = true
  treeSound.volume = volumeTree.value
}
export function pauseTreeSound(){  
  treeSound.pause()
}
export function playRainSound(){
  rainSound.play()
  rainSound.loop = true
  rainSound.volume = volumeRain.value
}
export function pauseRainSound(){  
  rainSound.pause()
}
export function playCoffeeSound(){
  coffeeSound.play()
  coffeeSound.loop = true
  coffeeSound.volume = volumeCoffee.value
}
export function pauseCoffeeSound(){  
  coffeeSound.pause()
}
export function playFireSound(){
  fireSound.play()
  fireSound.loop = true
  fireSound.volume = volumeFire.value
}
export function pauseFireSound(){  
  fireSound.pause()
}


