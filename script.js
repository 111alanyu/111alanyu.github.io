var coll = document.querySelectorAll(".long_card, .long_card_e");


var i;
console.log(coll);
console.log(coll.length);

for (i = 0; i < coll.length; i++) {
    console.log("Hello");
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
    let slides = document.getElementsByClassName("mySlides_2");

    for (i = 0; i < slides_2.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex_2++;
    if (slideIndex_2 > slides.length) { slideIndex_2 = 1 }
    slides[slideIndex_2 - 1].style.display = "block";
    setTimeout(showSlides_2, 4000); // Change image every 2 seconds
}
