const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const closeBtn = modal.querySelector(".popup-close");

  buttons.forEach((item) => {
    item.addEventListener("click", () => {
      modal.style.display = "block";

      if (window.innerWidth < 768) {
        modal.style.opacity = "1";
        return;
      }

      modal.style.opacity = "0";

      let opacity = 0;

      const animation = setInterval(() => {
        opacity += 0.05;
        modal.style.opacity = opacity;

        if (opacity >= 1) {
          clearInterval(animation);
        }
      }, 10);
    });
  });

  closeBtn.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      modal.style.display = "none";
      return;
    }

    let opacity = 1;

    const animation = setInterval(() => {
      opacity -= 0.05;
      modal.style.opacity = opacity;

      if (opacity <= 0) {
        clearInterval(animation);
        modal.style.display = "none";
      }
    }, 10);
  });
};

export default modal;
