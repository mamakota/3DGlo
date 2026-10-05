const scrollToElem = () => {
  const menu = document.querySelector("menu");
  const menuItems = menu.querySelectorAll("ul>li>a");
  const scrollBtn = document.querySelector("a[href='#service-block']");

  const scrollTo = (item) => {
    const blockId = item.getAttribute("href");
    const block = document.querySelector(`${blockId}`);

    block.scrollIntoView({ behavior: "smooth" });
  };

  menuItems.forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      scrollTo(item);
    });
  });

  scrollBtn.addEventListener("click", function (e) {
    e.preventDefault();
    scrollTo(this);
  });
};

export default scrollToElem;
