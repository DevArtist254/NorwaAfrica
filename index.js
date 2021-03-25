const btnDropdown = document.querySelectorAll(".btn-dropDown")

//1. select of all button and loop thru each
btnDropdown.forEach((el) => {
  el.addEventListener("click", btnActive)
})

function btnActive() {
  let content = this.parentNode.parentNode.children[1]

  //1. check if their is any style attributes open
  closeContent()

  //2. then add styles and effects
  content.style.display = "block"
  content.classList.add("animate__animated", "animate__backInUp")
  this.style.transform = "rotate(180deg)"
}

//this checks if their is any content open then closes it
function closeContent() {
  //select all class with content
  const contentDropDown = document.querySelectorAll(".content")
  //convert the nodelist to an array
  let arr = Array.from(contentDropDown)

  //loop thru the array to check for the attribute style
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i].hasAttribute("style")
    const btn = arr[i].parentNode.children[0].children[1]

    console.log(btn)

    if (element) {
      //set the style to none
      arr[i].style.display = "none"
      btn.style.transform = "rotate(0deg)"
    }
  }
}

const slides = document.querySelectorAll(".move");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSilde = () => {
  const current = document.querySelector('.current')
  //remove current class
  current.classList.remove('current');

  //Check for next slide
  if(current.nextElementSibling){
    //add current to next sibling
    current.nextElementSibling.classList.add('current')
  }else {
    slides[0].classList.add('current');
  }

  setTimeout(() => {
    current.classList.remove('current')
  })
}

const prevSilde = () => {
  const current = document.querySelector('.current')
  //remove current class
  current.classList.remove('current');

  //Check for next slide
  if(current.previousElementSibling){
    //add current to next sibling
    current.previousElementSibling.classList.add('current')
  }else {
    //add current to class
    slides[slides.length - 1].classList.add('current');
  }

  setTimeout(() => {
    current.classList.remove('current')
  })
}


next.addEventListener('click', e => {
  nextSilde()

  if(auto) {
    clearInterval(slideInterval)
    slideInterval = setInterval(nextSilde, intervalTime)
  }
})

prev.addEventListener('click', e => {
  prevSilde()

  if(auto) {
    clearInterval(slideInterval)
    slideInterval = setInterval(nextSilde, intervalTime)
  }
})


if(auto) {
  //Run next slide at interval time
  slideInterval = setInterval(nextSilde, intervalTime)
}