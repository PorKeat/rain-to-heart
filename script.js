function rain() {
  let cloud = document.querySelector(".cloud");
  let a = document.createElement("div");

  a.classList.add("drop");
  cloud.appendChild(a);

  let left = Math.floor(Math.random() * 290);
  let size = Math.round() * 1.5;
  let duration = Math.random() * 1;

  a.innerHTML = "❤️";
  a.style.left = left + "px";
  a.style.fontSize = 0.5 + size + "em";
  a.style.animationDirection = "1" + duration + "s";

  setTimeout(function () {
    cloud.removeChild(a);
  }, 800);
}

setInterval(function () {
  rain();
},10);
