const calculator = function () {
  const calculatorInputs = document.querySelectorAll("input.calc-item");

  calculatorInputs.forEach((item) => {
    item.addEventListener("input", () => {
      item.value = item.value.replace(/\D/gi, "");
    });
  });
};

export default calculator;
