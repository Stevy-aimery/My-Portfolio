// function googleTranslateElementInit() {
//     new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
// }

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',  // Langue par défaut de la page (ici Français)
        includedLanguages: 'en,fr,es,ar,de',  // Limitation à ces 5 langues
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
    }, 'google_translate_element');
}

