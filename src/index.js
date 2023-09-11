const hourHand = document.querySelector(".hourHand");
const minuteHand = document.querySelector(".minuteHand");
const secondHand = document.querySelector(".secondHand");

function ClockMovement(){
  //console.log("test");
  let currentDate = new Date();
  let hr = currentDate.getHours();
  let min = currentDate.getMinutes();
  let sec = currentDate.getSeconds();

  
  let hr_rotate = 30*hr + min/2 - 90, 
      min_rotate = 6 * min - 90,
      sec_rotate = 6 * sec - 90;

      //console.log(hr, min, sec, hr_rotate, min_rotate, sec_rotate);    
      hourHand.style.transform = `rotate(${hr_rotate}deg)`;
      minuteHand.style.transform = `rotate(${min_rotate}deg)`;
      secondHand.style.transform = `rotate(${sec_rotate}deg)`;
}

setInterval(ClockMovement, 1000);

// function changeHands() {
//   let shorthand = document.getElementsByClassName("hourHand");
//   let counter = 0;
//   setInterval(() => {
    
//   }, 60000);
// }