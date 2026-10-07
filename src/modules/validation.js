const validation = function () {
  const validateForm = function (formId) {
    const form = document.getElementById(formId);
    const formInputs = form.querySelectorAll("input");

    formInputs.forEach((item) => {
      item.addEventListener("input", volidateInput);
    });
  };

  const volidateInput = function (e) {
    const input = e.target;

    if (input.name === "user_name" || input.name === "user_message") {
      input.value = input.value.replace(/[^А-Яа-яЁё\s-]/g, "");
    }

    if (input.name === "user_email") {
      input.value = input.value.replace(/[^A-Za-z0-9@._!~*'-]/g, "");
    }

    if (input.name === "user_phone") {
      input.value = input.value.replace(/[^0-9()-]/g, "");
    }
  };

  validateForm("form2");
};

export default validation;
