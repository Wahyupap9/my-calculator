const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const data = e.target.getAttribute("data-value");

    if (data == "=") {
      let modifyingDisplayValue = display.value.replace("%", "/100");
      modifyingDisplayValue = modifyingDisplayValue.replace("x", "*");
      let result = eval(modifyingDisplayValue);
      return (display.value = result);
    }

    if (data == "AC") {
      display.value = "";
      return;
    }

    if (data == "DEL") {
      display.value = display.value.slice(0, -1);
      return;
    }
    display.value += data;
  });
});
