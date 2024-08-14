const translations = {
    en: {},
    vi: {}
};
let currentLanguage = 'vi'; // Ngôn ngữ mặc định

function setLanguage(lang) {
    currentLanguage = lang;
    translatePage();
}

function translatePage() {
    //text
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = translations[currentLanguage][key] || key;
    });

    // image
    document.querySelectorAll('[data-i18n-alt]').forEach(element => {
        const key = element.getAttribute('data-i18n-alt');
        element.setAttribute('alt', translations[currentLanguage][key] || key);
    });
    
    //placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.setAttribute('placeholder', translations[currentLanguage][key] || key);
    });
}

document.addEventListener('DOMContentLoaded', async function() {
    await fetch('../asset/locales/en.json').then(response => response.json()).then(data => translations.en = data);
    await fetch('../asset/locales/vi.json').then(response => response.json()).then(data => translations.vi = data);
    await translatePage();
});
