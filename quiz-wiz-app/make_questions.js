const fs = require('fs');

const script = fs.readFileSync('js/script.js', 'utf8');

// We need to inject the allQuestions array near the top.
const allQuestionsStr = `
const allQuestions = [
    // Algebra
    { category: "Algebra", question: "If 3x + 7 = 22, what is x?", answer: 5 },
    { category: "Algebra", question: "Solve for y: 2y - 4 = 10", answer: 7 },
    { category: "Algebra", question: "If 5a = 35, what is a?", answer: 7 },
    // Number System
    { category: "Number System", question: "What is the smallest prime number?", answer: 2 },
    { category: "Number System", question: "What is 15% of 200? (Wait, that's percentage, just simple arithmetic)", answer: 30 },
    // Percentage
    { category: "Percentage", question: "What is 20% of 50?", answer: 10 },
    { category: "Percentage", question: "If 25% of x is 10, what is x?", answer: 40 },
    // Profit & Loss
    { category: "Profit & Loss", question: "Buy at 100, sell at 120. Profit percentage?", answer: 20 },
    { category: "Profit & Loss", question: "Cost 50, profit 10. Selling price?", answer: 60 },
    // Simple Interest
    { category: "Simple Interest", question: "Principal 1000, Rate 5%, Time 2 years. Interest?", answer: 100 },
    // Compound Interest
    { category: "Compound Interest", question: "Principal 100, Rate 10%, 2 years compound. Amount?", answer: 121 },
    // Mensuration
    { category: "Mensuration", question: "Perimeter of square with side 6?", answer: 24 },
    { category: "Mensuration", question: "Area of a rectangle with width 4 and height 5?", answer: 20 },
    // Geometry
    { category: "Geometry", question: "Sum of angles in a triangle?", answer: 180 },
    { category: "Geometry", question: "Number of sides in a hexagon?", answer: 6 },
    // Trigonometry
    { category: "Trigonometry", question: "If sin(x) = 0, what is the smallest positive x in degrees?", answer: 180 },
    { category: "Trigonometry", question: "Value of tan(45 degrees)?", answer: 1 },
    // Calculus
    { category: "Calculus", question: "Derivative of 3x with respect to x?", answer: 3 },
    { category: "Calculus", question: "Integral of 2 with respect to x from 0 to 3?", answer: 6 },
    // Probability
    { category: "Probability", question: "A bag has 3 red and 2 blue balls. Probability of red (%)?", answer: 60 },
    { category: "Probability", question: "Probability of rolling a 4 on a standard die (in percentage, approx)?", answer: 16 }, // wait input is integer
    // Statistics
    { category: "Statistics", question: "Median of 1, 3, 3, 6, 7, 8, 9?", answer: 6 },
    { category: "Statistics", question: "Mean of 10, 20, 30?", answer: 20 },
    // Permutation & Combination
    { category: "Permutation & Combination", question: "Value of 4! (4 factorial)?", answer: 24 },
    // Coordinate Geometry
    { category: "Coordinate Geometry", question: "Distance between (0,0) and (3,4)?", answer: 5 },
    // Ratio & Proportion
    { category: "Ratio & Proportion", question: "If A:B is 2:3 and A is 10, what is B?", answer: 15 },
    // Time & Work
    { category: "Time & Work", question: "A does a job in 10 days, B in 10 days. Together (days)?", answer: 5 },
    // Average
    { category: "Average", question: "Average of 4, 8, 12?", answer: 8 },
    // Mixture & Alligation
    { category: "Mixture & Alligation", question: "For 10 and 20 with mean 14, first ratio term?", answer: 6 },
    // Linear Equations
    { category: "Linear Equations", question: "Solve 2x + 6 = 10", answer: 2 },
    // Quadratic Equations
    { category: "Quadratic Equations", question: "Positive root of x^2 - 16 = 0", answer: 4 },
    // Limits
    { category: "Limits", question: "Limit of 2x as x approaches 3", answer: 6 },
    // Integration
    { category: "Integration", question: "Integral of 2x from 0 to 2", answer: 4 },
    // Differentiation
    { category: "Differentiation", question: "Derivative of x^2 at x = 3", answer: 6 }
];

let activeQuestions = [];
`;

// Insert after let isProcessing = false;
const newScript = script.replace(
    'let isProcessing = false;',
    'let isProcessing = false;\n' + allQuestionsStr
);

fs.writeFileSync('js/script.js', newScript);
