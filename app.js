const hamburger = document.getElementById("hamburger");
const headerUL = document.getElementById("header-ul");
const signupUL = document.getElementById("sign-up");

hamburger.addEventListener("click", () => {
  headerUL.classList.toggle("show");
  signupUL.classList.toggle("show");
});


var load = document.getElementById("loading");

function loader() {
  load.style.display = "none";
}
