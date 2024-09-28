// Responsive menu-bar design start here  

const menuIcon = document.querySelector("#menu-icon")
const navBar = document.querySelector(".navbar")
const icon = document.querySelector("i")
const clickMenu = document.querySelector(".navbar a")
const navLinks = document.querySelectorAll("#nav-links")

menuIcon.addEventListener("click",function(){
    navBar.classList.toggle("active-menu")
    if(icon.classList.contains('fa-bars')){
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-times")
    }else{
        icon.classList.remove("fa-times")
        icon.classList.add('fa-bars')
    }
})

const loader = document.querySelector("#preloader")
window.addEventListener("load",function(){
    loader.style.display = "none";
})

navLinks.forEach(link => {
    link.addEventListener("click", function() {
        navBar.classList.remove("active-menu")  // Close the menu
        icon.classList.remove("fa-times")       // Change the icon back to hamburger
        icon.classList.add("fa-bars")
    })
})



// Responsive menu-bar design ends here  