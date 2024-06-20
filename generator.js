const stakes = document.querySelectorAll(".stake");
const returns = document.querySelectorAll(".return-amount");
const teamOneScores = document.querySelectorAll(".team-one-score");
const teamOneDateTimes = document.querySelectorAll(".event-one-date-time");
const eventOneOdds = document.querySelectorAll(".event-one-odd");

const teamTwoScores = document.querySelectorAll(".team-two-score");
const teamTwoDateTimes = document.querySelectorAll(".event-two-date-time");
const eventTwoOdds = document.querySelectorAll(".event-two-odd");

let newEventOneName =  document.getElementById('event-one-name-gen')
let newEventOneOdd =  document.getElementById('event-one-odd-gen')
let newEventOneDateTimes =  document.getElementById('event-one-date-time-gen')
let newTeamOneScore = document.getElementById('event-one-score-gen')
let newStake = document.getElementById('new-stake')


let newEventTwoName =  document.getElementById('event-two-name-gen')
let newEventTwoOdd =  document.getElementById('event-two-odd-gen')

let newEventTwoDateTimes =  document.getElementById('event-two-date-time-gen')
let newTeamTwoScore = document.getElementById('event-two-score-gen')

let balance = document.getElementById('Account-balance');
let footerBallance = document.getElementById('footer-ballance');

let balanceValue = parseFloat(balance.innerText)
let settledEventName1 = document.getElementById('settled1')
let settledEventName2 = document.getElementById('settled2')

let whatsappText = document.getElementById('whatsapp-text')



function lowerCaseV(){
  let number = document.getElementById('v').innerHTML

  const regex = / v /gi
  const words = number.split(" ")
  let capitaliseWords = words.map(word => word.charAt(0).toLocaleUpperCase() + word.slice(1))
  capitaliseWords = capitaliseWords.join(" ")
  const newNumber = capitaliseWords.replace(regex, ' v ')
  teamOneDateTimes.innerHTML = newNumber
  number = newNumber

}

function formatNumber(number){
  return number.toLocaleString('en-US', {
    minimumFractionDigits:2,
    maximumFractionDigits:2
  })

}


function trackBalance(){

  let acountBalance = localStorage.getItem('balance')? JSON.parse(localStorage.getItem('balance')): 500;
console.log(acountBalance)
acountBalance -= newStake.value
let balanceForHomePage = localStorage.setItem('homeBallance', JSON.stringify(acountBalance) )
console.log(acountBalance)
let calculation = parseFloat(newEventOneOdd.value * newEventTwoOdd.value * newStake.value)


acountBalance = acountBalance + calculation

localStorage.setItem('balance', JSON.stringify(acountBalance) )
 }

function changeContent(){
  for (const teamTwoDateTime of teamTwoDateTimes) {
    let variable= `${newEventTwoName.value}  ${newEventTwoDateTimes.value}`
  
    const regex = / v /gi
    const words = variable.split(" ")
    let capitaliseWords = words.map(word => word.charAt(0).toLocaleUpperCase() + word.slice(1))
    capitaliseWords = capitaliseWords.join(" ")
    const newNumber = capitaliseWords.replace(regex, ' v ')
  
    teamTwoDateTime.innerHTML = newNumber
  
  }
  
for (const ret of returns) {
  let calcReturns = parseFloat(newEventOneOdd.value * newEventTwoOdd.value * newStake.value)
  console.log(calcReturns)
  

  ret.innerHTML = `$${formatNumber(calcReturns)}`;
}
for (const stake of stakes) {
  stake.textContent = newStake.value;  // Change text content
  // OR
  stake.innerHTML = `$${newStake.value}.00 `;
}

for (const teamOneScore of teamOneScores) {
  teamOneScore.textContent = newTeamOneScore.value;  
  teamOneScore.innerHTML =   newTeamOneScore.value;

}
for (const teamOneDateTime of teamOneDateTimes) {

  let variable = `${newEventOneName.value}  ${newEventOneDateTimes.value}`



  const regex = / v /gi
  const words = variable.split(" ")
  let capitaliseWords = words.map(word => word.charAt(0).toLocaleUpperCase() + word.slice(1))
  capitaliseWords = capitaliseWords.join(" ")
  const newNumber = capitaliseWords.replace(regex, ' v ')

  teamOneDateTime.innerHTML = newNumber

}
for (const eventOneOdd of eventOneOdds) {
  eventOneOdd.innerHTML = newEventOneOdd.value
}
for (const teamTwoScore of teamTwoScores) {
  teamTwoScore.innerHTML = newTeamTwoScore.value;  

}
for (const teamTwoDateTime of teamTwoDateTimes) {
  let variable= `${newEventTwoName.value}  ${newEventTwoDateTimes.value}`

  const regex = / v /gi
  const words = variable.split(" ")
  let capitaliseWords = words.map(word => word.charAt(0).toLocaleUpperCase() + word.slice(1))
  capitaliseWords = capitaliseWords.join(" ")
  const newNumber = capitaliseWords.replace(regex, ' v ')

  teamTwoDateTime.innerHTML = newNumber

}
for (const eventTwoOdd of eventTwoOdds) {
  eventTwoOdd.innerHTML = newEventTwoOdd.value
}
 

}
function GenerateWhatsappText(){
  firstDate = newEventOneDateTimes.value.split(" ")
  time1 = firstDate[firstDate.length - 1]
  secondDate = newEventTwoDateTimes.value.split(" ")
  time2 = firstDate[secondDate.length - 1]
  firstResult =  newTeamOneScore.value.split(" ")
  result1 = firstResult[firstResult.length -1]
  secondtResult =  newTeamTwoScore.value.split(" ")
  result2 = secondtResult[secondtResult.length -1]
  
  event1 = newEventOneName.value.split(" ")
  split1 = event1.map(word => word.charAt(0).toLocaleUpperCase() + word.slice(1))
  event2 = newEventTwoName.value.split(" ")
  split2 = event2.map(word => word.charAt(0).toLocaleUpperCase() + word.slice(1))
  
  whatsappText.innerHTML = 
`Hello guys, our ticket for tomorow involves:

  ${split1.join(" ")} odds ${newEventOneOdd.value} 
  Time ${time1}.
  Final result ${result1},

  ${split2.join(" ")} odds ${newEventTwoOdd.value} 
  Time ${time2}.
  Final result ${result2}.

  Total odds ${(newEventOneOdd.value * newEventTwoOdd.value).toFixed(2)}, 

  We are expecting a return of over $${Math.floor((newEventOneOdd.value * newEventTwoOdd.value * newStake.value ) / 1000)}k 
  on a maximum recomended stake of $${newStake.value}.`
  
}


