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

//scroll to page move

let currentpage = 0;
let isScrolling = false;

window.addEventListener("scroll", () => {
  if (!isScrolling) {
    let newScroll = window.scrollY;

    if (newScroll > scroll) {
      // Scrolling Down
      if (currentpage < 3) {
        let nextPage = currentpage + 1;
        scrollToPage(nextPage);
      }
    } else if (newScroll < scroll) {
      // Scrolling Up
      if (currentpage > 0) {
        let previousPage = currentpage - 1;
        scrollToPage(previousPage);
      }
    }

    scroll = newScroll;
  }
});

function scrollToPage(pageNumber) {
  isScrolling = true;
  window.scrollTo({
    top: window.innerHeight * pageNumber,
    behavior: "smooth",
  });
  currentpage = pageNumber;

  setTimeout(() => {
    isScrolling = false;
  }, 1000);
}

//definition topbutton, nav

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

// Top button click event to scroll to top smoothly
topbutton.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
//nav buttons animation

function navcolor() {
  nav.forEach((link) => {
    link.addEventListener("mouseover", () => {
      link.style.color = "rgb(43, 198, 226)";
    });

    link.addEventListener("mouseleave", () => {
      link.style.color = "#fff"; // Reset to white when mouse leaves
    });
  });
}

window.addEventListener("scroll", () => {
  scroll = window.scrollY;

  if (scroll > 175 && scroll < 1300) {
    nav.forEach((link) => {
      link.style.color = "#333";
    });
  } else {
    nav.forEach((link) => {
      link.style.color = "#fff";
    });
  }
});

//nav click and scroll

navcolor();

nav[1].onclick = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth",
  });
};
