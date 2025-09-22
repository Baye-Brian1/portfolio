document.addEventListener("DOMContentLoaded", () => {
  const navbars = document.querySelectorAll(".container");

  navbars.forEach(navbarContainer => {
    const menuIcon = navbarContainer.querySelector(".fa-bars");
    const closeIcon = navbarContainer.querySelector(".fa-xmark");
    const navbar = navbarContainer.querySelector("nav");

    // Initial state
    // navbar.style.display = "none";
    closeIcon.style.display = "none";

    menuIcon.addEventListener("click", () => {
      navbar.style.display="block"
      menuIcon.style.display = "none";
      closeIcon.style.display = "block";
    });

    closeIcon.addEventListener("click", () => {
      navbar.style.display="none";
      menuIcon.style.display = "block";
      closeIcon.style.display = "none";
    });
  });
});