let cashOut = document.querySelector('.cash-out')
let settled = document.querySelector('.settled')
let unsettled = document.querySelector('.unsettled')

function addBackgroundColor(variable){
  const links = document.querySelectorAll('a')
  links.forEach(link => link.classList.remove("green-background"))
  variable.classList.toggle("green-background")
}

   

   function setHomeBallance(){
    let balance = JSON.parse(localStorage.getItem('homeBallance'))
    balance = parseFloat(balance.toFixed(2)).toLocaleString('en-US')
    let home = document.getElementById('Account-balance')
    home.innerHTML = ` $${balance}`
    footerBallance.innerHTML = ` $${balance}`
   }

   function settledBallance(){
    let balance = JSON.parse(localStorage.getItem('balance'))
    balance = parseFloat(balance.toFixed(2)).toLocaleString('en-US')
    let home = document.getElementById('Account-balance')
    home.innerHTML = ` $${balance}`
   }

  
   

   function settledEventName(){
    let variable= newEventOneName.value
    let variable2= newEventTwoName.value

  const regex = / v /gi
  const words = variable.split(" ")
  const words2 = variable2.split(" ")
  let capitaliseWords = words.map(word => word.charAt(0).toLocaleUpperCase() + word.slice(1))
  let capitaliseWords2 = words2.map(word => word.charAt(0).toLocaleUpperCase() + word.slice(1))
  capitaliseWords = capitaliseWords.join(" ")
  capitaliseWords2 = capitaliseWords2.join(" ")
  const newNumber = capitaliseWords.replace(regex, ' v ')
  const newNumber2 = capitaliseWords2.replace(regex, ' v ')

  settledEventName1.innerText = newNumber
  settledEventName2.innerText = newNumber2
   }


   function threeFunctions() {
    changeContent()
    trackBalance()
    setHomeBallance()
    settledEventName()
    GenerateWhatsappText()
   }
   function widthdrawHundredK(){
   let acountBalance =    JSON.parse(localStorage.getItem('balance'))

      acountBalance -= 100000

      let home = document.getElementById('Account-balance')
    let newBalance = parseFloat(acountBalance.toFixed(2)).toLocaleString('en-US')
    home.innerHTML = ` $${newBalance}`


    localStorage.setItem('balance', JSON.stringify(acountBalance) )

   }

   function settledEventName(){
    let variable= newEventOneName.value
    let variable2= newEventTwoName.value

  const regex = / v /gi
  const words = variable.split(" ")
  const words2 = variable2.split(" ")
  let capitaliseWords = words.map(word => word.charAt(0).toLocaleUpperCase() + word.slice(1))
  let capitaliseWords2 = words2.map(word => word.charAt(0).toLocaleUpperCase() + word.slice(1))
  capitaliseWords = capitaliseWords.join(" ")
  capitaliseWords2 = capitaliseWords2.join(" ")
  const newNumber = capitaliseWords.replace(regex, ' v ')
  const newNumber2 = capitaliseWords.replace(regex, ' v ')

  settledEventName1.innerText = newNumber
  settledEventName2.innerText = newNumber2
   }