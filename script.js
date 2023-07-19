var coll = document.querySelectorAll(".long_card, .long_card_e");
var expand_all = document.querySelectorAll(".expand");
var i;
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });

}

/** Make expand so that it expands all not togles all */
const expand = document.querySelector(".expand");
expand_all[0].addEventListener("click", function () {
    for (i = 0; i < coll.length; i++) {
        coll[i].classList.toggle("active");
        var content = coll[i].nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
            expand.innerHTML = "<i class=\"fa-solid fa-up-right-and-down-left-from-center\"></i>"
        } else {
            content.style.display = "block";
            expand.innerHTML = "<i class=\"fa-solid fa-down-left-and-up-right-to-center\"></i>";


        }
    }

});



const toggleButton = document.querySelector('.dark-light');
const contact_me_icons = document.querySelectorAll('.icon_color');
const mode_light = document.querySelector(".dark-light");
let isDarkMode = true;


document.body.classList.toggle('dark', isDarkMode);


// Add an event listener to the toggle button
toggleButton.addEventListener('click', toggleDarkMode);



let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
}

let slideIndex_2 = 0;
showSlides_2();
function showSlides_2() {
    let i;
    let slides2 = document.getElementsByClassName("mySlides_2");

    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }
    slideIndex_2++;
    if (slideIndex_2 > slides2.length) { slideIndex_2 = 1 }
    slides2[slideIndex_2 - 1].style.display = "block";
    setTimeout(showSlides_2, 4000); // Change image every 2 seconds
}
