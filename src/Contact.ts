import "./style.css";

// <!-- header section -->

let header = document.getElementById("header") as HTMLElement;

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= 100) {
    header.classList.add("headerColor");
  } else {
    header.classList.remove("headerColor");
  }
});
