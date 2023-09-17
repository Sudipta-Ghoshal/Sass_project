const sideLinks = document.querySelectorAll(
  ".side_bar__side_menu li a:not(.logout)"
);

sideLinks.forEach((item) => {
  const li = item.parentElement;
  item.addEventListener("click", (e) => {
    e.preventDefault();
    sideLinks.forEach((i) => {
      i.parentElement.classList.remove("active");
    });
    li.classList.add("active");
  });
});

const searchBtn = document.querySelector(".search_btn");
const searchForm = document.querySelector(".search_form");
const icon = searchBtn.children[0];
console.log(icon);
searchBtn.addEventListener("click", () => {
  if (window.innerWidth <= 575) {
    searchForm.classList.toggle("show");
    if (searchForm.classList.contains("show")) {
      icon.setAttribute("class", "bx bx-x");
    } else {
      icon.setAttribute("class", "bx bx-search");
    }
  }
});

let sideBar = document.querySelector(".side_bar");
let sideBarToggle = document.querySelector(".content nav > .bx-menu");
console.log(sideBarToggle);

sideBarToggle.addEventListener("click", () => {
  sideBar.classList.toggle("close");
});

function handleWindowSizeChange() {
  if (window.innerWidth <= 767) {
    sideBar.classList.add("close");
  } else {
    sideBar.classList.remove("close");
  }
}

// Call the function when the page loads and when the window is resized
window.addEventListener("load", handleWindowSizeChange);
window.addEventListener("resize", handleWindowSizeChange);

const themeToggle = document.getElementById("theme_toggle");

themeToggle.addEventListener("change", function () {
  if (this.checked) {
    document.body.classList.add("dark");
  } else document.body.classList.remove("dark");
});
