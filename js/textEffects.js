const introText = document.querySelector('[data-i18n="adaptive"]');
const fullText = introText.textContent.trim();

introText.textContent = "";

let characterIndex = 0;

function typeText() {
    if (characterIndex < fullText.length) {
        introText.textContent += fullText.charAt(characterIndex);
        characterIndex++;

        setTimeout(typeText, 30);
    }
}

typeText();