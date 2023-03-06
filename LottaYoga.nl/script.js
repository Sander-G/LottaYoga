// hamburger & nav menu
const menu_btn = document.querySelector('.hamburger');
const menu = document.querySelector('.nav');

menu_btn.addEventListener('click', function () {
  menu_btn.classList.toggle('is-active')
  menu.classList.toggle('is-active')
});

menu.addEventListener('click', function () {
  menu_btn.classList.toggle('is-active')
  menu.classList.toggle('is-active')
});


// modal
const modal = document.getElementById("Modal");
const btn = document.getElementById("voorwaardenToggle");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
}
span.onclick = function () {
  modal.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// phonenumber
const encodedPhoneNumber = document.getElementById("encoded-phone-number").innerHTML;
const decodedPhoneNumber = atob(encodedPhoneNumber);
document.getElementById("phoneIcon").href = "tel:" + decodedPhoneNumber;
console.log(encodedPhoneNumber)
console.log(decodedPhoneNumber)
