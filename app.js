const boxContainer = document.querySelector(".boxContainer")
const saluteTextContainer = document.querySelector(".saluteTextContainer")
const saluteImgContainer = document.querySelector(".saluteImgContainer")
const authorName = document.querySelector(".name")
const jobTitleContainers = document.querySelectorAll(".jobTitleContainer")
const jobTitles = document.querySelectorAll(".jobTitle")
const projectsTitle = document.querySelector(".projectsTitle")
const phones = document.querySelectorAll(".phone")
const laptop = document.querySelector(".laptop")

//for(let i = 0; i<365; i++){

  //const el = document.createElement("div")
 // el.classList = list.includes(i) ? "box active" : "box"
 // boxContainer.appendChild(el)
//}

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

window.onload=function(){
 
  createBoxes();
}


window.addEventListener("scroll", ()=>{
  let offsetY = window.scrollY
  saluteTextContainer.style.transform= `translateY(${offsetY * 0.1}px)`
  saluteImgContainer.style.transform= `translate(${offsetY * 0.4}px, ${offsetY * 0.7}px)`
  authorName.style.transform= `translateX(${offsetY * 0.1}px)`
  jobTitleContainers[0].style.backgroundPositionY = `${offsetY * 0.5}px`
  jobTitleContainers[1].style.backgroundPositionY = `${-offsetY * 0.5}px`
  jobTitles[0].style.transform = `translateX(calc(200vh - ${offsetY}px))`
  jobTitles[1].style.transform = `translateX(calc(-300vh + ${offsetY}px))`
  projectsTitle.style.transform = `translateY(calc(400vh - ${offsetY}px))`
  phones[0].style.transform = `translateX(calc(500vh - ${offsetY}px))`
  laptop.style.transform = `translateX(calc(600vh - ${offsetY}px))`
  phones[1].style.transform = `translateX(calc(750vh - ${offsetY}px))`
})