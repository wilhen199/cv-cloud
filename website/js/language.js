// Reads the saved language. Some browsers block localStorage, so we protect it with try/catch.
function getSavedLanguage() {
  try {
    const saved = localStorage.getItem("language");
    if (saved === "en" || saved === "es") {
      return saved;
    }
    return "es";
  } catch (error) {
    return "en";
  }
}

function saveLanguage(lang) {
  try {
    localStorage.setItem("language", lang);
  } catch (error) {
    // Storage is blocked: the language will simply not be remembered.
  }
}

function setLanguage(lang) {
  document.documentElement.lang = lang;

  // Text content
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;

    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Alt text of images
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.dataset.i18nAlt;

    if (translations[lang][key]) {
      el.alt = translations[lang][key];
    }
  });

  // aria-label of buttons and groups
  document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    const key = el.dataset.i18nAriaLabel;

    if (translations[lang][key]) {
      el.setAttribute("aria-label", translations[lang][key]);
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

  saveLanguage(lang);

  document.getElementById("lang-toggle").innerText = lang === "es" ? "EN" : "ES";
}

document.addEventListener("DOMContentLoaded", () => {
  setLanguage(getSavedLanguage());

  document.getElementById("lang-toggle").addEventListener("click", () => {
    const current = document.documentElement.lang;

    if (current === "es") {
      setLanguage("en");
    } else {
      setLanguage("es");
    }
  });
});
