// nav 01 signin button event
function showCard(){
    document.getElementById("card").style.display="block";
}
function hideCard(){
    document.getElementById("card").style.display="none"
}

// hamburger JS

function openMenu(){

    var sidebar = document.getElementById("sidebar");

    sidebar.classList.add("active");

}

function closeMenu(){

    var sidebar = document.getElementById("sidebar");

    sidebar.classList.remove("active");

}


// function openMenu(){

//     var sidebar = document.getElementById("sidebar");

//     sidebar.classList.toggle("active");

// }

// section 3 slider js

let index = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(i){
    if(i >= slides.length) index = 0;
    else if(i < 0) index = slides.length - 1;
    else index = i;

    document.querySelector(".slides").style.transform =
        `translateX(${-index * 100}%)`;
}

function changeSlide(step){
    showSlide(index + step);
}

// auto slide every 6 seconds
setInterval(() => {
    changeSlide(1);
}, 6000);