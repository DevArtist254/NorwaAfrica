const tl = gsap.timeline({defaults: {ease: "power1.out"}})

tl.to(".text", {y: "0%", duration: 1, stagger: 0.25})
tl.to(".slider", {y: "-100%", duration: 1.5, delay: 0.5})
tl.to(".intro", {y: "-100%", duration: 1}, "-=1")
tl.fromTo("nav", {opacity: 0}, {opacity: 1, duration: 1})
tl.fromTo(".hero-sect__heading", {opacity: 0}, {opacity: 1, duration: 1}, "-=1")


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