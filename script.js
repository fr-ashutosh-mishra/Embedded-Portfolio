const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const themeToggle = document.querySelector("[data-theme-toggle]");
const storedTheme = localStorage.getItem("theme");

if (storedTheme === "dark") {
  document.body.classList.add("theme-dark");
}

const updateThemeLabel = () => {
  if (!themeToggle) {
    return;
  }
  const isDark = document.body.classList.contains("theme-dark");
  themeToggle.textContent = isDark ? "Light mode" : "Dark mode";
};

updateThemeLabel();

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("theme-dark");
    const isDark = document.body.classList.contains("theme-dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateThemeLabel();
  });
}

const scrollBar = document.querySelector("[data-scroll-bar]");

const updateScrollBar = () => {
  if (!scrollBar) {
    return;
  }
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const percent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
  scrollBar.style.width = `${percent}%`;
};

updateScrollBar();
window.addEventListener("scroll", updateScrollBar, { passive: true });
window.addEventListener("resize", updateScrollBar);

const skillCards = document.querySelectorAll("[data-skill-card]");
skillCards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("is-flipped");
  });
});
