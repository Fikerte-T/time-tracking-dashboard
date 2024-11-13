 // Convert the HTMLCollection to an array using the spread operator
const classDaily = [...document.getElementsByClassName('daily')]
const classWeekly = [...document.getElementsByClassName('weekly')]
const classMonthly = [...document.getElementsByClassName('monthly')]

// const dailyTracker = document.getElementById('daily-tracker');
// const monthlyTracker = document.getElementById('monthly-tracker');
// const weeklyTracker = document.getElementById('weekly-tracker');

const handleDailyTracker = (e) => {
  console.log(e.target)
  e.target.classList.add('active')
  monthlyTracker.classList.remove('active')
  weeklyTracker.classList.remove('active')

  classDaily.forEach(item => item.classList.remove('hidden'))
  classMonthly.forEach(item => item.classList.add('hidden'))
  classWeekly.forEach(item => item.classList.add('hidden'))
}

const handleWeeklyTracker = (e) => {
  console.log(e.target)

  e.target.classList.add('active')
  monthlyTracker.classList.remove('active')
  dailyTracker.classList.remove('active')
  classWeekly.forEach(item => item.classList.remove('hidden'))
  classDaily.forEach(item => item.classList.add('hidden'))
  classMonthly.forEach(item => item.classList.add('hidden'))


  
}

const handleMonthlyTracker = (e) => {
  console.log(e.target)

  e.target.classList.add('active')
  weeklyTracker.classList.remove('active')
  dailyTracker.classList.remove('active')
  classMonthly.forEach(item => item.classList.remove('hidden'))
  classWeekly.forEach(item => item.classList.add('hidden'))
  classDaily.forEach(item => item.classList.add('hidden'))
}