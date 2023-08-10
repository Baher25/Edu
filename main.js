var close = document.getElementById("menu-close");
var nav = document.getElementById("navbar");
var menu = document.getElementById("menu-btn");
menu.onclick = function () {
  nav.classList.add("active");
};

close.onclick = function () {
  nav.classList.remove("active");
};
