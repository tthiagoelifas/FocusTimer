let treeSound = new Audio('./Sounds/Floresta.wav')
let rainSound = new Audio('./Sounds/Chuva.wav')
let coffeeSound = new Audio('./Sounds/Cafeteria.wav')
let fireSound = new Audio('./Sounds/Lareira.wav')
export function playTreeSound(){
  treeSound.play()
  treeSound.loop = true
}
export function pauseTreeSound(){  
  treeSound.pause()
}
export function playRainSound(){
  rainSound.play()
  rainSound.loop = true
}
export function pauseRainSound(){  
  rainSound.pause()
}
export function playCoffeeSound(){
  coffeeSound.play()
  coffeeSound.loop = true
}
export function pauseCoffeeSound(){  
  coffeeSound.pause()
}
export function playFireSound(){
  fireSound.play()
  fireSound.loop = true
}
export function pauseFireSound(){  
  fireSound.pause()
}


