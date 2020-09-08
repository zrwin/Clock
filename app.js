setInterval(setClock, 1000);

const hourHand = document.querySelector(".selecthour");
const minuteHand = document.querySelector(".selectminute");
const secondsHand = document.querySelector(".selectsecond");

function setClock(){
    const date = new Date();
  
const seconds = date.getSeconds()*6;
const minute = date.getMinutes()*6;
var hour =  date.getHours() ;
if(hour>12){
    hour = hour-12;
}
if(hour === 12){
    hour =12;
}
hour*= 30;
console.log(hour);
setRotation(secondsHand, seconds);
setRotation(minuteHand, minute);
setRotation(hourHand, hour);
}

function setRotation(element, rotation){
    element.style.setProperty("--rotation", rotation);
}

setClock();