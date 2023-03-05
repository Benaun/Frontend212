import { getTranslation } from "./helpers.js";

const languagesList = document.querySelector("#languages-list");
const translation = document.querySelector("#output-text");


languagesList.addEventListener("change", () => {
    translation.textContent = getTranslation(languagesList.value);
});