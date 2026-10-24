const DEFAULT_LANGUAGE = "en";

function detectLanguage() {
    for (const lang of navigator.languages || [navigator.language]) {
        const code = lang.slice(0, 2).toLowerCase();
        if (TRANSLATIONS[code]) return code;
    }
    return DEFAULT_LANGUAGE;
}

function applyLanguage(language) {
    const texts = TRANSLATIONS[language];
    document.documentElement.lang = language;
    document.title = texts.pageTitle;

    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.dataset.i18n;
        if (texts[key]) element.textContent = texts[key];
    });
}

applyLanguage(detectLanguage());

window.addEventListener("languagechange", () => applyLanguage(detectLanguage()));