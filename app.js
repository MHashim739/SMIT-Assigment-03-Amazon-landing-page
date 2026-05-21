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