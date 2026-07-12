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

// Click Algebra (data-topic-id="algebra")
const algebraCard = document.querySelector('[data-topic-id="algebra"]');
if (algebraCard) algebraCard.click();

const practiceBtn = document.querySelector('[data-practice-topic="algebra"]');
if (practiceBtn) {
    practiceBtn.click();
    console.log("Q1:", document.getElementById("math-question").textContent);
    
    // Simulate answering correctly
    const input = document.getElementById("answer-input");
    const submitBtn = document.getElementById("submit-btn");
    
    // Wait for settimeout focus
    setTimeout(() => {
        // Need to find what the answer is...
        console.log("Input disabled:", input.disabled);
    }, 150);
}
