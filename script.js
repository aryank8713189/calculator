const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (button.classList.contains("clear")) {
      currentInput = "";
      display.textContent = "0";
      return;
    }

    if (button.classList.contains("equal")) {
      try {
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
      } catch {
        display.textContent = "Error";
        currentInput = "";
      }
      return;
    }

    currentInput += value;
    display.textContent = currentInput;
  });
});
