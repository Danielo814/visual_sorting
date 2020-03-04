let elements = document.getElementsByClassName("row");

for (let i = 0; i < elements.length; i++) {
  startAnimation(elements[i], i);
}

function startAnimation(element, index) {
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
  }, 1000 * index);
  element.classList.remove("red-square");
}
