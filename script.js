let navItems = document.querySelectorAll('.nav-item');

document.body.style.setProperty("--total-nav-items", navItems.length);

navItems.forEach((thisItem, index) => {
  thisItem.addEventListener("click", () => {
    document.body.style.setProperty("--active-index", index);
  });
});

