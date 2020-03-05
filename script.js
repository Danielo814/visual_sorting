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
    element.classList.remove("blue-square");
    if (index > 0) {
      elements[index - 1].classList.remove("red-square");
      elements[index - 1].classList.remove("thick-line");
    }
    let digit = parseInt(element.innerHTML, 10);

    let nextDigit = parseInt(elements[index + 1].innerHTML, 10);
    if (digit > nextDigit) {
      elements[index + 1].classList.add("blue-square");
      element.classList.add("red-square");
      element.innerHTML = nextDigit;
      // element.style.transition = "all 0.8s";
      elements[index + 1].style.transition = "all 0.8s";
      elements[index + 1].innerHTML = digit;
    }
    element.classList.add("thick-line");
    // element.classList.add("red-square");
  }, 1000 * timer);
}

function myStopFunction(sorter) {
  clearTimeout(sorter);
  console.log("lol");
}

init();
