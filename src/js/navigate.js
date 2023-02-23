function handleToogleMenu() {
  const menu = document.querySelector(".navigate-menu");
  const menuOverlay = document.querySelector(".menu-overlay");
  const navigateList = document.querySelector(".navigate-list");

  menu.addEventListener("click", function (e) {
    menuOverlay.classList.remove("d-none");
    navigateList.classList.add("navigate-list-active");
  });

  menuOverlay.addEventListener("click", function () {
    menuOverlay.classList.add("d-none");
    navigateList.classList.remove("navigate-list-active");
  });
}
export default handleToogleMenu;
