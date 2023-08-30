// &:hover {
//     transform: rotateY(180deg);
//   }

let todevfront = document.querySelector(".unflipped"),
  todevback = document.querySelector(".flipped"),
  flipping = document.querySelector(".flipping");

flipping.onmouseover = () => {
  flipping.style.transform = "rotateY(180deg)";
  todevfront.style.opacity = "0";
  todevback.style.display = "inline-block";
  todevback.style.opacity = "1";
};
flipping.onmouseout = () => {
  flipping.style.transform = "rotateY(0deg)";
  todevfront.style.opacity = "1";
  todevback.style.display = "inline-block";
  todevback.style.opacity = "0";
};

let currentpage = 0;
let isScrolling = false;
let scroll;

window.addEventListener("scroll", () => {
  if (!isScrolling) {
    scroll = window.scrollY;

    if (
      scroll >= window.innerHeight * 0.02 &&
      scroll <= window.innerHeight * 0.04 &&
      currentpage === 0
    ) {
      isScrolling = true;
      window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth",
      });
      currentpage = 1;
    }

    if (
      scroll >= window.innerHeight * 1 &&
      scroll <= window.innerHeight * 1.1 &&
      currentpage === 1
    ) {
      isScrolling = true;
      window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth",
      });
      currentpage = 2;
    }

    setTimeout(() => {
      isScrolling = false;
    }, 1000);
  }
});

let topbutton = document.querySelector(".top"),
  nav = document.querySelectorAll(".navA");

//top button animation

window.onscroll = () => {
  scroll = window.scrollY;
  if (scroll > 40) {
    topbutton.style.transform = "translateY(0px)";
  } else {
    topbutton.style.transform = "translateY(100px)";
  }
};

//nav buttons animation

function navcolor() {
  for (i = 0; i < nav.length; i++) {
    nav[i].onmouseover = () => {
      nav[i].style.color = "rgb(43, 198, 226);";
    };
  }
}

if (scroll > 175 && scroll < 1300) {
  for (i = 0; i < nav.length; i++) {
    nav[i].style.color = "#333";
  }
} else {
  for (i = 0; i < nav.length; i++) {
    nav[i].style.color = "#fff";
  }
}

//nav click and scroll

navcolor();

nav[1].onclick = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth",
  });
};
