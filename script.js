let elements = document.getElementsByClassName("row");

function init() {
  var timer = 0;
  for (let i = 0; i < elements.length; i++) {
    for (let j = 0; j < elements.length; j++) {
      timer = timer + 1;
      startAnimation(elements[j], j, timer);
    }
  }
}

function startAnimation(element, index, timer) {
  var sort = setTimeout(function() {
    // elements[index - 1].classList.remove("blue-square");
    if (index > 0) {
      // elements[index - 1].classList.remove("silver-square");
      elements[index - 1].classList.remove("active", "blue-square");
    }
    let digit = parseInt(element.innerHTML, 10);

    let nextDigit = parseInt(elements[index + 1].innerHTML, 10);
    if (digit > nextDigit) {
      var swaptimer = setTimeout(function() {
        element.innerHTML = nextDigit;
        elements[index + 1].innerHTML = digit;
        element.classList.add("blue-square")
      }, 1000);
    }
    element.classList.add("active");
  }, 1500 * timer);
}

function myStopFunction(sorter) {
  clearTimeout(sorter);
  console.log("lol");
}

init();
