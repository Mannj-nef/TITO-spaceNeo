function handleHeader() {
  // handle when scroll
  const header = document.querySelector(".header");

  window.addEventListener("scroll", function () {
    const scrollY = window.pageYOffset;

    if (scrollY > 100) {
      console.log(scrollY);
      header.classList.add("header-active");
    } else {
      header.classList.remove("header-active");
    }
  });
}

export default handleHeader;
