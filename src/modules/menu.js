function menu() {
  const menu = document.querySelector("menu");

  const handleMenu = () => {
    menu.classList.toggle("active-menu");
  };

  document.addEventListener("click", (e) => {
    if (
      e.target.closest(".menu") ||
      e.target.classList.contains("close-btn") ||
      e.target.matches("menu li a") ||
      (!e.target.closest("menu") &&
        !e.target.closest(".menu") &&
        menu.classList.contains("active-menu"))
    ) {
      e.preventDefault();
      handleMenu();
    }
  });
}

export default menu;
