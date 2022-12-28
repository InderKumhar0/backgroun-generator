window.onload = function () {
  var seconds = 00;
  var tens = 00;
  var aseconds = document.getElementById("seconds");
  var atens = document.getElementById("tens");
  var bstart = document.getElementById("start");
  var bstop = document.getElementById("stop");
  var breset = document.getElementById("reset");
  var Interval;
  bgcolor();

  bstart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
    // console.log(Interval);
  };

  bstop.onclick = function () {
    clearInterval(Interval);
    bgcolor();
  };

  breset.onclick = function () {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    atens.innerHTML = tens;
    aseconds.innerHTML = seconds;
    bgcolor();
  };

  function startTimer() {
    tens++;
    if (tens <= 9) {
      atens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
      atens.innerHTML = tens;
    }

    if (tens > 60) {
      seconds++;
      bgcolor();
      aseconds.innerHTML = "0" + seconds;
      tens = 00;
      atens.innerHTML = tens;
    }
    if (seconds > 9) {
      aseconds.innerHTML = seconds;
    }
  }
};


const bgcolor = function() {
 var x = Math.floor(Math.random() * 246);
 var y = Math.floor(Math.random() * 246);
 var z = Math.floor(Math.random() * 246);
 var bgcolor =  `rgb(${x}, ${y}, ${z})`;
 document.body.style.background = bgcolor;
}
