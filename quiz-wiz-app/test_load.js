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

window.onerror = function(msg, src, lineno, colno, err) {
    console.error("BROWSER ERROR:", msg, lineno, colno);
};

const el = document.createElement("script");
el.textContent = script;
try {
    document.body.appendChild(el);
    document.dispatchEvent(new window.Event('DOMContentLoaded'));
    console.log("Loaded successfully!");
} catch (err) {
    console.error("EXCEPTION:", err);
}
