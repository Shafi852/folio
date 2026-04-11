const STORAGE_KEY = "portfolio-theme";
const toggleButton = document.querySelector(".theme-toggle");

const getPreferredTheme = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") {
    return stored;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const setTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(STORAGE_KEY, theme);

  if (toggleButton) {
    const isDark = theme === "dark";
    toggleButton.setAttribute("aria-pressed", String(isDark));
    toggleButton.textContent = isDark ? "Light Theme" : "Dark Theme";
  }
};

setTheme(getPreferredTheme());

if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "light" : "dark");
  });
}
