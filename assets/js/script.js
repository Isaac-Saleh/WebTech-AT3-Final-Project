
//------------ Functionality for the fly out button -----------------//

const menu = document.getElementById("flyoutMenu");
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

screen.orientation.addEventListener("change", function(event) {
    if(screen.availWidth >= 820) {
        menu.classList.remove("hidden");
    }
    if(screen.availWidth < 820){
        menu.classList.add("hidden");
    }
});