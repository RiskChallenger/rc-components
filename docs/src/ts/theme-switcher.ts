export const initThemeSwitcher = () => {
  let prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document
    .querySelector("[data-theme-switcher]")
    ?.addEventListener("click", (e) => {
      console.log(e);
      prefersDark = !prefersDark;

      if (prefersDark) {
        (e.target as HTMLButtonElement).classList.remove("fa-moon");
        (e.target as HTMLButtonElement).classList.add("fa-sun");
      } else {
        (e.target as HTMLButtonElement).classList.remove("fa-sun");
        (e.target as HTMLButtonElement).classList.add("fa-moon");
      }
      document.documentElement.setAttribute(
        "data-theme",
        prefersDark ? "dark" : "light"
      );
    });
};
