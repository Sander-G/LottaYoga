// hamburger & nav menu
const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');


menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active')
    mobile_menu.classList.toggle('is-active')
});

mobile_menu.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active')
    mobile_menu.classList.toggle('is-active')
});


// modal
const modal = document.getElementById("myModal");
const btn = document.getElementById("algemeneVoorwaarden");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
