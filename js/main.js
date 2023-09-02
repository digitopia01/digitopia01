let modal_scr = document.querySelector(".modal_scr");
//nav circle scroll style

const navCircle = document.querySelectorAll(".navcircle");

window.addEventListener("load", () => {
  for (let i = 0; i < navCircle.length; i++) {
    navCircle[i].classList.add("navcircle");
  }
  navCircle[0].classList.add("navon");
  nav[0].style.fontSize = "20px";
  modal_scr.style.opacity = "1";
  setTimeout(() => {
    modal_scr.style.opacity = "0";
  }, 2000);
});

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

//flipping 2

let toreviewfront = document.querySelector(".unflipped2"),
  toreviewback = document.querySelector(".flipped2"),
  flipping2 = document.querySelector(".flipping2"),
  con3bg = document.querySelector(".con3"),
  con3Description = document.querySelector(".con3_description");

con3bg.classList.add("thumbdown");

flipping2.onmouseover = () => {
  flipping2.style.transform = "rotateY(180deg)";
  toreviewfront.style.opacity = "0";
  toreviewback.style.display = "inline-block";
  toreviewback.style.opacity = "1";
  con3Description.style.opacity = "0";
  con3bg.classList.remove("thumbdown");
  con3bg.classList.add("thumbup");
};
flipping2.onmouseout = () => {
  flipping2.style.transform = "rotateY(0deg)";
  toreviewfront.style.opacity = "1";
  toreviewback.style.display = "inline-block";
  toreviewback.style.opacity = "0";
  con3Description.style.opacity = "1";
  con3bg.classList.add("thumbdown");
  con3bg.classList.remove("thumbup");
};

//scroll to page move

let currentpage = 0;
let isScrolling = false;

// window.addEventListener("scroll", () => {
//   if (!isScrolling) {
//     let newScroll = window.scrollY;
//     if (newScroll > scroll) {
//       // Scrolling Down
//       if (currentpage < 3) {
//         let nextPage = currentpage + 1.02;
//         scrollToPage(nextPage);
//       }
//     } else if (newScroll < scroll) {
//       // Scrolling Up
//       if (currentpage > 0) {
//         let previousPage = currentpage - 1.02;
//         scrollToPage(previousPage);
//       }
//     }

//     scroll = newScroll;
//   }
// });

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
    top: (0, 0),
    behavior: "smooth",
  });
};

//nav buttons animation

function navcolor() {
  nav.forEach((navbuts) => {
    navbuts.addEventListener("mouseover", () => {});

    navbuts.addEventListener("mouseleave", () => {
      navbuts.style.border = "none";
    });
  });
}

navcolor();

window.addEventListener("scroll", () => {
  scroll = window.scrollY;
  console.log(scroll);

  if (scroll > 175 && scroll < 1300) {
    nav.forEach((navbuts) => {
      navbuts.style.color = "#333";
    });
    navCircle.forEach((navbuts) => {
      navbuts.style.borderColor = "#333";
    });
  } else {
    nav.forEach((navbuts) => {
      navbuts.style.color = "#fff";
      navCircle.forEach((navbuts) => {
        navbuts.style.borderColor = "#fff";
      });
    });
  }

  if (scroll >= window.innerHeight * 0 && scroll < window.innerHeight * 0.9) {
    for (let i = 0; i < navCircle.length; i++) {
      nav[i].style.fontSize = "12px";
      navCircle[i].classList.add("navcircle");
      navCircle[i].classList.remove("navon");
    }
    navCircle[0].classList.add("navon");
    nav[0].style.fontSize = "20px";
  } else if (
    scroll > window.innerHeight * 0.91 &&
    scroll < window.innerHeight * 1.9
  ) {
    for (let i = 0; i < navCircle.length; i++) {
      nav[i].style.fontSize = "12px";
      navCircle[i].classList.add("navcircle");
      navCircle[i].classList.remove("navon");
    }
    navCircle[1].classList.add("navon");
    nav[1].style.fontSize = "20px";
  } else if (
    scroll > window.innerHeight * 1.91 &&
    scroll < window.innerHeight * 2.9
  ) {
    for (let i = 0; i < navCircle.length; i++) {
      nav[i].style.fontSize = "12px";
      navCircle[i].classList.remove("navcircle");
      navCircle[i].classList.remove("navon");
    }
  } else if (
    scroll > window.innerHeight * 2.91 &&
    scroll < window.innerHeight * 3.9
  ) {
    for (let i = 0; i < navCircle.length; i++) {
      navCircle[i].classList.add("navcircle");
      navCircle[i].classList.remove("navon");
      nav[i].style.fontSize = "12px";
    }
    navCircle[2].classList.add("navon");
    nav[2].style.fontSize = "20px";
  } else if (
    scroll > window.innerHeight * 3.91 &&
    scroll < window.innerHeight * 4.9
  ) {
    for (let i = 0; i < navCircle.length; i++) {
      navCircle[i].classList.add("navcircle");
      navCircle[i].classList.remove("navon");
      nav[i].style.fontSize = "12px";
    }
    navCircle[3].classList.add("navon");
    nav[3].style.fontSize = "20px";
  }
});

window.addEventListener("scroll", () => {
  scroll = window.scrollY;
  if (scroll > window.innerHeight * 2.5 && scroll < window.innerHeight * 4.5) {
    nav.forEach((navbuts) => {
      navbuts.style.color = "#333";
    });
    navCircle.forEach((navbuts) => {
      navbuts.style.borderColor = "#333";
    });
  }
});

//nav click and scroll
let clickscrollpageno = 0;

nav[0].onclick = () => {
  window.scrollTo({
    top: window.innerHeight * 0,
    behavior: "smooth",
  });
  clickscrollpageno = 0;
};
nav[1].onclick = () => {
  if (clickscrollpageno >= 2) {
    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight * 2,
        behavior: "smooth",
      });
    }, 100);
    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight * 1,
        behavior: "smooth",
      });
    }, 600);
  } else {
    window.scrollTo({
      top: window.innerHeight * 1,
      behavior: "smooth",
    });
  }
  clickscrollpageno = 1;
};
nav[2].onclick = () => {
  if (clickscrollpageno < 2) {
    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight * 2,
        behavior: "smooth",
      });
    }, 100);
    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight * 3,
        behavior: "smooth",
      });
    }, 600);
  } else {
    window.scrollTo({
      top: window.innerHeight * 3,
      behavior: "smooth",
    });
  }
  clickscrollpageno = 2;
};
nav[3].onclick = () => {
  window.scrollTo({
    top: window.innerHeight * 4,
    behavior: "smooth",
  });
  clickscrollpageno = 3;
};
nav[4].onclick = () => {
  window.scrollTo({
    top: window.innerHeight * 5,
    behavior: "smooth",
  });
  clickscrollpageno = 4;
};
