let slot1Value;
let slot2Value;
let slot3Value;
let slotDepth = 5;
let waitTime = 1000;


function masterSpin() {
spinAnimation();
// sleep(waitTime);
spin1();
// sleep(waitTime);
spin2();
// sleep(waitTime);
spin3();
// sleep(waitTime);
checkWin();
}

/* function sleep(waitTime) {
  return new Promise(resolve => setTimeout(resolve, ms));
} */

function spin1() {
    spin = (Math.floor(Math.random() * slotDepth) + 1).toString();
    document.getElementById('slot1').innerHTML = spin;
    slot1Value = spin;
} 

function spin2() {
  spin = (Math.floor(Math.random() * slotDepth) + 1).toString();
    document.getElementById('slot2').innerHTML = spin;
    slot2Value = spin;
}

function spin3() {
  spin = (Math.floor(Math.random() * slotDepth) + 1).toString();
    document.getElementById('slot3').innerHTML = spin;
    slot3Value = spin;
}

function spinAnimation() {

}

function checkWin() {
  if(slot1Value === slot2Value && slot1Value === slot3Value) {
    showWin();
  }
}

function showWin() {
  document.getElementById("win").style.visibility = "visible";
}
