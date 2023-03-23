let sun = document.getElementById("i");
let body = document.getElementById("body");

sun.addEventListener("click", function () {
  body.classList.toggle("white");
  if (localStorage.getItem("mode") != "white") {
    sun.classList.toggle("fa-moon");
  }
});
