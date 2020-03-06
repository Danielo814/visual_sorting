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

swapElements = element => {
  element.classList.add("blue-square");
  element.innerHTML = nextDigit;
  elements[index + 1].innerHTML = digit;
};

function startAnimation(element, index, timer) {
  var sort = setTimeout(function() {
    if (index === 0) {
      elements[10].classList.remove("active");
    }
    if (index > 0) {
      elements[index - 1].classList.remove("active", "blue-square");
    }
    if (index !== 10) {
      let digit = parseInt(element.innerHTML, 10);
      let nextDigit = parseInt(elements[index + 1].innerHTML, 10);
      if (digit > nextDigit) {
        var swaptimer = setTimeout(function() {
          swapElements(element);
        }, 1200);
      }
    }
    element.classList.add("active");
  }, 1800 * timer);
}

init();
