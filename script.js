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