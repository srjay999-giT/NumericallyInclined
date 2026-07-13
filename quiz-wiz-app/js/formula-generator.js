(function (root, factory) {
    const engine = factory();
    root.FormulaGeneratorEngine = engine;
    if (typeof module !== 'undefined' && module.exports) module.exports = engine;
}(typeof window !== 'undefined' ? window : globalThis, function () {
    'use strict';

    const DIFFICULTIES = ['Easy', 'Medium', 'Hard', 'Expert'];
    const TOPICS = [
        'Addition', 'Subtraction', 'Multiplication', 'Division', 'Squares', 'Cube Roots',
        'Percentage', 'Profit & Loss', 'Simple Interest', 'Compound Interest',
        'Ratio & Proportion', 'Average', 'Time & Work', 'Time Speed Distance',
        'Boats & Streams', 'Pipes & Cisterns', 'Mensuration', 'Geometry', 'Number System',
        'Algebra', 'Probability', 'Statistics', 'Permutation & Combination',
        'Coordinate Geometry', 'Calculus', 'Vectors', 'Matrices', 'Determinants', 'Logarithms'
    ];
    const ALIASES = {
        Math: 'Mixed Practice',
        'Time, Speed & Distance': 'Time Speed Distance',
        'Linear Equations': 'Algebra',
        'Quadratic Equations': 'Algebra',
        Trigonometry: 'Geometry',
        'Set Theory': 'Number System',
        'Mixture & Alligation': 'Ratio & Proportion',
        'AP & GP': 'Algebra',
        Limits: 'Calculus',
        Differentiation: 'Calculus',
        Integration: 'Calculus'
    };

    const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const choose = values => values[rand(0, values.length - 1)];
    const shuffle = values => values.slice().sort(() => Math.random() - 0.5);
    const gcd = (a, b) => b ? gcd(b, a % b) : Math.abs(a);
    const lcm = (a, b) => Math.abs(a * b) / gcd(a, b);
    const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
    const combination = (n, r) => factorial(n) / (factorial(r) * factorial(n - r));

    function precision(value) {
        return Number(Number(value).toFixed(6));
    }

    function rangeFor(level, minimum) {
        return [minimum, minimum * 5, minimum * 25, minimum * 250][level];
    }

    function optionsFor(answer, offsets) {
        const correct = precision(answer);
        const answers = new Set([correct]);
        const candidates = offsets || [1, -1, Math.max(2, Math.round(Math.abs(correct) * 0.1)), -Math.max(2, Math.round(Math.abs(correct) * 0.1)), 2, -2];
        candidates.forEach(offset => {
            if (answers.size < 4) answers.add(precision(correct + offset));
        });
        let nudge = 3;
        while (answers.size < 4) {
            answers.add(precision(correct + nudge));
            nudge += 2;
        }
        return shuffle(Array.from(answers));
    }

    function build(category, difficulty, question, answer, steps, formula, memoryTrick, offsets) {
        const numericAnswer = precision(answer);
        return {
            question,
            answer: numericAnswer,
            options: optionsFor(numericAnswer, offsets),
            difficulty,
            category,
            explanation: { steps, formula, memoryTrick }
        };
    }

    function makeGenerators(level) {
        const difficulty = DIFFICULTIES[level];
        const large = rangeFor(level, 10);
        const medium = rangeFor(level, 5);
        const positivePair = () => {
            const b = rand(2, medium);
            return [rand(b, large + b), b];
        };

        return {
            Addition() {
                const a = rand(1, large), b = rand(1, large);
                return build('Addition', difficulty, `${a} + ${b} = ?`, a + b, [`Add ${a} and ${b}.`, `${a} + ${b} = ${a + b}.`], 'a + b', 'Add place values from right to left.');
            },
            Subtraction() {
                const [a, b] = positivePair();
                return build('Subtraction', difficulty, `${a} - ${b} = ?`, a - b, [`Start with ${a}.`, `Take away ${b}: ${a - b}.`], 'a - b', 'Subtract ones, then tens, borrowing when needed.');
            },
            Multiplication() {
                const a = rand(2, medium + 2), b = rand(2, medium + 3);
                return build('Multiplication', difficulty, `${a} × ${b} = ?`, a * b, [`Multiply ${a} by ${b}.`, `${a} × ${b} = ${a * b}.`], 'a × b', 'Break one factor into tens and ones.');
            },
            Division() {
                const divisor = rand(2, medium + 3), quotient = rand(2, large);
                const dividend = divisor * quotient;
                return build('Division', difficulty, `${dividend} ÷ ${divisor} = ?`, quotient, [`${dividend} is ${divisor} × ${quotient}.`, `So ${dividend} ÷ ${divisor} = ${quotient}.`], 'dividend ÷ divisor', 'Reverse multiplication to check division.');
            },
            Squares() {
                const n = rand(2, large);
                return build('Squares', difficulty, `What is ${n}²?`, n * n, [`Square means multiply a number by itself.`, `${n} × ${n} = ${n * n}.`], 'n² = n × n', 'A square always has the same factor twice.');
            },
            'Cube Roots'() {
                const n = rand(2, Math.max(4, medium * 2));
                const cube = n ** 3;
                return build('Cube Roots', difficulty, `∛${cube} = ?`, n, [`Find the number multiplied by itself three times.`, `${n} × ${n} × ${n} = ${cube}.`], '∛(n³) = n', 'Cube root undoes cubing.');
            },
            Percentage() {
                const percent = choose([5, 10, 15, 20, 25, 30, 40, 50]);
                const base = rand(2, large) * (percent === 15 ? 20 : 10);
                const answer = base * percent / 100;
                return build('Percentage', difficulty, `What is ${percent}% of ${base}?`, answer, [`Convert ${percent}% to ${percent}/100.`, `${base} × ${percent}/100 = ${answer}.`], 'Percentage = (part / whole) × 100', '10% is one tenth; build other percentages from it.');
            },
            'Profit & Loss'() {
                const cost = rand(5, large) * 10, rate = choose([5, 10, 15, 20, 25, 30]);
                const profit = cost * rate / 100;
                return build('Profit & Loss', difficulty, `An item costs ${cost} and is sold at a ${rate}% profit. What is the profit?`, profit, [`Profit = ${rate}% of ${cost}.`, `${cost} × ${rate}/100 = ${profit}.`], 'Profit = SP − CP', 'Profit percentage is calculated on cost price.');
            },
            'Simple Interest'() {
                const principal = rand(5, large) * 100, rate = choose([2, 4, 5, 6, 8, 10]), years = rand(1, Math.max(2, level + 2));
                const interest = principal * rate * years / 100;
                return build('Simple Interest', difficulty, `Find the simple interest on ${principal} at ${rate}% per year for ${years} years.`, interest, [`SI = P × R × T / 100.`, `${principal} × ${rate} × ${years} / 100 = ${interest}.`], 'SI = PRT / 100', 'Simple interest grows by the same amount every year.');
            },
            'Compound Interest'() {
                const principal = rand(2, medium) * 100, rate = choose([1, 2, 5, 10]), years = level < 2 ? 2 : 3;
                const amount = precision(principal * ((1 + rate / 100) ** years));
                const interest = precision(amount - principal);
                return build('Compound Interest', difficulty, `Find the compound interest on ${principal} at ${rate}% per year for ${years} years.`, interest, [`Amount = P(1 + R/100)^T.`, `${principal}(1 + ${rate}/100)^${years} = ${amount}.`, `Interest = ${amount} − ${principal} = ${interest}.`], 'CI = P(1 + R/100)^T − P', 'Compound interest earns interest on earlier interest.');
            },
            'Ratio & Proportion'() {
                const a = rand(1, medium), b = rand(2, medium + 2), multiplier = rand(2, large);
                const given = a * multiplier, answer = b * multiplier;
                return build('Ratio & Proportion', difficulty, `If A:B = ${a}:${b} and A = ${given}, what is B?`, answer, [`Scale factor = ${given} ÷ ${a} = ${multiplier}.`, `B = ${b} × ${multiplier} = ${answer}.`], 'a / b = known / unknown', 'Both terms in an equivalent ratio use the same scale factor.');
            },
            Average() {
                const mean = rand(5, large), count = rand(3, level < 2 ? 5 : 8), values = Array.from({ length: count - 1 }, () => mean + rand(-medium, medium));
                const last = mean * count - values.reduce((sum, value) => sum + value, 0);
                values.push(last);
                const answer = mean;
                return build('Average', difficulty, `What is the average of ${values.join(', ')}?`, answer, [`Add the values: ${values.reduce((sum, value) => sum + value, 0)}.`, `Divide by ${count}: ${mean * count} ÷ ${count} = ${answer}.`], 'Average = sum / number of values', 'Average times count gives the total.');
            },
            'Time & Work'() {
                const together = rand(2, large), each = together * 2;
                return build('Time & Work', difficulty, `A and B can each finish a job in ${each} days. How many days will they take together?`, together, [`Each rate is 1/${each} job per day.`, `Together: 1/${each} + 1/${each} = 1/${together}.`, `They take ${together} days.`], '1/T = 1/A + 1/B', 'For equal workers, together time is half one worker’s time.');
            },
            'Time Speed Distance'() {
                const speed = rand(5, large), time = rand(2, medium + 2), distance = speed * time;
                return build('Time Speed Distance', difficulty, `A vehicle travels at ${speed} km/h for ${time} hours. What distance does it cover?`, distance, [`Distance = speed × time.`, `${speed} × ${time} = ${distance} km.`], 'D = S × T', 'Keep units aligned: km/h multiplied by hours gives km.');
            },
            'Boats & Streams'() {
                const stream = rand(1, Math.max(2, medium)), boat = stream + rand(2, medium + 3), downstream = boat + stream;
                return build('Boats & Streams', difficulty, `A boat moves at ${boat} km/h in still water and the stream is ${stream} km/h. What is its downstream speed?`, downstream, [`Downstream speed = boat speed + stream speed.`, `${boat} + ${stream} = ${downstream} km/h.`], 'Downstream = boat + stream', 'With the current, the speeds add.');
            },
            'Pipes & Cisterns'() {
                const together = rand(2, large), each = together * 2;
                return build('Pipes & Cisterns', difficulty, `Two identical pipes each fill a tank in ${each} hours. How long do they take together?`, together, [`Each pipe fills 1/${each} per hour.`, `Together they fill 1/${together} per hour.`, `Time = ${together} hours.`], '1/T = 1/A + 1/B', 'For identical pipes, combined time is half.');
            },
            Mensuration() {
                const length = rand(2, large), width = rand(2, medium + 3), area = length * width;
                return build('Mensuration', difficulty, `Find the area of a rectangle with length ${length} cm and width ${width} cm.`, area, [`Area = length × width.`, `${length} × ${width} = ${area} cm².`], 'Area of rectangle = l × w', 'Area uses square units.');
            },
            Geometry() {
                const a = rand(20, 80), b = rand(20, Math.min(140 - a, 100)), c = 180 - a - b;
                return build('Geometry', difficulty, `Two angles of a triangle are ${a}° and ${b}°. Find the third angle.`, c, [`Angles in a triangle total 180°.`, `180 − ${a} − ${b} = ${c}°.`], 'A + B + C = 180°', 'A triangle’s interior angles always sum to 180°.');
            },
            'Number System'() {
                const factor = rand(2, medium), a = factor * rand(2, large), b = factor * rand(2, large);
                const answer = gcd(a, b);
                return build('Number System', difficulty, `Find the HCF of ${a} and ${b}.`, answer, [`The greatest common factor divides both numbers.`, `HCF(${a}, ${b}) = ${answer}.`], 'HCF(a, b) = gcd(a, b)', 'Use common prime factors, taking the smallest powers.');
            },
            Algebra() {
                const coefficient = rand(2, medium + 2), x = rand(1, large), constant = rand(1, large), total = coefficient * x + constant;
                return build('Algebra', difficulty, `Solve for x: ${coefficient}x + ${constant} = ${total}`, x, [`Subtract ${constant}: ${coefficient}x = ${total - constant}.`, `Divide by ${coefficient}: x = ${x}.`], 'ax + b = c, so x = (c − b) / a', 'Undo addition first, then multiplication.');
            },
            Probability() {
                const sides = rand(6, Math.max(12, large)), favourable = rand(1, sides - 1);
                return build('Probability', difficulty, `A box has ${favourable} red and ${sides - favourable} blue balls. How many favorable outcomes are there when drawing a red ball?`, favourable, [`Favorable outcomes are the red balls.`, `There are ${favourable} red balls.`], 'P(E) = favorable outcomes / total outcomes', 'Count favorable cases before forming the fraction.');
            },
            Statistics() {
                const mean = rand(4, large), values = [mean - 2, mean - 1, mean + 1, mean + 2];
                return build('Statistics', difficulty, `Find the mean of ${values.join(', ')}.`, mean, [`Their sum is ${values.reduce((sum, value) => sum + value, 0)}.`, `Divide by 4: ${mean}.`], 'Mean = sum / count', 'Balanced values average at their center.');
            },
            'Permutation & Combination'() {
                const n = rand(5, rangeFor(level, 12)), r = 2, answer = n * (n - 1) / 2;
                return build('Permutation & Combination', difficulty, `How many ways can ${r} students be chosen from ${n} students?`, answer, [`Use combinations because order does not matter.`, `${n}C${r} = ${answer}.`], 'nCr = n! / (r!(n − r)!)', 'Choose means combinations; arrange means permutations.');
            },
            'Coordinate Geometry'() {
                const scale = rand(1, medium), triple = choose([[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25]]), x = triple[0] * scale, y = triple[1] * scale, answer = triple[2] * scale;
                return build('Coordinate Geometry', difficulty, `Find the distance from (0, 0) to (${x}, ${y}).`, answer, [`Distance = √(${x}² + ${y}²).`, `√(${x * x} + ${y * y}) = ${answer}.`], 'd = √((x₂−x₁)² + (y₂−y₁)²)', 'Look for Pythagorean triples.');
            },
            Calculus() {
                const coefficient = rand(2, medium + 2), exponent = rand(2, level < 2 ? 5 : 10), x = rand(1, Math.max(3, level + 2));
                const answer = coefficient * exponent * (x ** (exponent - 1));
                return build('Calculus', difficulty, `For f(x) = ${coefficient}x^${exponent}, find f'(${x}).`, answer, [`f'(x) = ${coefficient * exponent}x^${exponent - 1}.`, `At x = ${x}, f'(${x}) = ${answer}.`], 'd/dx(axⁿ) = anxⁿ⁻¹', 'Bring the exponent down, then reduce it by one.');
            },
            Vectors() {
                const scale = rand(1, medium), triple = choose([[3, 4, 5], [5, 12, 13], [8, 15, 17]]), x = triple[0] * scale, y = triple[1] * scale, answer = triple[2] * scale;
                return build('Vectors', difficulty, `Find the magnitude of vector ⟨${x}, ${y}⟩.`, answer, [`Magnitude = √(${x}² + ${y}²).`, `The magnitude is ${answer}.`], '|v| = √(x² + y²)', 'Vector magnitude follows the Pythagorean theorem.');
            },
            Matrices() {
                const a = rand(1, large), b = rand(1, large), c = rand(1, large), d = rand(1, large);
                return build('Matrices', difficulty, `For A = [[${a}, ${b}], [${c}, ${d}]], what is the sum of its diagonal entries?`, a + d, [`The diagonal entries are ${a} and ${d}.`, `${a} + ${d} = ${a + d}.`], 'trace(A) = sum of diagonal entries', 'Read the main diagonal from top-left to bottom-right.');
            },
            Determinants() {
                const a = rand(1, medium), b = rand(1, medium), c = rand(1, medium), d = rand(1, medium);
                const answer = a * d - b * c;
                return build('Determinants', difficulty, `Find det([[${a}, ${b}], [${c}, ${d}]]).`, answer, [`For a 2×2 matrix, determinant = ad − bc.`, `${a}×${d} − ${b}×${c} = ${answer}.`], 'det([[a,b],[c,d]]) = ad − bc', 'Multiply the main diagonal, then subtract the other diagonal.');
            },
            Logarithms() {
                const base = choose([2, 3]);
                const exponentLimit = base === 2 ? 1020 : 640;
                const exponent = rand(2, Math.min(exponentLimit, rangeFor(level, 5)));
                const value = base ** exponent;
                return build('Logarithms', difficulty, `log_${base}(${value}) = ?`, exponent, [`Ask which power of ${base} equals ${value}.`, `${base}^${exponent} = ${value}.`], 'log_b(bⁿ) = n', 'A logarithm asks for the exponent.');
            }
        };
    }

    class FormulaGeneratorEngine {
        constructor() {
            this.history = new Set();
            this.category = 'Mixed Practice';
            this.difficultyIndex = 1;
            this.recentAnswers = [];
        }

        getSupportedTopics() { return TOPICS.slice(); }
        getDifficulty() { return DIFFICULTIES[this.difficultyIndex]; }
        normalizeCategory(category) { return ALIASES[category] || category || 'Mixed Practice'; }

        startSession(category, difficulty) {
            this.category = this.normalizeCategory(category);
            this.history.clear();
            if (difficulty && DIFFICULTIES.includes(difficulty)) this.difficultyIndex = DIFFICULTIES.indexOf(difficulty);
        }

        recordAnswer(correct) {
            this.recentAnswers.push(Boolean(correct));
            if (this.recentAnswers.length > 4) this.recentAnswers.shift();
            if (this.recentAnswers.length < 4) return this.getDifficulty();
            const accuracy = this.recentAnswers.filter(Boolean).length / this.recentAnswers.length;
            if (accuracy > 0.9 && this.difficultyIndex < DIFFICULTIES.length - 1) {
                this.difficultyIndex++;
                this.recentAnswers = [];
            } else if (accuracy < 0.5 && this.difficultyIndex > 0) {
                this.difficultyIndex--;
                this.recentAnswers = [];
            }
            return this.getDifficulty();
        }

        isValid(question) {
            return question && typeof question.question === 'string' && Number.isFinite(question.answer) &&
                DIFFICULTIES.includes(question.difficulty) && TOPICS.includes(question.category) &&
                Array.isArray(question.options) && question.options.length === 4 &&
                new Set(question.options).size === 4 && question.options.includes(question.answer) &&
                question.explanation && Array.isArray(question.explanation.steps);
        }

        nextQuestion(category) {
            const requested = this.normalizeCategory(category || this.category);
            const topic = requested === 'Mixed Practice' ? choose(TOPICS) : requested;
            if (!TOPICS.includes(topic)) throw new Error(`Unsupported question category: ${requested}`);
            const generators = makeGenerators(this.difficultyIndex);
            for (let attempt = 0; attempt < 200; attempt++) {
                const question = generators[topic]();
                const fingerprint = `${topic}|${question.question}`;
                if (this.isValid(question) && !this.history.has(fingerprint)) {
                    this.history.add(fingerprint);
                    return question;
                }
            }
            this.history.clear();
            return this.nextQuestion(requested);
        }
    }

    return FormulaGeneratorEngine;
}));
