const days = document.getElementById('day')
const hours = document.getElementById('hour')
const min = document.getElementById('min')
const sec = document.getElementById('sec')
const number = document.querySelectorAll('.number')
const timerSection = document.querySelector(".timer-section")
console.log(number)

const futureDate = new Date('Jan 1 2023, 0:00').getTime()
const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24

function getTheTime(){
    const today = new Date()
    const timeSpan = futureDate - today

    const daySpan = Math.floor(timeSpan/day)
    const hourSpan = Math.floor((timeSpan % day)/hour)
    const minSpan = Math.floor((timeSpan % hour)/minute)
    const secondSpan = Math.floor((timeSpan % minute)/second)

    days.textContent = daySpan
    hours.textContent = hourSpan
    min.textContent = minSpan
    sec.textContent = secondSpan
    
    number.forEach((num)=>{
        if(num.textContent < 10 ){
            num.textContent = 0 + `${num.textContent}`
        }
    })
    if(timeSpan < 0){
        timerSection.innerHTML = '<h1> Expired  </h1>'
        clearInterval(loadTime)
        return
    }
}

const loadTime = setInterval(getTheTime, 1000)

