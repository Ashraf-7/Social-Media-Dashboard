const toggleBtn = document.getElementById("toggle-mode");
const toggleBtnCircle = document.getElementById("circle");

let darkMode = localStorage.getItem("darkMode");

if (darkMode === "enabled") enableDarkMode();

toggleBtn.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");

  if(darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

const enableDarkMode = () => {
  toggleBtnCircle.classList.add('dark');
  localStorage.setItem("darkMode", "enabled");
  document.body.classList.add('dark');
}

const disableDarkMode = () => {
  toggleBtnCircle.classList.remove("dark");
  localStorage.setItem("darkMode", "light");
  document.body.classList.remove('dark');
}

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addListener((e) => (e.matches ? enableDarkMode() : disableDarkMode()));