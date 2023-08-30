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
