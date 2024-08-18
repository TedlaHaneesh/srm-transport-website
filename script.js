document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("navbar");
    var logo = document.getElementById("logo-img");
    
    if (window.pageYOffset > 0) {
        navbar.classList.add("scrolled");
        navbar.classList.remove("transparent");
        logo.src = "images/srmwhitelogo.png";
    } else {
        navbar.classList.add("transparent");
        navbar.classList.remove("scrolled");
        logo.src = "images/final-logo.png";
    }
});

window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    var logo = document.getElementById("logo-img");
    
    if (window.pageYOffset > 0) {
        navbar.classList.add("scrolled");
        navbar.classList.remove("transparent");
        logo.src = "images/srmwhitelogo.png";
    } else {
        navbar.classList.add("transparent");
        navbar.classList.remove("scrolled");
        logo.src = "images/final-logo.png";
    }
};
