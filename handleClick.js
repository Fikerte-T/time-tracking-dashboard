
let classDaily = [];
let classWeekly = [];
let classMonthly = [];

const observer = new MutationObserver(() => {
 // Convert the HTMLCollection to an array using the spread operator
  classDaily = [...document.getElementsByClassName('daily')];
  classWeekly = [...document.getElementsByClassName('weekly')];
  classMonthly = [...document.getElementsByClassName('monthly')];
});

observer.observe(document.getElementById('container'), {
  childList: true,
  subtree: true
})
const handleDailyTracker = (e) => {
  e.target.classList.add('active')
  monthlyTracker.classList.remove('active')
  weeklyTracker.classList.remove('active')
  classDaily.forEach(item => item.classList.remove('hidden'))
  classMonthly.forEach(item => item.classList.add('hidden'))
  classWeekly.forEach(item => item.classList.add('hidden'))
}

const handleWeeklyTracker = (e) => {
  e.target.classList.add('active')
  monthlyTracker.classList.remove('active')
  dailyTracker.classList.remove('active')

  classWeekly.forEach(item => item.classList.remove('hidden'))
  classDaily.forEach(item => item.classList.add('hidden'))
  classMonthly.forEach(item => item.classList.add('hidden')) 
}

const handleMonthlyTracker = (e) => {
  e.target.classList.add('active')
  weeklyTracker.classList.remove('active')
  dailyTracker.classList.remove('active')

  classMonthly.forEach(item => item.classList.remove('hidden'))
  classWeekly.forEach(item => item.classList.add('hidden'))
  classDaily.forEach(item => item.classList.add('hidden'))
}



