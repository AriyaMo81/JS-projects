let bulbImg = document.getElementById("bulb");

let btn = document.getElementById("btn");

let bulbflag = false;

function turnOffOrOn() {
  if (bulbflag) {
    bulbImg.setAttribute("src", "./pics/bulboff.gif");
    btn.innerHTML = "Turn On";
    bulbflag = false;
  } else {
    bulbImg.setAttribute("src", "./pics/bulbon.gif");
    btn.innerHTML = "Turn Off";
    bulbflag = true;
  }
}
