function setLanguage(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;

    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  localStorage.setItem("language", lang);

  document.getElementById("lang-toggle").innerText = lang === "es" ? "EN" : "ES";
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("language") || "es";

  setLanguage(savedLanguage);

  document.getElementById("lang-toggle").addEventListener("click", () => {
    const current = document.documentElement.lang;

    setLanguage(current === "es" ? "en" : "es");
  });
});
