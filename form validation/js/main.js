let userNameInput = document.querySelector(".username");

let passwordInput = document.querySelector(".password");

let modal = document.querySelector(".modal");

function dataValidation() {
  let userNameValue = userNameInput.value;
  let passwordValue = passwordInput.value;
  if (userNameValue < 12 || passwordValue < 8) {
    modal.style.display = "inline";
    modal.innerHTML = "incorrect";
    setTimeout(function () {
      modal.style.display = "none";
    }, 5000);
  } else {
    modal.style.display = "inline";
    modal.style.background = "green";
    modal.innerHTML = "correct";
    setTimeout(function () {
      modal.style.display = "none";
    }, 5000);
  }
}
