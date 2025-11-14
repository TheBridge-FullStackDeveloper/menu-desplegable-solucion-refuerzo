const menuToggle = document.getElementById("hamburger-icon")
const navbar = document.getElementById("navbar")
const submenuLinks = document.querySelectorAll(".has-submenu > a")

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active")
})

submenuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()
    link.parentElement.classList.toggle("active")
  })
})
