const { JSDOM } = require("jsdom");
const fs = require("fs");

const html = fs.readFileSync("index.html", "utf8");
const script = fs.readFileSync("js/script.js", "utf8");

const dom = new JSDOM(html, { url: "http://localhost/", runScripts: "dangerously" });
const window = dom.window;
const document = window.document;

window.lucide = { createIcons: () => {} };
window.matchMedia = () => ({ matches: false });
window.requestAnimationFrame = (cb) => cb();
window.Element.prototype.scrollIntoView = () => {};
window.HTMLElement.prototype.scrollTo = () => {};

const el = document.createElement("script");
el.textContent = script;
document.body.appendChild(el);

document.dispatchEvent(new window.Event('DOMContentLoaded'));

const formulaBtn = document.getElementById("important-formulas-btn");
if (formulaBtn) {
    formulaBtn.click();
    console.log("Formulas view active:", document.getElementById("formulas-view").classList.contains("active"));
}

const algebraCard = document.querySelector('[data-topic-id="algebra"]');
if (algebraCard) {
    algebraCard.click();
    console.log("Algebra card clicked");
}

const practiceBtn = document.querySelector('[data-practice-topic="algebra"]');
if (practiceBtn) {
    console.log("Practice button found! Clicking...");
    practiceBtn.click();
    console.log("Quiz active:", document.body.classList.contains("quiz-active"));
    console.log("Formulas view active:", document.getElementById("formulas-view").classList.contains("active"));
} else {
    console.log("Practice button not found!");
}
