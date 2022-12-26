var coll = document.getElementsByClassName("long_card");
var i;

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