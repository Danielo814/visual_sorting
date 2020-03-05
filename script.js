let elements = document.getElementsByClassName("row");

function init() {
  var timer = 0;
  for (let i = 0; i < elements.length; i++) {
    for (let j = 0; j < elements.length; j++) {
      timer = timer + 1;
      startAnimation(elements[j], j, timer);
      console.log(timer);
    }
  }
}

function startAnimation(element, index, timer) {
  setTimeout(function() {
    if (index > 0) {
      elements[index - 1].classList.remove("red-square");
    }
    let digit = parseInt(element.innerHTML, 10);

    let nextDigit = parseInt(elements[index + 1].innerHTML, 10);

    if (digit > nextDigit) {
      element.innerHTML = nextDigit;
      elements[index + 1].innerHTML = digit;
    }
    element.classList.add("red-square");
  }, 1000 * timer);
}

init();
