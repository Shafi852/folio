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

function calculateTiming() {
  const resolution = document.getElementById('resolution').value;
  const fps = parseFloat(document.getElementById('fps').value);
  const [width, height] = resolution.split('x').map(Number);
  
  // Approximate calculations (simplified)
  const totalPixels = width * height * fps;
  const pixelClock = totalPixels / 1000000; // MHz
  
  const result = document.getElementById('result');
  result.innerHTML = `
    <p><strong>Resolution:</strong> ${width}x${height}</p>
    <p><strong>Frame Rate:</strong> ${fps} Hz</p>
    <p><strong>Approximate Pixel Clock:</strong> ${pixelClock.toFixed(2)} MHz</p>
    <p><strong>Total Pixels per Second:</strong> ${(totalPixels / 1000000).toFixed(2)} MP/s</p>
  `;
}
