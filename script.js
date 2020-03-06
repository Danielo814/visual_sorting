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

function swapElements(element, digit, nextDigit, index) {
  element.classList.add("blue-square");
  element.innerHTML = nextDigit;
  elements[index + 1].innerHTML = digit;
}

function checkClasses(index) {
  index === 0
    ? elements[10].classList.remove("active")
    : elements[index - 1].classList.remove("active", "blue-square");
}

function startAnimation(element, index, timer) {
  var sort = setTimeout(function() {
    checkClasses(index);
    if (index !== 10) {
      let digit = parseInt(element.innerHTML, 10);
      let nextDigit = parseInt(elements[index + 1].innerHTML, 10);
      if (digit > nextDigit) {
        var swaptimer = setTimeout(function() {
          swapElements(element, digit, nextDigit, index);
        }, 1200);
      }
    }
    element.classList.add("active");
  }, 1900 * timer);
}

init();
