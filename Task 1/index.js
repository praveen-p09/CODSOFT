let burger = document.querySelector(".burger");
navbar = document.querySelector(".navbar");
navlist = document.querySelector(".navlist");
rightnav = document.querySelector(".rightnav");

let section = document.querySelectorAll("section");
let menu = document.querySelectorAll(".navbar ul li");
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
burger.addEventListener("click", () => {
  rightnav.classList.toggle("v-class-resp");
  navlist.classList.toggle("v-class-resp");
  navbar.classList.toggle("h-nav-resp");
});

setInterval(updateTime, 1000);

function updateTime() {
  time.innerHTML = new Date();
}

window.onscroll = () => {
  section.forEach((i) => {
    let top = window.scrollY;
    let offset = i.offsetTop - 150;
    let height = i.offsetHeight;
    let id = i.getAttribute("id");

    if (top >= offset && top < offset + height) {
      menu.forEach((listItem) => {
        listItem.classList.remove("active");
        if (listItem.querySelector("a[href*=" + id + "]")) {
          listItem.classList.add("active");
        }
      });
    }
  });
};

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
let isScrolling = false; // Flag to indicate scrolling

// Event listener for window scroll
window.addEventListener("scroll", () => {
  isScrolling = true; // Set flag to true when scrolling
  reveal(); // Call reveal function
});

const resizeOps = () => {
  document.documentElement.style.setProperty(
    "--vh",
    window.innerHeight * 0.01 + "px"
  );
};

resizeOps();
window.addEventListener("resize", resizeOps);
