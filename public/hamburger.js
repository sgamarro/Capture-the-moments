const hamburger = document.getElementById("hamburger");
const navOL = document.getElementById("nav-ol")

hamburger.addEventListener('click', () =>{
    navOL.classList.toggle('show');
});