const fs = require('fs');

// We simulate a browser environment
global.document = {
    getElementById: (id) => ({
        style: {},
        classList: { add: () => {}, remove: () => {} },
        textContent: '',
        className: ''
    }),
    querySelector: () => ({ style: {} }),
    addEventListener: () => {}
};

global.Math.random = () => 0.5;

let intervals = [];
global.setInterval = (cb, ms) => {
    intervals.push(cb);
    return intervals.length;
};
global.clearInterval = () => {};

let timeouts = [];
global.setTimeout = (cb, ms) => {
    timeouts.push(cb);
    return timeouts.length;
};

const scriptCode = fs.readFileSync('js/script.js', 'utf8');

// We mock the DOMContentLoaded wrapper to just execute the body
const body = scriptCode.replace("document.addEventListener('DOMContentLoaded', () => {", "").replace(/}\);\s*$/, "");

try {
    eval(body);
    console.log("Syntax is OK");
} catch(e) {
    console.error("Error evaluating script:", e);
}
