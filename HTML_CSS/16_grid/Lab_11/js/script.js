const btn = document.getElementById("menu-btn");
btn.addEventListener("click", toggleMenu);

function toggleMenu() {
  const isOpen = this.getAttribute("aria-expanded") === "true" || false;
  this.setAttribute("aria-expanded", !isOpen);
}
