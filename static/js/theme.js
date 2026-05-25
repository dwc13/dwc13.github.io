(function () {
  var storageKey = "theme";
  var root = document.documentElement;

  function preferred() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  }

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    var btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
      btn.textContent = theme === "dark" ? "Light" : "Dark";
    }
  }

  function current() {
    return localStorage.getItem(storageKey) || preferred();
  }

  apply(current());

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      localStorage.setItem(storageKey, next);
      apply(next);
    });
  });

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (e) {
    if (!localStorage.getItem(storageKey)) {
      apply(e.matches ? "dark" : "light");
    }
  });
})();
