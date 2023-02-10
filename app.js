const calculator = document.querySelector(".buttonsContainer");

const signResult = document.querySelector(".sign");
const previousResult = document.querySelector(".previous");
const currentResult = document.querySelector(".current");

calculator.addEventListener("click", (e) => {
  const target = e.target.textContent;

  if (target === "AC") {
    signResult.textContent = "";
    previousResult.textContent = "";
    currentResult.textContent = "0";
  } else if (
    target === "0" ||
    target === "1" ||
    target === "2" ||
    target === "3" ||
    target === "4" ||
    target === "5" ||
    target === "6" ||
    target === "7" ||
    target === "8" ||
    target === "9"
  ) {
    if (currentResult.textContent === "0") {
      currentResult.textContent = "";
    }
    currentResult.textContent += target;
  } else if (
    target === "÷" ||
    target === "-" ||
    target === "+" ||
    target === "*"
  ) {
    if (signResult.textContent === "") {
      signResult.textContent = target;
      previousResult.textContent = currentResult.textContent;
      currentResult.textContent = "";
    } else {
      signResult.textContent = target;
    }
  } else if (target === "=") {
    if (signResult.textContent === "÷") {
      currentResult.textContent =
        Number(previousResult.textContent) / Number(currentResult.textContent);
    } else if (signResult.textContent === "-") {
      currentResult.textContent =
        Number(previousResult.textContent) - Number(currentResult.textContent);
    } else if (signResult.textContent === "+") {
      currentResult.textContent =
        Number(previousResult.textContent) + Number(currentResult.textContent);
    } else if (signResult.textContent === "*") {
      currentResult.textContent =
        Number(previousResult.textContent) * Number(currentResult.textContent);
    }
    previousResult.textContent = "";
    signResult.textContent = "";
  } else if (target === ".") {
    if (
      !currentResult.textContent.includes(".") &&
      currentResult.textContent !== ""
    ) {
      currentResult.textContent += target;
    }
  } else if (target === "←") {
    if (currentResult.textContent.length == 1) {
      currentResult.textContent = "0";
    }
    if (currentResult.textContent !== "0") {
      currentResult.textContent = currentResult.textContent.slice(0, -1);
    }
  }
});
