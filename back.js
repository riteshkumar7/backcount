let sec = 10;
let k = 0;

const startTimer = () => {
  k = setInterval(subtract, 1000);
}

const pauseTimer = () => {
  clearInterval(k);
}

const resetTimer = () => {
  clearInterval(k);
  sec = 10;
  document.getElementById("t3").innerHTML = formatTime(sec);
  document.getElementById("t3").style.display = "block"; 
  document.getElementById("t6").style.display = "none"; 
}

const subtract = () => {
  sec--;
  document.getElementById("t3").innerHTML = formatTime(sec);

  if (sec === 0) {
    clearInterval(k);
    showImage();
  }
}

const formatTime = (time) => {
  return (time < 10) ? "0" + time : time;
}

const showImage = () => {
  document.getElementById("t6").src = "238870.jpg";
  document.getElementById("t3").style.display = "none"; 
  document.getElementById("t6").style.display = "block"; 
}
