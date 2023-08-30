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

let topbutton = document.querySelector(".top"),
  nav = document.querySelectorAll(".navA");

function navcolor() {
  for (i = 0; i < nav.length; i++) {
    nav[i].onmouseover = () => {
      nav[i].style.color = "rgb(43, 198, 226);";
    };
  }
}

navcolor();

nav[1].onclick = () => {
  window.scrollTo({
    top: 1000,
  });
};

window.onscroll = () => {
  let scroll = scrollY;
  console.log(scroll);

  if (scroll >= 50) {
    topbutton.style.transform = "translateY(0px)";
    window.scrollTo({
      top: 1000,
      behavior: "smooth",
      duration: 300,
    });
  } else {
    topbutton.style.transform = "translateY(100px)";
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
};
