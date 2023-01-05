
function myFunction() {
  const navbar = document.querySelector("nav ul");
  if (navbar.style.display === "block") {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "block";
  }
}