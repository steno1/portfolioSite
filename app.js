
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;


function getTime() {
  let now = new Date();

  // Get the user's local time
  let localTime = now.getTime();
  let localOffset = now.getTimezoneOffset() * 60000;
  let utcTime = localTime + localOffset;
  let timeZone = getFormattedTimeZone(now.getTimezoneOffset());

  // Set the time to the user's local time
  now.setTime(utcTime);

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let greeting = getGreeting(hours);

  // Add leading zeroes to minutes and seconds
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let timeString = hours + ":" + minutes + ":" + seconds;

  // Display the time and greeting
  document.getElementById("time").textContent = "Current time in " + timeZone + ": " + timeString;
  document.getElementById("time2").textContent =greeting;
  setTimeout(getTime, 1000);
}


function getGreeting(hours) {
  let greeting;

  if (hours >= 0 && hours < 19) {
    greeting = "Good Day";
  }
    else {
      greeting = "Good Night";
    }

  return greeting;
}

function getFormattedTimeZone(timeZoneOffset) {
  let hours = Math.floor(Math.abs(timeZoneOffset) / 60);
  let minutes = Math.abs(timeZoneOffset) % 60;
  let sign = timeZoneOffset < 0 ? "+" : "-";

  // Add leading zeroes to hours and minutes
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return "GMT" + sign + hours + ":" + minutes;
}

getTime();


const boxContainer = document.querySelector(".boxContainer")
const saluteTextContainer = document.querySelector(".saluteTextContainer")
const saluteImgContainer = document.querySelector(".saluteImgContainer")
const authorName = document.querySelector(".name")
const jobTitleContainers = document.querySelector(".jobTitleContainer")
const jobTitles = document.querySelector(".jobTitle")

//const projectsTitle = document.querySelector(".projectsTitle")
const phones = document.querySelectorAll(".phone")
const laptop = document.querySelector(".laptop")



function createBoxes(){
  const container =document.getElementById("containers");
  for (let i =1;  i<13;  i++) {
    const div =document.createElement("div");
    div.classList.add("box");
    div.textContent=" Please Click";
    container.appendChild(div)

    //add hover event listener
    div.addEventListener("mouseover", ()=>{
      div.textContent=" Click to Find Me";
      div.classList.add("findme2")
    });
    //add hover event listener
    div.addEventListener("mouseout", ()=>{
      div.textContent="Find Me";
      div.classList.add("findme")
    })
    // addclick event listener
    div.addEventListener("click", ()=>{
      window.location.href="https://github.com/steno1?tab=repositories"
    })
    
  }
}


const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;
  
  const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
  
  window.location.href = `mailto:stenonicolas@yahoo.com?subject=Portfolio Form Submission&body=${encodeURIComponent(body)}`;
//clearing the input field after the message has been sent
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';


});


window.onload=function(){
 
  createBoxes();
}

window.addEventListener("scroll", ()=>{
  let offsetY = window.scrollY
  saluteTextContainer.style.transform= `translateY(${offsetY * 0.1}px)`
  saluteImgContainer.style.transform= `translate(${offsetY * 0.4}px, ${offsetY * 0.7}px)`;

  jobTitleContainers.style.backgroundPositionY = `${offsetY * 0.1}px`
  //jobTitleContainer.style.backgroundPositionY = `${-offsetY * 0.5}px`
  jobTitles.style.transform = `translateX(calc(195vh - ${offsetY}px))`
  //jobTitles.style.transform = `translateX(calc(-300vh + ${offsetY}px))`
  
  //projectsTitle.style.transform = `translateY(calc(300vh - ${offsetY}px))`
  phones[0].style.transform = `translateX(calc(345vh - ${offsetY}px))`
  //laptop.style.transform = `translateX(calc(600vh - ${offsetY}px))`
  laptop.style.transform = `translateX(calc(440vh - ${offsetY}px))`


  if (window.innerWidth <= 768) {
    authorName.style.transform = `translateX(${offsetY * 0}px)`;
    //projectsTitle.style.transform = "translateY(0)";
  } else {
    authorName.style.transform = `translateX(${offsetY * 0.1}px)`;
   // projectsTitle.style.transform = `translateY(calc(300vh - ${offsetY}px))`;
  }

})
