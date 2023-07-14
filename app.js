

const hourHand = document.querySelector('.hour-hand')
const minHand = document.querySelector('.min-hand')
const secondHand = document.querySelector('.second-hand')

function myDate (){
   const now = new Date()
   
   const seconds = now.getSeconds()
   const secondDegree = ((seconds/60)*360) + 90
   secondHand.style.transform = `rotate(${secondDegree}deg)`

   const minute = now.getMinutes()
   const minuteDegree = ((minute/60)*360)+90
   minHand.style.transform =`rotate(${minuteDegree}deg)`

   const hour = now.getHours()
   const hourDegree = ((hour/12)*360)+90
   hourHand.style.transform =`rotate(${hourDegree}deg)`
}

setInterval(myDate , 1000)