function setLanguage(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;

    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  document.title = translations[lang].page_title;

  const cvButton = document.getElementById("cv-download");

  if (cvButton) {
    if (lang === "en") {
      cvButton.href = "./CV_Wilhen_Figueredo_EN.pdf";
      cvButton.download = "CV_Wilhen_Figueredo_EN.pdf";
    } else {
      cvButton.href = "./CV_Wilhen_Figueredo_ES.pdf";
      cvButton.download = "CV_Wilhen_Figueredo_ES.pdf";
    }
  }

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
