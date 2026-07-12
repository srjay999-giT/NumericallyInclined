document.addEventListener('DOMContentLoaded', () => {
    // =========================================================
    // HOME VIEW LOGIC (Navigation & Ripples)
    // =========================================================
    const cardItems = document.querySelectorAll('.card-item');

    function setActiveNavItem(activeLink) {
        document.querySelectorAll('.premium-nav-link').forEach(link => {
            link.classList.toggle('active', link === activeLink);
        });
    }

    // Smooth hover & click handlers with Ripple effect for premium web feel
    cardItems.forEach(item => {
        // Mouse click
        item.addEventListener('mousedown', function(e) {
            createRipple(e, this);
        });
        
        // Touch feedback for mobile devices
        item.addEventListener('touchstart', function(e) {
            createRipple(e.touches[0], this);
        }, {passive: true});
        
        // Navigation interception for demo purposes
        item.addEventListener('click', function(e) {
            // Allow navigation for Start Quiz button
            if (this.id !== 'card-start') {
                e.preventDefault();
            }
            const text = this.querySelector('.card-text').innerText;
            console.log(`Navigating to ${text} module...`);
            
            // Add a slight delay for the start button to allow the ripple to render before navigating
            if (this.id === 'card-start') {
                e.preventDefault();
                selectedTopic = 'Math';
                setActiveNavItem(document.querySelector('a[href="#practice"]'));
                setTimeout(() => {
                    // SPA Transition to Quiz
                    const homeView = document.getElementById('home-view');
                    homeView.classList.add('fade-out');
                    
                    setTimeout(() => {
                        homeView.classList.add('hidden-view');
                    }, 500); // Wait for transition
                    
                    const quizView = document.getElementById('quiz-view');
                    quizView.classList.add('active');
                    quizView.classList.add('slide-in-up');
                    document.body.classList.add('quiz-active');
                    
                    // Reset and start quiz
                    resetQuiz();
                }, 400);
            } else if (this.id === 'card-categories') {
                openCategoriesView();
            } else if (this.id === 'card-leaderboard') {
                e.preventDefault();
                setActiveNavItem(document.querySelector('a[href="#card-leaderboard"]'));

                setTimeout(() => {
                    // SPA Transition to Leaderboard
                    const homeView = document.getElementById('home-view');
                    homeView.classList.add('fade-out');
                    
                    setTimeout(() => {
                        homeView.classList.add('hidden-view');
                    }, 500);
                    
                    const quizView = document.getElementById('quiz-view');
                    quizView.classList.add('active');
                    quizView.classList.add('slide-in-up');
                    document.body.classList.add('quiz-active');
                    
                    document.getElementById('quiz-screen').classList.add('hidden');
                    const resultsScreen = document.getElementById('results-screen');
                    resultsScreen.classList.remove('hidden');
                    
                    // Hide Results-specific elements
                    const resultsIcon = document.querySelector('.results-icon');
                    if (resultsIcon) resultsIcon.style.display = 'none';
                    const resultsH2 = document.querySelector('#results-screen h2');
                    if (resultsH2) resultsH2.style.display = 'none';
                    const resultsStats = document.querySelector('.results-stats');
                    if (resultsStats) resultsStats.style.display = 'none';
                    const playAgainBtn = document.getElementById('play-again-btn');
                    if (playAgainBtn) playAgainBtn.style.display = 'none';
                    
                    displayLeaderboard();
                }, 400);
            }
        });
    });

    const heroPracticeBtn = document.getElementById('hero-practice-btn');
    if (heroPracticeBtn) {
        heroPracticeBtn.addEventListener('click', () => {
            document.getElementById('card-start')?.click();
        });
    }

    const heroCategoriesBtn = document.getElementById('hero-categories-btn');
    if (heroCategoriesBtn) {
        heroCategoriesBtn.addEventListener('click', () => {
            document.getElementById('card-categories')?.click();
        });
    }

    function animateLandingCounters() {
        document.querySelectorAll('[data-counter]').forEach(counter => {
            const end = Number(counter.dataset.counter);
            const suffix = counter.dataset.suffix || '';
            const startedAt = performance.now();
            const duration = 900;

            const update = now => {
                const progress = Math.min((now - startedAt) / duration, 1);
                counter.textContent = Math.round(end * progress).toLocaleString() + suffix;
                if (progress < 1) requestAnimationFrame(update);
            };
            requestAnimationFrame(update);
        });
    }

    function getPracticeJourney() {
        return JSON.parse(localStorage.getItem('numericallyInclinedPracticeJourney')) || {
            days: {},
            quizzes: 0,
            questionsSolved: 0,
            accuracyTotal: 0
        };
    }

    function getJourneyStreak(days) {
        let streak = 0;
        const cursor = new Date();
        cursor.setHours(0, 0, 0, 0);

        while (days[cursor.toISOString().slice(0, 10)]) {
            streak++;
            cursor.setDate(cursor.getDate() - 1);
        }
        return streak;
    }

    function renderPracticeJourney() {
        const journey = getPracticeJourney();
        const heatmap = document.getElementById('practice-heatmap');
        if (heatmap) {
            const dates = Array.from({ length: 98 }, (_, index) => {
                const day = new Date();
                day.setDate(day.getDate() - (97 - index));
                return day.toISOString().slice(0, 10);
            });
            heatmap.innerHTML = dates.map(date => {
                const total = journey.days[date] || 0;
                const level = total >= 4 ? 4 : total;
                return `<i data-level="${level}" title="${date}: ${total} quiz${total === 1 ? '' : 'zes'}"></i>`;
            }).join('');
        }

        const activeDates = Object.keys(journey.days).sort();
        let longestStreak = 0;
        let runningStreak = 0;
        let previousDate = null;
        activeDates.forEach(date => {
            const currentDate = new Date(`${date}T00:00:00`);
            const isConsecutive = previousDate && (currentDate - previousDate) / 86400000 === 1;
            runningStreak = isConsecutive ? runningStreak + 1 : 1;
            longestStreak = Math.max(longestStreak, runningStreak);
            previousDate = currentDate;
        });

        const dashboardValues = {
            'journey-current-streak': getJourneyStreak(journey.days),
            'journey-longest-streak': longestStreak,
            'journey-practice-days': activeDates.length,
            'journey-questions-solved': journey.questionsSolved,
            'journey-average-accuracy': journey.quizzes ? `${Math.round(journey.accuracyTotal / journey.quizzes)}%` : '0%'
        };
        Object.entries(dashboardValues).forEach(([id, value]) => {
            const element = document.getElementById(id);
            if (element) element.textContent = value.toLocaleString();
        });
    }

    function recordPracticeJourney(accuracy) {
        const journey = getPracticeJourney();
        const today = new Date().toISOString().slice(0, 10);
        const completedQuestions = Math.min(TOTAL_QUESTIONS, Math.max(1, currentQuestion - 1));
        journey.days[today] = (journey.days[today] || 0) + 1;
        journey.quizzes += 1;
        journey.questionsSolved += completedQuestions;
        journey.accuracyTotal += accuracy;
        localStorage.setItem('numericallyInclinedPracticeJourney', JSON.stringify(journey));
        renderPracticeJourney();
    }

    const importantFormulasBtn = document.getElementById('important-formulas-btn');
    if (importantFormulasBtn) {
        importantFormulasBtn.addEventListener('click', () => {
            const formulasView = document.getElementById('formulas-view');
            const categoriesView = document.getElementById('categories-view');
            if (!formulasView || !categoriesView) return;

            formulasView.classList.add('active');
            formulasView.setAttribute('aria-hidden', 'false');
            categoriesView.classList.remove('active');
            categoriesView.setAttribute('aria-hidden', 'true');
            formulasView.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    function openCategoriesView() {
        const categoriesView = document.getElementById('categories-view');
        const homeView = document.getElementById('home-view');
        if (!categoriesView || !homeView) return;

        categoriesView.classList.add('active');
        categoriesView.setAttribute('aria-hidden', 'false');
        homeView.classList.add('fade-out');
        setTimeout(() => homeView.classList.add('hidden-view'), 500);
        setActiveNavItem(document.querySelector('a[href="#categories"]'));
        categoriesView.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function closeCategoriesView() {
        const categoriesView = document.getElementById('categories-view');
        const homeView = document.getElementById('home-view');
        if (!categoriesView || !homeView) return;

        categoriesView.classList.remove('active');
        categoriesView.setAttribute('aria-hidden', 'true');
        homeView.classList.remove('hidden-view');
        void homeView.offsetWidth;
        homeView.classList.remove('fade-out');
    }

    function closeFormulasView() {
        const formulasView = document.getElementById('formulas-view');
        if (!formulasView) return;

        formulasView.classList.remove('active');
        formulasView.setAttribute('aria-hidden', 'true');
    }

    const categoriesBackBtn = document.getElementById('categories-back-btn');
    if (categoriesBackBtn) categoriesBackBtn.addEventListener('click', closeCategoriesView);

    const formulasBackBtn = document.getElementById('formulas-back-btn');
    if (formulasBackBtn) {
        formulasBackBtn.addEventListener('click', () => {
            closeFormulasView();
            document.getElementById('categories-view')?.classList.add('active');
            document.getElementById('categories-view')?.setAttribute('aria-hidden', 'false');
        });
    }


    // Function to generate the ripple effect
    function createRipple(event, element) {
        const rippleContainer = element.querySelector('.ripple-container');
        if (!rippleContainer) return;
        
        const circle = document.createElement('span');
        const diameter = Math.max(element.clientWidth, element.clientHeight);
        const radius = diameter / 2;

        const rect = element.getBoundingClientRect();
        
        // Ensure accurate coordinates on scroll
        const clientX = event.clientX;
        const clientY = event.clientY;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${clientX - rect.left - radius}px`;
        circle.style.top = `${clientY - rect.top - radius}px`;
        circle.classList.add('ripple');

        // Prevent DOM bloat by removing old ripples
        const existingRipples = rippleContainer.getElementsByClassName('ripple');
        if (existingRipples.length > 3) {
            existingRipples[0].remove();
        }

        rippleContainer.appendChild(circle);

        // Remove ripple element after animation completes
        setTimeout(() => {
            circle.remove();
        }, 700);
    }

    // =========================================================
    // MATHEMATICS KNOWLEDGE HUB
    // =========================================================
    const knowledgeTopics = [
        ['algebra', 'Algebra', 'variable', 18, 'Intermediate', '8 min', 'a + b = b + a', 'Algebra uses symbols to represent quantities and relationships.', 'a, b are algebraic terms', 'No units', 'Swap the order, keep the total.', '3 + x = 11, so x = 8.', 'Changing a sign while moving a term.', 'Do the same operation on both sides.', 'Solve: 4x = 28', 7],
        ['number-system', 'Number System', 'binary', 16, 'Beginner', '7 min', 'HCF x LCM = Product of two numbers', 'Build confidence with integers, fractions, divisibility, and place value.', 'HCF = highest common factor; LCM = least common multiple', 'No units', 'Factors go down, multiples go up.', 'For 12 and 18: HCF 6, LCM 36.', 'Using this rule for more than two numbers.', 'List prime factors first.', 'HCF of 18 and 24', 6],
        ['percentage', 'Percentage', 'percent', 12, 'Beginner', '6 min', 'Percentage = (Part / Whole) x 100', 'Percentages compare a part to a whole in a familiar scale of 100.', 'Part and Whole are comparable values', '%', 'Part over whole, then hundred.', '18 out of 60 = 30%.', 'Using the new value as the original value.', 'Find the base value before a percentage change.', '25% of 80', 20],
        ['profit-loss', 'Profit & Loss', 'badge-dollar-sign', 14, 'Intermediate', '8 min', 'Profit = SP - CP', 'Profit and loss measure the change from cost price to selling price.', 'SP = selling price; CP = cost price', 'Currency', 'Selling minus cost tells the story.', 'CP 80, SP 100 gives profit 20.', 'Calculating profit percent on SP instead of CP.', 'Keep CP as the profit-percent base.', 'Profit when CP is 120 and SP is 150', 30],
        ['simple-interest', 'Simple Interest', 'landmark', 10, 'Beginner', '5 min', 'SI = (P x R x T) / 100', 'Simple interest grows only on the original principal.', 'P = principal; R = rate; T = time', 'Currency', 'PRT over one hundred.', '1000 at 5% for 2 years gives 100.', 'Mixing months and years.', 'Convert time to years before calculating.', 'SI on 1000 at 10% for 2 years', 200],
        ['compound-interest', 'Compound Interest', 'credit-card', 12, 'Intermediate', '8 min', 'A = P(1 + R/100)^T', 'Compound interest earns interest on prior interest as well as principal.', 'A = amount; P = principal; R = rate; T = time', 'Currency', 'Principal grows by one plus rate.', '1000 at 10% for 2 years becomes 1210.', 'Forgetting the exponent for time.', 'Calculate one year at a time when unsure.', 'Amount on 1000 at 10% for 2 years', 1210],
        ['mensuration', 'Mensuration', 'ruler', 20, 'Intermediate', '10 min', 'Area of circle = pi r^2', 'Mensuration measures length, area, surface area, and volume.', 'r = radius; pi is approximately 22/7', 'Square units', 'Circle area: pi times radius twice.', 'r = 7 gives area 154 square units.', 'Using diameter in place of radius.', 'Halve the diameter before squaring.', 'Area of a circle with radius 7 using pi = 22/7', 154],
        ['geometry', 'Geometry', 'triangle', 17, 'Intermediate', '9 min', 'Angle sum of triangle = 180 degrees', 'Geometry studies shapes, angles, lines, and spatial relationships.', 'All three interior angles', 'Degrees', 'Three corners make 180.', 'Angles 50 and 60 leave 70.', 'Adding an exterior angle as an interior angle.', 'Draw and label the triangle first.', 'Third angle if two angles are 55 and 65', 60],
        ['trigonometry', 'Trigonometry', 'angle', 18, 'Advanced', '10 min', 'sin^2 theta + cos^2 theta = 1', 'Trigonometry connects angles with side ratios and periodic functions.', 'theta = an angle', 'No units', 'Sine square plus cosine square is one.', 'If sin theta = 3/5, cos theta = 4/5.', 'Dropping the square on either term.', 'Use a right triangle for acute angles.', 'If sin theta = 3/5, find cos theta times 5', 4],
        ['calculus', 'Calculus', 'function-square', 15, 'Advanced', '12 min', 'd/dx (x^n) = nx^(n-1)', 'Calculus models change, motion, accumulation, and optimization.', 'x = variable; n = constant power', 'Depends on context', 'Bring down, then reduce.', 'd/dx x^3 = 3x^2.', 'Keeping the exponent unchanged.', 'The derivative of a constant is zero.', 'Derivative coefficient of x^4', 4],
        ['probability', 'Probability', 'dices', 11, 'Beginner', '7 min', 'P(E) = Favorable outcomes / Total outcomes', 'Probability measures the likelihood of an event.', 'E = event', 'From 0 to 1', 'Wanted over all.', 'A die: P(even) = 3/6 = 1/2.', 'Counting outcomes twice.', 'Make an outcome list for small samples.', 'Favorable outcomes for an even number on a die', 3],
        ['statistics', 'Statistics', 'chart-column', 14, 'Intermediate', '8 min', 'Mean = Sum of observations / Number of observations', 'Statistics helps describe and interpret data.', 'Observations are the data values', 'Same as data', 'Add, then divide by count.', 'Mean of 2, 4, 6 is 4.', 'Dividing by the wrong count.', 'Check whether all values were included.', 'Mean of 3, 6, 9', 6],
        ['permutation-combination', 'Permutation & Combination', 'shuffle', 16, 'Advanced', '10 min', 'nCr = n! / [r!(n-r)!]', 'Permutations arrange; combinations choose without order.', 'n = total; r = selected', 'No units', 'C is for choose.', '5C2 = 10.', 'Using nPr when order does not matter.', 'Ask: does swapping create a new result?', '5C2', 10],
        ['coordinate-geometry', 'Coordinate Geometry', 'map-pin', 13, 'Intermediate', '8 min', 'Distance = sqrt[(x2-x1)^2 + (y2-y1)^2]', 'Coordinate geometry combines algebra with points on a plane.', 'x1, y1 and x2, y2 are point coordinates', 'Units', 'Across squared plus up squared.', 'From (0,0) to (3,4) is 5.', 'Forgetting to square a negative difference.', 'Subtract coordinates in matching order.', 'Distance from (0,0) to (3,4)', 5],
        ['logarithms', 'Logarithms', 'sigma', 12, 'Advanced', '9 min', 'log_b(xy) = log_b x + log_b y', 'Logarithms are inverse operations of exponents.', 'b = base; x, y are positive values', 'No units', 'Multiply inside, add outside.', 'log 100 = 2 in base 10.', 'Applying the product rule to addition.', 'Rewrite as an exponent to check.', 'log base 10 of 100', 2],
        ['set-theory', 'Set Theory', 'brain', 10, 'Beginner', '6 min', 'n(A union B) = n(A) + n(B) - n(A intersection B)', 'Set theory organizes objects into groups and relationships.', 'A, B are sets; n() counts elements', 'No units', 'Add both, subtract overlap.', '12 + 9 - 4 = 17.', 'Counting the common elements twice.', 'Draw a Venn diagram.', 'If n(A)=8, n(B)=6, intersection=2, find union', 12],
        ['time-speed-distance', 'Time, Speed & Distance', 'train-front', 14, 'Intermediate', '8 min', 'Speed = Distance / Time', 'Motion problems connect how far, how fast, and how long.', 'Distance, speed, time', 'km/h, m/s', 'DST triangle: distance on top.', '120 km in 2 h is 60 km/h.', 'Mixing km/h with minutes.', 'Convert time units first.', 'Speed for 150 km in 3 hours', 50],
        ['time-work', 'Time & Work', 'hard-hat', 14, 'Intermediate', '8 min', 'Work = Rate x Time', 'Work problems use rates to compare individual and combined effort.', 'Rate = work per unit time', 'Jobs/day', 'Work rate times time.', 'A 5-day job has rate 1/5 per day.', 'Adding times instead of rates.', 'Convert every worker to one-day work.', 'If one job takes 5 days, work done in one day as a denominator', 5],
        ['boats-streams', 'Boats & Streams', 'ship-wheel', 10, 'Intermediate', '7 min', 'Downstream speed = Boat speed + Stream speed', 'Boat problems combine still-water speed with current speed.', 'Boat and stream speeds', 'km/h', 'Down adds, up subtracts.', 'Boat 10, stream 2: downstream 12.', 'Using the same sign upstream.', 'Write both equations before substituting.', 'Downstream speed for boat 12 and stream 3', 15],
        ['pipes-cisterns', 'Pipes & Cisterns', 'pipette', 10, 'Intermediate', '7 min', 'Combined rate = Sum of individual rates', 'Pipe problems are work-rate problems for filling or emptying tanks.', 'Rate in tanks per unit time', 'Tanks/hour', 'Rates add for filling pipes.', '1/4 + 1/6 = 5/12 tank per hour.', 'Adding hours instead of rates.', 'Treat outlet rates as negative.', 'Numerator of 1/4 + 1/6 when expressed over 12', 5],
        ['ratio-proportion', 'Ratio & Proportion', 'scale', 12, 'Beginner', '6 min', 'a/b = c/d implies ad = bc', 'Ratios compare quantities; proportions state equal ratios.', 'a, b, c, d are comparable values', 'No units', 'Outer times outer equals inner times inner.', '2/3 = 4/6.', 'Comparing values with different units.', 'Simplify ratios before cross multiplication.', 'If 2/3 = x/12, find x', 8],
        ['average', 'Average', 'package', 9, 'Beginner', '5 min', 'Average = Total / Number of items', 'Average represents a balanced central value.', 'Total is sum of all values', 'Same as data', 'Average is total shared equally.', 'Total 40 across 5 values gives 8.', 'Averaging averages without weights.', 'Recover total by average times count.', 'Average of 10, 20, 30', 20],
        ['mixture-alligation', 'Mixture & Alligation', 'flask-conical', 13, 'Advanced', '9 min', 'Ratio = (Higher - Mean) : (Mean - Lower)', 'Alligation finds the mixing ratio for two prices or concentrations.', 'Higher, lower, and mean values', 'Same as values', 'Cross differences make the ratio.', '10 and 20 to mean 14 gives 6:4.', 'Subtracting in the wrong direction.', 'Place the mean between the two values.', 'For 10 and 20 with mean 14, first ratio term', 6],
        ['linear-equations', 'Linear Equations', 'chart-no-axes-combined', 11, 'Intermediate', '7 min', 'ax + b = 0, so x = -b/a', 'Linear equations have variables only to the first power.', 'a is nonzero; x is the variable', 'Depends on context', 'Move b, divide by a.', '2x + 6 = 0 gives x = -3.', 'Dividing only one side.', 'Keep equality balanced at every step.', 'Solve 3x + 9 = 0', -3],
        ['quadratic-equations', 'Quadratic Equations', 'chart-no-axes-combined', 15, 'Advanced', '10 min', 'x = [-b +/- sqrt(b^2 - 4ac)] / 2a', 'Quadratics involve a squared variable and can have two roots.', 'a, b, c are coefficients', 'No units', 'Negative b, plus or minus, root, over two a.', 'x^2 - 5x + 6 = 0 gives 2 and 3.', 'Forgetting both plus and minus roots.', 'Factor first when factors are obvious.', 'Sum of roots of x^2 - 5x + 6', 5],
        ['ap-gp', 'AP & GP', 'trending-up', 14, 'Intermediate', '8 min', 'AP nth term = a + (n-1)d', 'Progressions describe sequences with constant difference or ratio.', 'a = first term; d = common difference', 'No units', 'First plus gaps times difference.', 'AP 2,5,8 has 5th term 14.', 'Using n instead of n-1.', 'Count the gaps, not the terms.', 'Fifth term of AP 2, 5, 8', 14],
        ['matrices', 'Matrices', 'grid-2x2', 13, 'Advanced', '9 min', '(AB)ij = sum of Aik x Bkj', 'Matrices organize numbers into rows and columns for transformations.', 'i, j identify a position; k is summed', 'Depends on context', 'Row by column.', 'Multiply a 1x2 row by a 2x1 column.', 'Multiplying matching entries only.', 'Check inner dimensions before multiplying.', 'Rows in a 2x3 matrix', 2],
        ['determinants', 'Determinants', 'box', 10, 'Advanced', '8 min', 'det [[a,b],[c,d]] = ad - bc', 'A determinant is a scalar associated with a square matrix.', 'a, b, c, d are matrix entries', 'Depends on matrix', 'Main diagonal minus other diagonal.', 'det [[2,3],[1,4]] = 5.', 'Adding both diagonal products.', 'Only square matrices have determinants.', 'det [[2,3],[1,4]]', 5],
        ['vectors', 'Vectors', 'move-right', 12, 'Intermediate', '8 min', '|v| = sqrt(x^2 + y^2)', 'Vectors have magnitude and direction.', 'x, y are vector components', 'Units of the vector', 'Components squared, added, rooted.', 'Vector (3,4) has magnitude 5.', 'Adding component magnitudes directly.', 'Draw the vector as a right triangle.', 'Magnitude of vector (6,8)', 10],
        ['limits', 'Limits', 'infinity', 10, 'Advanced', '9 min', 'lim [f(x) + g(x)] = lim f(x) + lim g(x)', 'Limits describe the value a function approaches near a point.', 'x approaches a target value', 'Depends on function', 'Split a sum into two limits.', 'lim x^2 as x approaches 3 is 9.', 'Substituting when the form is undefined.', 'Factor and cancel before substituting.', 'Limit of x^2 as x approaches 4', 16],
        ['differentiation', 'Differentiation', 'chart-spline', 14, 'Advanced', '10 min', 'd/dx (sin x) = cos x', 'Differentiation finds instantaneous rate of change.', 'x is the variable', 'Depends on context', 'Sine becomes cosine.', 'At x = 0, cos x is 1.', 'Forgetting chain rule for inner functions.', 'Name the inner function first.', 'Value of cos 0', 1],
        ['integration', 'Integration', 'integral', 14, 'Advanced', '10 min', 'Integral x^n dx = x^(n+1)/(n+1) + C', 'Integration accumulates quantities and reverses differentiation.', 'n is not -1; C is a constant', 'Depends on context', 'Raise, divide, add C.', 'Integral x^2 dx = x^3/3 + C.', 'Forgetting the constant C.', 'Differentiate your answer to check.', 'Exponent after integrating x^3', 4]
    ].map(([id, name, icon, formulas, difficulty, time, expression, overview, variables, units, trick, example, mistakes, tip, question, answer]) => ({
        id, name, icon, formulas, difficulty, time, overview, practice: { question, answer },
        formula: { expression, variables, units, trick, example, mistakes, tip }
    }));

    const topicGrid = document.getElementById('topic-grid');
    const formulaSearch = document.getElementById('formula-search');
    const topicEmptyState = document.getElementById('topic-empty-state');
    let openTopicId = null;

    function getBookmarks() {
        return JSON.parse(localStorage.getItem('mathKnowledgeBookmarks')) || [];
    }

    function renderKnowledgeHub(filter = '') {
        if (!topicGrid) return;
        const normalizedFilter = filter.trim().toLowerCase();
        const visibleTopics = knowledgeTopics.filter(topic =>
            `${topic.name} ${topic.overview} ${topic.formula.expression}`.toLowerCase().includes(normalizedFilter)
        );

        topicGrid.innerHTML = visibleTopics.map(topic => {
            const isOpen = topic.id === openTopicId;
            return `
                <button class="topic-card${isOpen ? ' is-active' : ''}" type="button" data-topic-id="${topic.id}" aria-expanded="${isOpen}">
                    <span class="topic-card-top">
                        <span class="topic-icon"><i data-lucide="${topic.icon}"></i></span>
                        <span class="difficulty-badge">${topic.difficulty}</span>
                    </span>
                    <span><h3>${topic.name}</h3></span>
                    <span class="topic-meta">
                        <span><i data-lucide="list"></i><b class="formula-count" data-count="${topic.formulas}">0</b> formulas</span>
                        <span><i data-lucide="clock-3"></i>${topic.time}</span>
                    </span>
                    <span class="topic-view-link">View formulas <i data-lucide="arrow-right"></i></span>
                </button>
                ${isOpen ? renderTopicDetail(topic) : ''}
            `;
        }).join('');

        topicEmptyState.hidden = visibleTopics.length > 0;
        if (window.lucide) window.lucide.createIcons();
        animateFormulaCounters();
        if (openTopicId) {
            requestAnimationFrame(() => {
                document.querySelector(`[data-topic-detail="${openTopicId}"]`)?.classList.add('is-open');
            });
        }
    }

    function renderTopicDetail(topic) {
        const bookmarkId = `${topic.id}-formula-0`;
        const bookmarked = getBookmarks().includes(bookmarkId);
        return `
            <article class="topic-detail" data-topic-detail="${topic.id}">
                <div class="topic-detail-panel">
                    <div class="topic-detail-heading">
                        <div>
                            <h3>${topic.name}: Topic Overview</h3>
                            <p>${topic.overview}</p>
                        </div>
                        <button class="topic-close" type="button" aria-label="Close ${topic.name} formulas" data-close-topic><i data-lucide="x"></i></button>
                    </div>
                    <h4 class="formula-section-title">Important Formulas</h4>
                    <div class="formula-grid">
                        <article class="formula-card">
                            <div class="formula-card-head">
                                <p class="formula-expression">${topic.formula.expression}</p>
                                <button class="formula-bookmark${bookmarked ? ' is-bookmarked' : ''}" type="button" aria-label="Bookmark ${topic.name} formula" aria-pressed="${bookmarked}" data-bookmark-id="${bookmarkId}"><i data-lucide="bookmark"></i></button>
                            </div>
                            <div class="formula-facts">
                                <p class="formula-fact"><strong>Meaning:</strong> Core relationship for ${topic.name.toLowerCase()}.</p>
                                <p class="formula-fact"><strong>Variables:</strong> ${topic.formula.variables}</p>
                                <p class="formula-fact"><strong>Units:</strong> ${topic.formula.units}</p>
                                <p class="formula-fact"><strong>Memory Trick:</strong> ${topic.formula.trick}</p>
                                <p class="formula-fact"><strong>Worked Example:</strong> ${topic.formula.example}</p>
                                <p class="formula-fact"><strong>Common Mistake:</strong> ${topic.formula.mistakes}</p>
                                <p class="formula-fact"><strong>Quick Tip:</strong> ${topic.formula.tip}</p>
                            </div>
                        </article>
                    </div>
                    <button class="topic-practice-button" type="button" data-practice-topic="${topic.id}"><i data-lucide="play"></i> Practice This Topic</button>
                </div>
            </article>
        `;
    }

    function animateFormulaCounters() {
        document.querySelectorAll('.formula-count').forEach(counter => {
            const end = Number(counter.dataset.count);
            const startedAt = performance.now();
            const duration = 450;
            const update = now => {
                const progress = Math.min((now - startedAt) / duration, 1);
                counter.textContent = Math.round(end * progress);
                if (progress < 1) requestAnimationFrame(update);
            };
            requestAnimationFrame(update);
        });
    }

    if (formulaSearch) {
        formulaSearch.addEventListener('input', () => {
            openTopicId = null;
            renderKnowledgeHub(formulaSearch.value);
        });
    }

    if (topicGrid) {
        topicGrid.addEventListener('click', event => {
            const bookmarkButton = event.target.closest('[data-bookmark-id]');
            if (bookmarkButton) {
                event.stopPropagation();
                const bookmarkId = bookmarkButton.dataset.bookmarkId;
                const bookmarks = getBookmarks();
                const nextBookmarks = bookmarks.includes(bookmarkId)
                    ? bookmarks.filter(id => id !== bookmarkId)
                    : [...bookmarks, bookmarkId];
                localStorage.setItem('mathKnowledgeBookmarks', JSON.stringify(nextBookmarks));
                renderKnowledgeHub(formulaSearch ? formulaSearch.value : '');
                return;
            }

            if (event.target.closest('[data-close-topic]')) {
                openTopicId = null;
                renderKnowledgeHub(formulaSearch ? formulaSearch.value : '');
                return;
            }

            const practiceButton = event.target.closest('[data-practice-topic]');
            if (practiceButton) {
                try {
                    const topicId = practiceButton.dataset.practiceTopic;
                    console.log("Practice button clicked! Topic ID:", topicId);
                    
                    const topic = knowledgeTopics.find(item => item.id === topicId);
                    console.log("Found topic:", topic);
                    
                    if (topic) {
                        startTopicPractice(topic);
                    } else {
                        console.error("Topic not found in knowledgeTopics!");
                    }
                } catch (err) {
                    console.error("Error in practice button click handler:", err);
                }
                return;
            }

            const topicCard = event.target.closest('[data-topic-id]');
            if (topicCard) {
                const topicId = topicCard.dataset.topicId;
                openTopicId = openTopicId === topicId ? null : topicId;
                renderKnowledgeHub(formulaSearch ? formulaSearch.value : '');
                if (openTopicId) {
                    requestAnimationFrame(() => {
                        document.querySelector(`[data-topic-detail="${openTopicId}"]`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    });
                }
            }
        });
    }

    renderKnowledgeHub();
    animateLandingCounters();
    renderPracticeJourney();

    // =========================================================
    // QUIZ LOGIC
    // =========================================================
    
    // Quiz Configuration
    const TOTAL_QUESTIONS = 10;
    const TIME_LIMIT = 10; // 10 seconds per question

    // State Variables
    let currentQuestion = 1;
    let score = 0;
    let streak = 0;
    let highestStreak = 0;
    let correctAnswers = 0;
    let quizTimer;
    let timeLeft = TIME_LIMIT;
    let currentAnswer = 0;
    let isProcessing = false;

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

    let quizInProgress = false;
    let selectedTopic = 'Math';

    // DOM Elements for Quiz
    const mathQuestionEl = document.getElementById('math-question');
    const answerInput = document.getElementById('answer-input');
    const submitBtn = document.getElementById('submit-btn');
    const feedbackMsg = document.getElementById('feedback-msg');
    const timerBar = document.getElementById('timer-bar');
    const progressBar = document.getElementById('progress-bar');
    const questionNumberEl = document.querySelector('.question-number');
    const scoreEl = document.getElementById('current-score');
    const streakEl = document.getElementById('current-streak');
    
    const quizScreen = document.getElementById('quiz-screen');
    const resultsScreen = document.getElementById('results-screen');

    // Event Listeners for Quiz
    if(submitBtn) {
        submitBtn.addEventListener('click', checkAnswer);
    }
    if(answerInput) {
        answerInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') checkAnswer();
        });
    }
    
    const playAgainBtn = document.getElementById('play-again-btn');
    if(playAgainBtn) {
        playAgainBtn.addEventListener('click', resetQuiz);
    }
    
    const homeBtn = document.getElementById('home-btn');
    if(homeBtn) {
        homeBtn.addEventListener('click', () => {
            returnToHome();
        });
    }

    function returnToHome() {
        clearInterval(quizTimer);

        if (quizInProgress && (currentQuestion > 1 || isProcessing || score > 0)) {
            const completedQuestions = Math.min(currentQuestion, TOTAL_QUESTIONS);
            const accuracy = Math.round((correctAnswers / completedQuestions) * 100);
            saveScore(score, accuracy);
            displayLeaderboard();
        }
        quizInProgress = false;

        const quizView = document.getElementById('quiz-view');
        quizView.classList.remove('active');
        quizView.classList.remove('slide-in-up');

        const homeView = document.getElementById('home-view');
        homeView.classList.remove('hidden-view');
        void homeView.offsetWidth;
        homeView.classList.remove('fade-out');

        document.body.classList.remove('quiz-active');
        setActiveNavItem(document.querySelector('a[href="#home"]'));
    }

    function startTopicPractice(topic) {
        console.log("startTopicPractice called for:", topic.name);
        try {
            selectedTopic = topic.name;
            
            // 1. Close the formula panel
            if (document.getElementById('formulas-view')?.classList.contains('active')) {
                console.log("Closing formulas view");
                closeFormulasView();
            }
            if (document.getElementById('categories-view')?.classList.contains('active')) {
                console.log("Closing categories view");
                closeCategoriesView();
            }

            console.log("Setting active nav item");
            setActiveNavItem(document.querySelector('a[href="#practice"]'));

            // 2. Scroll smoothly to the Practice section
            console.log("Scrolling to navigation cards");
            const startSection = document.getElementById('navigation-cards');
            if (startSection) {
                startSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }

            console.log("Hiding home view");
            const homeView = document.getElementById('home-view');
            if (homeView) {
                homeView.classList.add('fade-out');
                setTimeout(() => homeView.classList.add('hidden-view'), 500);
            }

            console.log("Activating quiz view");
            const quizView = document.getElementById('quiz-view');
            if (quizView) {
                quizView.classList.add('active');
                quizView.classList.add('slide-in-up');
            }
            
            document.body.classList.add('quiz-active');
            
            // 5-9. Reset score, streak, timer, question index, and Start quiz immediately.
            console.log("Calling resetQuiz");
            resetQuiz();
        } catch (err) {
            console.error("Error in startTopicPractice:", err);
        }
    }

    function initQuiz() {
        generateQuestion();
        startTimer();
        updateProgress();
    }

    function generateQuestion() {
        isProcessing = false;
        
        // Topic Quiz Logic
        if (selectedTopic !== 'Math') { 
            if (activeQuestions.length === 0) {
                mathQuestionEl.textContent = "No questions available for this topic yet.";
                answerInput.value = '';
                answerInput.disabled = true;
                submitBtn.disabled = true;
                feedbackMsg.textContent = '';
                if(document.getElementById('countdown-text')) {
                    document.getElementById('countdown-text').textContent = '-';
                }
                if (typeof quizTimer !== 'undefined') clearInterval(quizTimer); // stop timer
                return;
            }
            
            // Get the current question from the shuffled activeQuestions
            const qIndex = (currentQuestion - 1) % activeQuestions.length;
            const q = activeQuestions[qIndex];
            
            currentAnswer = q.answer;
            mathQuestionEl.textContent = q.question;
            
            answerInput.value = '';
            answerInput.disabled = false;
            submitBtn.disabled = false;
            feedbackMsg.className = 'feedback-msg';
            feedbackMsg.textContent = '';
            setTimeout(() => answerInput.focus(), 100);
            return;
        }

        // Randomly choose addition or subtraction
        const isAddition = Math.random() > 0.5;
        // Generate random 2 to 3 digit numbers
        const num1 = Math.floor(Math.random() * 900) + 10;
        const num2 = Math.floor(Math.random() * 900) + 10;
        
        if (isAddition) {
            currentAnswer = num1 + num2;
            mathQuestionEl.textContent = `${num1} + ${num2} = ?`;
        } else {
            // Ensure positive results for simplicity by keeping larger number first
            const a = Math.max(num1, num2);
            const b = Math.min(num1, num2);
            currentAnswer = a - b;
            mathQuestionEl.textContent = `${a} - ${b} = ?`;
        }
        
        answerInput.value = '';
        answerInput.disabled = false;
        submitBtn.disabled = false;
        
        // Reset feedback
        feedbackMsg.className = 'feedback-msg';
        feedbackMsg.textContent = '';
        
        // Ensure input is focused for desktop users
        setTimeout(() => answerInput.focus(), 100);
    }

    function formatTime(seconds) {
        return Math.ceil(seconds) + 's';
    }

    function startTimer() {
        timeLeft = TIME_LIMIT;
        if(timerBar) {
            timerBar.style.width = '100%';
            timerBar.style.background = '#10b981'; // Green
        }
        
        const timerText = document.getElementById('countdown-text');
        const timerContainer = document.getElementById('quiz-countdown');
        if (timerText) timerText.textContent = formatTime(timeLeft);
        if (timerContainer) {
            timerContainer.className = 'quiz-countdown';
        }
        
        clearInterval(quizTimer);
        
        quizTimer = setInterval(() => {
            timeLeft -= 0.1; // update every 100ms for smooth animation
            const percent = (timeLeft / TIME_LIMIT) * 100;
            if(timerBar) timerBar.style.width = `${percent}%`;
            
            if (timerText && Math.ceil(timeLeft) >= 0) {
                const ceilTime = Math.ceil(timeLeft);
                timerText.textContent = formatTime(timeLeft);
                
                if (timerContainer) {
                    if (ceilTime <= 2 && ceilTime >= 0) {
                        timerContainer.className = 'quiz-countdown danger pulse';
                    } else if (ceilTime <= 3) {
                        timerContainer.className = 'quiz-countdown warning pulse';
                    } else if (ceilTime <= 5) {
                        timerContainer.className = 'quiz-countdown warning';
                    } else {
                        timerContainer.className = 'quiz-countdown';
                    }
                }
            }

            if (timeLeft <= 0) {
                clearInterval(quizTimer);
                if (timerText) timerText.textContent = "0s";
                if (timerContainer) timerContainer.className = 'quiz-countdown danger';
                handleTimeout();
            }
        }, 100);
    }

    function checkAnswer() {
        if (isProcessing || answerInput.value.trim() === '') return;
        isProcessing = true;
        clearInterval(quizTimer);
        
        const userAnswer = Number(answerInput.value);
        
        answerInput.disabled = true;
        submitBtn.disabled = true;

        if (userAnswer === currentAnswer) {
            // Correct Answer
            const timeBonus = Math.floor(timeLeft) * 10;
            score += 100 + timeBonus; 
            streak++;
            correctAnswers++;
            if (streak > highestStreak) highestStreak = streak;
            
            feedbackMsg.innerHTML = `<i class="fa-solid fa-check"></i> Correct! +${100 + timeBonus}`;
            feedbackMsg.className = 'feedback-msg correct show';
        } else {
            // Wrong Answer
            streak = 0;
            feedbackMsg.innerHTML = `<i class="fa-solid fa-xmark"></i> Wrong! Answer was ${currentAnswer}`;
            feedbackMsg.className = 'feedback-msg wrong show';
        }
        
        updateStats();
        setTimeout(nextQuestion, 1500); // Auto-next after 1.5 seconds delay
    }

    function handleTimeout() {
        isProcessing = true;
        answerInput.disabled = true;
        submitBtn.disabled = true;
        streak = 0;
        
        updateStats();
        feedbackMsg.innerHTML = `<i class="fa-solid fa-clock"></i> Time's Up! Answer was ${currentAnswer}`;
        feedbackMsg.className = 'feedback-msg wrong show';
        
        setTimeout(nextQuestion, 1000);
    }

    function nextQuestion() {
        if (!quizInProgress) return;

        currentQuestion++;
        if (currentQuestion > TOTAL_QUESTIONS) {
            endQuiz();
        } else {
            if(questionNumberEl) questionNumberEl.textContent = `Question ${currentQuestion}/${TOTAL_QUESTIONS}`;
            updateProgress();
            generateQuestion();
            startTimer();
        }
    }

    function updateStats() {
        if(scoreEl) scoreEl.textContent = score;
        if(streakEl) streakEl.textContent = streak;
    }

    function updateProgress() {
        // Progress calculates based on completed questions (so start at 0% for Q1)
        const percent = ((currentQuestion - 1) / TOTAL_QUESTIONS) * 100;
        if(progressBar) progressBar.style.width = `${percent}%`;
    }

    function endQuiz() {
        quizInProgress = false;
        clearInterval(quizTimer); // Stop the global timer completely
        // Fill the progress bar completely
        if(progressBar) progressBar.style.width = '100%';
        
        setTimeout(() => {
            if(quizScreen) quizScreen.classList.add('hidden');
            if(resultsScreen) resultsScreen.classList.remove('hidden');
            
            // Restore visibility in case opened from Leaderboard previously
            const resultsIcon = document.querySelector('.results-icon');
            if (resultsIcon) resultsIcon.style.display = '';
            const resultsH2 = document.querySelector('#results-screen h2');
            if (resultsH2) resultsH2.style.display = '';
            const resultsStats = document.querySelector('.results-stats');
            if (resultsStats) resultsStats.style.display = '';
            const playAgainBtn = document.getElementById('play-again-btn');
            if (playAgainBtn) playAgainBtn.style.display = '';
            
            const accuracy = Math.round((correctAnswers / TOTAL_QUESTIONS) * 100);
            
            // Animate score counter
            animateValue("final-score", 0, score, 1000);
            const finalAccuracyEl = document.getElementById('final-accuracy');
            if(finalAccuracyEl) finalAccuracyEl.textContent = `${accuracy}%`;
            
            const highestStreakEl = document.getElementById('highest-streak');
            if(highestStreakEl) highestStreakEl.textContent = highestStreak;
            
            saveScore(score, accuracy);
            displayLeaderboard();
        }, 500);
    }

    function animateValue(id, start, end, duration) {
        if (start === end) {
            const obj = document.getElementById(id);
            if(obj) obj.textContent = end;
            return;
        }
        let range = end - start;
        let current = start;
        let increment = end > start ? 1 : -1;
        let stepTime = Math.abs(Math.floor(duration / range));
        if(stepTime < 10) stepTime = 10;
        
        const obj = document.getElementById(id);
        if(!obj) return;
        
        const timerObj = setInterval(function() {
            current += increment * (range > 100 ? 10 : 1);
            if(increment > 0 && current > end) current = end;
            if(increment < 0 && current < end) current = end;
            obj.textContent = current;
            if (current == end) clearInterval(timerObj);
        }, stepTime);
    }

    function saveScore(newScore, accuracy) {
        let scores = JSON.parse(localStorage.getItem('numericallyInclinedLeaderboard')) || [];
        
        const now = new Date();
        const dateStr = now.toLocaleDateString();
        const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        scores.push({ 
            date: `${dateStr} ${timeStr}`,
            timestamp: now.getTime(),
            score: newScore,
            accuracy: accuracy,
            highestStreak: highestStreak,
            category: selectedTopic
        });
        
        // Sort highest first: Score -> Accuracy -> Streak -> Most Recent
        scores.sort((a, b) => {
            if (b.score !== a.score) return b.score - a.score;
            if (b.accuracy !== a.accuracy) return b.accuracy - a.accuracy;
            if (b.highestStreak !== a.highestStreak) return b.highestStreak - a.highestStreak;
            return b.timestamp - a.timestamp;
        });
        
        // Keep top 10
        scores = scores.slice(0, 10); 
        localStorage.setItem('numericallyInclinedLeaderboard', JSON.stringify(scores));
        recordPracticeJourney(accuracy);
    }

    function displayLeaderboard() {
        const list = document.getElementById('leaderboard-list');
        if(!list) return;
        
        list.innerHTML = '';
        const scores = JSON.parse(localStorage.getItem('numericallyInclinedLeaderboard')) || [];
        
        if (scores.length === 0) {
            list.innerHTML = '<li><span>No scores yet! Play your first quiz.</span></li>';
            return;
        }
        
        scores.forEach((s, i) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span style="display: flex; flex-direction: column;">
                    <span>
                        <span style="color:#64748b; margin-right:10px;">#${i+1}</span> 
                        ${s.category} | ${s.date} 
                        <span style="font-size:0.8em; color:#94a3b8; margin-left:5px;">(${s.accuracy}%)</span>
                    </span>
                    <span style="font-size:0.8em; color:#64748b; margin-left:25px; margin-top:2px;">
                        Highest Streak: ${s.highestStreak}
                    </span>
                </span> 
                <strong>${s.score} pts</strong>
            `;
            list.appendChild(li);
        });
    }

    function resetQuiz() {
        currentQuestion = 1;
        score = 0;
        streak = 0;
        highestStreak = 0;
        correctAnswers = 0;
        quizInProgress = true;
        
        if (selectedTopic !== 'Math') {
            activeQuestions = allQuestions.filter(q => q.category === selectedTopic);
            // Shuffle activeQuestions
            activeQuestions = activeQuestions.sort(() => Math.random() - 0.5);
        } else {
            activeQuestions = [];
        }
        
        if(questionNumberEl) questionNumberEl.textContent = `Question ${currentQuestion}/${TOTAL_QUESTIONS}`;
        updateStats();
        updateProgress();
        
        if(resultsScreen) resultsScreen.classList.add('hidden');
        if(quizScreen) quizScreen.classList.remove('hidden');
        
        initQuiz();
    }

    // NAV PRACTICE BUTTON LOGIC
    const practiceNavBtn = document.querySelector('a[href="#practice"]');
    if (practiceNavBtn) {
        practiceNavBtn.addEventListener('click', (e) => {
            e.preventDefault();
            setActiveNavItem(practiceNavBtn);

            if (document.getElementById('formulas-view')?.classList.contains('active')) {
                closeFormulasView();
                closeCategoriesView();
            } else if (document.getElementById('categories-view')?.classList.contains('active')) {
                closeCategoriesView();
            }
            
            const isQuizActive = document.body.classList.contains('quiz-active');
            
            if (isQuizActive) {
                returnToHome();
                setActiveNavItem(practiceNavBtn);
                
                // Allow display to update before scrolling
                setTimeout(() => {
                    const startSection = document.getElementById('navigation-cards');
                    if (startSection) {
                        startSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 50);
            } else {
                // Just scroll smoothly
                const startSection = document.getElementById('navigation-cards');
                if (startSection) {
                    startSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    }

    const leaderboardNavBtn = document.querySelector('a[href="#card-leaderboard"]');
    if (leaderboardNavBtn) {
        leaderboardNavBtn.addEventListener('click', (e) => {
            e.preventDefault();

            if (document.getElementById('formulas-view')?.classList.contains('active')) {
                closeFormulasView();
                closeCategoriesView();
            } else if (document.getElementById('categories-view')?.classList.contains('active')) {
                closeCategoriesView();
            }
            setActiveNavItem(leaderboardNavBtn);

            const leaderboardCard = document.getElementById('card-leaderboard');
            if (leaderboardCard) {
                leaderboardCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    const homeNavBtn = document.querySelector('a[href="#home"]');
    if (homeNavBtn) {
        homeNavBtn.addEventListener('click', (e) => {
            e.preventDefault();

            if (document.getElementById('formulas-view')?.classList.contains('active')) {
                closeFormulasView();
                closeCategoriesView();
                setActiveNavItem(homeNavBtn);
            } else if (document.getElementById('categories-view')?.classList.contains('active')) {
                closeCategoriesView();
                setActiveNavItem(homeNavBtn);
            } else if (document.body.classList.contains('quiz-active')) {
                returnToHome();
            } else {
                setActiveNavItem(homeNavBtn);
                document.getElementById('home-view').scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    const categoriesNavBtn = document.querySelector('a[href="#categories"]');
    if (categoriesNavBtn) {
        categoriesNavBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (document.body.classList.contains('quiz-active')) returnToHome();
            if (document.getElementById('formulas-view')?.classList.contains('active')) closeFormulasView();
            openCategoriesView();
        });
    }
});
