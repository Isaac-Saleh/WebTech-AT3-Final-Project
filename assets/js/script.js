

//------------ Functionality for the fly out on load -----------------//
const menu = document.getElementById("flyoutMenu");
const projectCards = document.querySelectorAll('.project-card');

menu.classList.add("hidden");

if(screen.availWidth >= 820) {
    menu.classList.remove("hidden");
}

//------------ Functionality for the fly out button -----------------//
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("flyoutButton");
    button.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent click event from bubbling up
        menu.classList.toggle("hidden");
    });
    document.addEventListener("click", function (event) {
        if ((!menu.contains(event.target)) && screen.availWidth < 820) {

            menu.classList.add("hidden");
        }
    })
});

//------------ Functionality for the fly out on orientation change -----------------//
screen.orientation.addEventListener("change", function(event) {
    if(screen.availWidth >= 820) {
        menu.classList.remove("hidden");
    }
    if(screen.availWidth < 820){
        menu.classList.add("hidden");
    }
});

//---------------- Functionality to have menu bar listen for resize ----------------- //
window.addEventListener("resize", function(event) {
    if(window.innerWidth >= 820) {
        menu.classList.remove("hidden");
    }
    else {
        menu.classList.add("hidden");
    }
});

function redirectToPage(id){

    window.location.href='mywork.html';
}

//------- Functionality to Direct Project to Project Summary on myworks.html Page -----//


projectCards.forEach(function (projectCard) {
    projectCard.addEventListener('click', function (event) {
    })
});

document.addEventListener( 'DOMContentLoaded', function() {
    if(window.location.pathname === '/pages/mywork.html') {

        const targetID = getWindowID()
        document.getElementById(targetID).classList.remove('hidden');
    }
})

function getWindowID() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');

}
