const navbar = document.getElementById("navbar");
const ham = document.getElementById("ham");

const hamUrl = 'url("https://ljc-dev.github.io/testing0/ham.svg")';
const closeUrl = 'url("https://ljc-dev.github.io/testing0/ham-close.svg")';

console.log(getComputedStyle(navbar).getPropertyValue("-webkit-transform"));

function toggleHamburger() {
    if (getComputedStyle(ham).getPropertyValue('background-image') === hamUrl) {
        ham.style.backgroundImage = closeUrl;
        navbar.style.transform = "translateY(0%)";
    }
    else {
        ham.style.backgroundImage = hamUrl;
        navbar.style.transform = "translateY(-100%)";
    }

    // navbar.classList.toggle("showNav");
    // ham.classList.toggle("showClose");
};


// ham.addEventListener('click', function (event) {
//     alert('Element clicked through function!');
// });