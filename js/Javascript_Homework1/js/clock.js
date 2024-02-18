let userName = prompt("Adiniz nedir?")

 myName = document.querySelector("#myName")
 myName.innerHTML = userName

 myClock =document.querySelector("#myClock")

 let x = setInterval(function(){
    let now = new Date();
    let day = now.getDay();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
   
    if(day == 0){
       day="Pazar"
    }else if(day == 1){
       day="Pazartesi"
    }else if(day == 2){
       day="Salı"
    }else if(day == 3){
       day="Çarşamba"
    }else if(day == 4){
       day="Perşembe"
    }else if(day == 5){
       day="Cuma"
    }else if(day == 6){
       day="Cumartesi"
    }
    let countTime = `${hours}:${minutes}:${seconds} ${day}`
    myClock.innerHTML = countTime
 },1000)







