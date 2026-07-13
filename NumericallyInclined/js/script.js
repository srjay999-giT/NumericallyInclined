document.addEventListener('DOMContentLoaded', () => {
    // =========================================================
    // QUIZ MODE SETTINGS
    // =========================================================
    const settingsModal = document.getElementById('settings-modal');
    const btnOpenSettings = document.getElementById('card-settings');
    const btnCloseSettings = document.getElementById('close-settings-btn');
    const btnSaveSettings = document.getElementById('save-settings-btn');
    const radioModes = document.querySelectorAll('input[name="quizMode"]');

    window.appQuizMode = localStorage.getItem('quizMode') || 'adaptive';
    if(radioModes.length > 0) {
        radioModes.forEach(r => {
            if (r.value === window.appQuizMode) r.checked = true;
        });
    }

    if (btnOpenSettings) {
        btnOpenSettings.addEventListener('click', (e) => {
            e.preventDefault();
            if(settingsModal) settingsModal.setAttribute('aria-hidden', 'false');
        });
    }
    if (btnCloseSettings) {
        btnCloseSettings.addEventListener('click', () => {
            if(settingsModal) settingsModal.setAttribute('aria-hidden', 'true');
        });
    }
    if (btnSaveSettings) {
        btnSaveSettings.addEventListener('click', () => {
            const selected = document.querySelector('input[name="quizMode"]:checked');
            if(selected) {
                window.appQuizMode = selected.value;
                localStorage.setItem('quizMode', selected.value);
            }
            if(settingsModal) settingsModal.setAttribute('aria-hidden', 'true');
            showToast("Settings saved successfully!");
        });
    }

    // =========================================================
    // HOME VIEW LOGIC (Navigation & Ripples)
    // =========================================================
    const cardItems = document.querySelectorAll('.card-item');
    
    function selectNumberTile(tile) {
        const grid = tile.closest('.table-selector-grid');
        if (!grid) return;

        grid.querySelectorAll('.number-tile').forEach(item => {
            const isSelected = item === tile;
            item.classList.toggle('is-selected', isSelected);
            item.setAttribute('aria-pressed', String(isSelected));
        });
    }

    function createNumberTile(number, onSelect) {
        const tile = document.createElement('button');
        tile.type = 'button';
        tile.className = 'number-tile';
        tile.dataset.number = String(number);
        tile.textContent = number;
        tile.setAttribute('aria-pressed', 'false');
        tile.addEventListener('click', () => {
            selectNumberTile(tile);
            onSelect(number);
        });
        return tile;
    }

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

    // =========================================================
    // TABLES VIEW LOGIC (Navigation)
    // =========================================================
    
    function openTablesView() {
        const tablesView = document.getElementById('tables-view');
        const categoriesView = document.getElementById('categories-view');
        if (!tablesView || !categoriesView) return;

        tablesView.classList.add('active');
        tablesView.setAttribute('aria-hidden', 'false');
        categoriesView.classList.remove('active');
        categoriesView.setAttribute('aria-hidden', 'true');
        tablesView.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function closeTablesView() {
        const tablesView = document.getElementById('tables-view');
        if (!tablesView) return;

        tablesView.classList.remove('active');
        tablesView.setAttribute('aria-hidden', 'true');
    }

    const multiplicationTablesBtn = document.getElementById('multiplication-tables-btn');
    if (multiplicationTablesBtn) {
        multiplicationTablesBtn.addEventListener('click', openTablesView);
    }

    const tablesBackBtn = document.getElementById('tables-back-btn');
    if (tablesBackBtn) {
        tablesBackBtn.addEventListener('click', () => {
            closeTablesView();
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
    let totalQuestionsAttempted = 0;
    let quizTimer;
    let nextQuestionTimeout;
    let timeLeft = TIME_LIMIT;
    let currentAnswer = 0;
    let isProcessing = false;
    const formulaEngine = new FormulaGeneratorEngine();
    let currentGeneratedQuestion = null;

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
        clearTimeout(nextQuestionTimeout);

        if (quizInProgress && (currentQuestion > 1 || isProcessing || score > 0)) {
            const completedQuestions = Math.min(currentQuestion, TOTAL_QUESTIONS);
            const accuracy = Math.round((correctAnswers / completedQuestions) * 100);
            saveScore(score, accuracy);
            displayLeaderboard();
        }
        quizInProgress = false;
        window.isTablePracticeMode = false;
        window.isSquaresPracticeMode = false;
        window.isCubesPracticeMode = false;
        window.isSquareRootsPracticeMode = false;
        window.isCubeRootsPracticeMode = false;

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

        if (window.isTablePracticeMode) {
            let tableNum = window.activeTableNumber;
            let multiplier;
            const diff = formulaEngine.getDifficulty();
            
            if (window.activeTableNumber === null) {
                // Hard / Mixed
                tableNum = Math.floor(Math.random() * 30) + 1;
                multiplier = Math.floor(Math.random() * 20) + 1;
            } else {
                if (diff === 'Easy') {
                    multiplier = Math.floor(Math.random() * 10) + 1;
                } else if (diff === 'Medium') {
                    multiplier = Math.floor(Math.random() * 20) + 1;
                } else {
                    multiplier = Math.floor(Math.random() * 90) + 11; // 11 to 100
                }
            }
            
            let attempts = 0;
            let questionText = `${tableNum} × ${multiplier} = ?`;
            
            while (formulaEngine.history.has(questionText) && attempts < 50) {
                if (window.activeTableNumber === null) tableNum = Math.floor(Math.random() * 30) + 1;
                multiplier = diff === 'Easy' ? Math.floor(Math.random() * 10) + 1 :
                             diff === 'Medium' ? Math.floor(Math.random() * 20) + 1 :
                             Math.floor(Math.random() * 90) + 11;
                questionText = `${tableNum} × ${multiplier} = ?`;
                attempts++;
            }
            formulaEngine.history.add(questionText);
            
            currentGeneratedQuestion = {
                question: questionText,
                answer: tableNum * multiplier
            };
        } else if (window.isSquaresPracticeMode) {
            currentGeneratedQuestion = window.generateSquareQuestion();
        } else if (window.isCubesPracticeMode) {
            currentGeneratedQuestion = window.generateCubeQuestion();
        } else if (window.isSquareRootsPracticeMode) {
            currentGeneratedQuestion = window.generateSquareRootQuestion();
        } else if (window.isCubeRootsPracticeMode) {
            currentGeneratedQuestion = window.generateCubeRootQuestion();
        } else {
            currentGeneratedQuestion = formulaEngine.nextQuestion(selectedTopic);
        }
        
        // --- QUIZ MODE ENGINE ---
        let useMCQ = false;
        let mode = window.appQuizMode || 'adaptive';
        
        if (mode === 'mcq') {
            useMCQ = true;
        } else if (mode === 'typing') {
            useMCQ = false;
        } else if (mode === 'adaptive') {
            let diff = formulaEngine.getDifficulty();
            let baseMCQProb = 0.5;
            if (diff === 'Easy') baseMCQProb = 1.0;
            else if (diff === 'Hard') baseMCQProb = 0.0;
            
            let totalQs = totalQuestionsAttempted || 0;
            let recentAcc = totalQs > 0 ? (correctAnswers / totalQs) : 1; 
            
            if (recentAcc > 0.9 && totalQs >= 3) {
                baseMCQProb -= 0.5; 
            } else if (recentAcc < 0.5 && totalQs >= 3) {
                baseMCQProb += 0.5; 
            }
            baseMCQProb = Math.max(0, Math.min(1, baseMCQProb));
            useMCQ = Math.random() < baseMCQProb;
            
            let styleString = useMCQ ? 'mcq' : 'typing';
            if (window.lastAdaptiveStyle !== styleString) {
                if (styleString === 'typing' && totalQs > 0) {
                    showToast("🧠 Great progress! Switching to Type Answer.");
                } else if (styleString === 'mcq' && totalQs > 0) {
                    showToast("💡 Let's build confidence. Switching to MCQs.");
                }
                window.lastAdaptiveStyle = styleString;
            }
        }
        
        currentGeneratedQuestion.isMCQ = useMCQ;
        
        if (useMCQ && (!currentGeneratedQuestion.options || currentGeneratedQuestion.options.length < 4)) {
            let ans = currentGeneratedQuestion.answer;
            let opts = new Set([ans]);
            let isFloat = !Number.isInteger(ans);
            let attempts = 0;
            while(opts.size < 4 && attempts < 50) {
                let offset = isFloat ? (Math.random() * 2).toFixed(2) : Math.floor(Math.random() * 5) + 1;
                let val1 = isFloat ? parseFloat((ans + Number(offset)).toFixed(2)) : ans + offset;
                let val2 = isFloat ? parseFloat((ans - Number(offset)).toFixed(2)) : ans - offset;
                if (Math.random() > 0.5) opts.add(val1);
                else opts.add(val2);
                attempts++;
            }
            while(opts.size < 4) opts.add(isFloat ? ans + Math.random() : ans + Math.floor(Math.random()*100)+1);
            currentGeneratedQuestion.options = Array.from(opts).sort(() => Math.random() - 0.5);
        }
        // ------------------------

        currentAnswer = currentGeneratedQuestion.answer;
        mathQuestionEl.textContent = currentGeneratedQuestion.question;
        
        const mcqChoices = document.getElementById('mcq-choices');
        
        if (currentGeneratedQuestion.isMCQ) {
            answerInput.style.display = 'none';
            submitBtn.style.display = 'none';
            mcqChoices.classList.remove('hidden');
            
            mcqChoices.innerHTML = '';
            currentGeneratedQuestion.options.forEach(opt => {
                const btn = document.createElement('button');
                btn.textContent = opt;
                btn.onclick = () => {
                    if (isProcessing) return;
                    if (opt === currentAnswer) {
                        btn.classList.add('correct');
                    } else {
                        btn.classList.add('wrong');
                        // Highlight correct
                        Array.from(mcqChoices.children).forEach(c => {
                            if (Number(c.textContent) === currentAnswer) c.classList.add('correct');
                        });
                    }
                    checkAnswer(opt);
                };
                mcqChoices.appendChild(btn);
            });
        } else {
            answerInput.style.display = '';
            submitBtn.style.display = '';
            if (mcqChoices) mcqChoices.classList.add('hidden');
            
            answerInput.value = '';
            answerInput.disabled = false;
            submitBtn.disabled = false;
            setTimeout(() => answerInput.focus(), 100);
        }
        
        // Reset feedback
        feedbackMsg.className = 'feedback-msg';
        feedbackMsg.textContent = '';
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

    function checkAnswer(overrideAnswer = null) {
        if (overrideAnswer === null && (isProcessing || answerInput.value.trim() === '')) return;
        if (overrideAnswer !== null && isProcessing) return;
        isProcessing = true;
        clearInterval(quizTimer);
        
        const userAnswer = overrideAnswer !== null ? overrideAnswer : Number(answerInput.value);
        
        answerInput.disabled = true;
        submitBtn.disabled = true;

        const isCorrect = Math.abs(userAnswer - currentAnswer) < 0.000001;
        totalQuestionsAttempted++;
        formulaEngine.recordAnswer(isCorrect);

        if (isCorrect) {
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
        
        if (window.checkAchievements) window.checkAchievements(streak, score, correctAnswers);
        
        updateStats();
        scheduleNextQuestion(1500); // Auto-next after 1.5 seconds delay
    }

    function handleTimeout() {
        isProcessing = true;
        totalQuestionsAttempted++;
        formulaEngine.recordAnswer(false);
        answerInput.disabled = true;
        submitBtn.disabled = true;
        streak = 0;
        
        if (window.checkAchievements) window.checkAchievements(streak, score, correctAnswers);
        
        updateStats();
        feedbackMsg.innerHTML = `<i class="fa-solid fa-clock"></i> Time's Up! Answer was ${currentAnswer}`;
        feedbackMsg.className = 'feedback-msg wrong show';
        
        scheduleNextQuestion(1000);
    }

    function scheduleNextQuestion(delay) {
        clearTimeout(nextQuestionTimeout);
        nextQuestionTimeout = setTimeout(() => {
            nextQuestionTimeout = undefined;
            nextQuestion();
        }, delay);
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
        clearTimeout(nextQuestionTimeout);
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
        clearInterval(quizTimer);
        clearTimeout(nextQuestionTimeout);
        currentQuestion = 1;
        score = 0;
        streak = 0;
        highestStreak = 0;
        correctAnswers = 0;
        totalQuestionsAttempted = 0;
        quizInProgress = true;
        
        formulaEngine.startSession(selectedTopic);
        
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

    // =========================================================
    // MULTIPLICATION TABLES MODULE LOGIC
    // =========================================================
    
    window.isTablePracticeMode = false;
    window.activeTableNumber = null;

    const tableSelectorGrid = document.getElementById('table-selector-grid');
    const singleTableView = document.getElementById('single-table-view');
    const tableSelector = document.getElementById('table-selector');
    const singleTableContent = document.getElementById('single-table-content');
    const singleTableTitle = document.getElementById('single-table-title');

    if (tableSelectorGrid) {
        for (let i = 1; i <= 30; i++) {
            tableSelectorGrid.appendChild(createNumberTile(i, showTable));
        }
    }

    function showTable(number) {
        window.activeTableNumber = number;
        if (tableSelector) tableSelector.classList.add('hidden');
        if (singleTableView) {
            singleTableView.classList.remove('hidden');
            singleTableView.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        if (singleTableTitle) singleTableTitle.textContent = `Table of ${number}`;
        
        let html = '';
        for (let i = 1; i <= 20; i++) {
            html += `<div class="table-row">
                        <span>${number} × ${i}</span>
                        <span class="table-row-ans">= ${number * i}</span>
                     </div>`;
        }
        if (singleTableContent) singleTableContent.innerHTML = html;
    }

    const singleTableBackBtn = document.getElementById('single-table-back-btn');
    if (singleTableBackBtn) {
        singleTableBackBtn.addEventListener('click', () => {
            if (singleTableView) singleTableView.classList.add('hidden');
            if (tableSelector) tableSelector.classList.remove('hidden');
            window.activeTableNumber = null;
        });
    }

    const tablesViewBtn = document.getElementById('tables-view-btn');
    if (tablesViewBtn) {
        tablesViewBtn.addEventListener('click', () => {
            if (singleTableView) singleTableView.classList.add('hidden');
            if (tableSelector) {
                tableSelector.classList.remove('hidden');
                tableSelector.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    function startTablePractice(specificTable = null) {
        window.isTablePracticeMode = true;
        window.activeTableNumber = specificTable; 
        selectedTopic = specificTable ? `Tables - Table ${specificTable}` : `Tables - Mixed`;
        
        const homeView = document.getElementById('home-view');
        if(homeView) homeView.classList.add('hidden-view');
        const categoriesView = document.getElementById('categories-view');
        if(categoriesView) {
            categoriesView.classList.remove('active');
            categoriesView.setAttribute('aria-hidden', 'true');
        }
        const tablesView = document.getElementById('tables-view');
        if (tablesView) {
            tablesView.classList.remove('active');
            tablesView.setAttribute('aria-hidden', 'true');
        }

        const quizView = document.getElementById('quiz-view');
        if(quizView) {
            quizView.classList.add('active');
            quizView.classList.add('slide-in-up');
        }
        document.body.classList.add('quiz-active');
        
        resetQuiz();
    }

    const tablesPracticeBtn = document.getElementById('tables-practice-btn');
    if (tablesPracticeBtn) {
        tablesPracticeBtn.addEventListener('click', () => startTablePractice(null));
    }

    const startTablePracticeBtn = document.getElementById('start-table-practice-btn');
    if (startTablePracticeBtn) {
        startTablePracticeBtn.addEventListener('click', () => {
            if (window.activeTableNumber) {
                startTablePractice(window.activeTableNumber);
            }
        });
    }

    // =========================================================
    // SQUARES MODULE LOGIC
    // =========================================================
    
    window.isSquaresPracticeMode = false;

    const squaresView = document.getElementById('squares-view');
    const squaresBtn = document.getElementById('squares-btn');
    const squaresBackBtn = document.getElementById('squares-back-btn');
    const squaresSelector = document.getElementById('squares-selector');
    const squaresSelectorGrid = document.getElementById('squares-selector-grid');
    const singleSquareView = document.getElementById('single-square-view');
    const singleSquareTitle = document.getElementById('single-square-title');
    const singleSquareEquation = document.getElementById('single-square-equation');
    const singleSquareTrick = document.getElementById('single-square-trick');
    
    let currentViewSquare = null;

    if (squaresBtn) {
        squaresBtn.addEventListener('click', () => {
            const categoriesView = document.getElementById('categories-view');
            if(categoriesView) {
                categoriesView.classList.remove('active');
                categoriesView.setAttribute('aria-hidden', 'true');
            }
            if(squaresView) {
                squaresView.classList.add('active');
                squaresView.setAttribute('aria-hidden', 'false');
                squaresView.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }

    if (squaresBackBtn) {
        squaresBackBtn.addEventListener('click', () => {
            if(squaresView) {
                squaresView.classList.remove('active');
                squaresView.setAttribute('aria-hidden', 'true');
            }
            const categoriesView = document.getElementById('categories-view');
            if(categoriesView) {
                categoriesView.classList.add('active');
                categoriesView.setAttribute('aria-hidden', 'false');
            }
        });
    }

    if (squaresSelectorGrid) {
        for (let i = 1; i <= 100; i++) {
            squaresSelectorGrid.appendChild(createNumberTile(i, showSquare));
        }
    }

    function showSquare(number) {
        if (number < 1 || number > 100) return;
        currentViewSquare = number;
        
        if(squaresSelector) squaresSelector.classList.add('hidden');
        if(singleSquareView) {
            singleSquareView.classList.remove('hidden');
            singleSquareView.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        
        if (singleSquareTitle) singleSquareTitle.textContent = `Square of ${number}`;
        if (singleSquareEquation) singleSquareEquation.textContent = `${number}² = ${number * number}`;
        
        if (singleSquareTrick) {
            let trick = '';
            if (number % 10 === 5) {
                let n = Math.floor(number / 10);
                trick = `Memory Trick: Ends in 5. Multiply ${n} × ${n+1} = ${n*(n+1)}, and append 25. Result: ${n*(n+1)}25.`;
            } else if (number === 10 || number === 100) {
                trick = `Memory Trick: Just double the zeros!`;
            }
            if (trick) {
                singleSquareTrick.textContent = trick;
                singleSquareTrick.classList.remove('hidden');
            } else {
                singleSquareTrick.classList.add('hidden');
            }
        }
    }

    const singleSquareBackBtn = document.getElementById('single-square-back-btn');
    if (singleSquareBackBtn) {
        singleSquareBackBtn.addEventListener('click', () => {
            if(singleSquareView) singleSquareView.classList.add('hidden');
            if(squaresSelector) squaresSelector.classList.remove('hidden');
        });
    }
    
    document.getElementById('squares-view-btn')?.addEventListener('click', () => {
        if(singleSquareView) singleSquareView.classList.add('hidden');
        if(squaresSelector) {
            squaresSelector.classList.remove('hidden');
            squaresSelector.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });

    document.getElementById('square-prev-btn')?.addEventListener('click', () => {
        if (currentViewSquare > 1) showSquare(currentViewSquare - 1);
    });
    
    document.getElementById('square-next-btn')?.addEventListener('click', () => {
        if (currentViewSquare < 100) showSquare(currentViewSquare + 1);
    });
    
    document.getElementById('square-copy-btn')?.addEventListener('click', () => {
        if (currentViewSquare) {
            navigator.clipboard.writeText(`${currentViewSquare}² = ${currentViewSquare * currentViewSquare}`);
            showToast("Copied to clipboard!");
        }
    });

    const squareSearch = document.getElementById('squares-search');
    if (squareSearch) {
        squareSearch.addEventListener('input', (e) => {
            const val = parseInt(e.target.value);
            if (!isNaN(val) && val >= 1 && val <= 100) {
                showSquare(val);
                e.target.value = ''; 
            }
        });
    }

    // Achievements System
    window.unlockedBadges = JSON.parse(localStorage.getItem('mathBadges')) || [];
    function showToast(message) {
        const container = document.getElementById('toast-container');
        if(!container) return;
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `<i data-lucide="star" aria-hidden="true"></i> <span>${message}</span>`;
        container.appendChild(toast);
        if (window.lucide) window.lucide.createIcons();
        setTimeout(() => {
            toast.style.animation = 'slideOutRight 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
    
    function unlockBadge(badgeId, badgeName) {
        if (!window.unlockedBadges.includes(badgeId)) {
            window.unlockedBadges.push(badgeId);
            localStorage.setItem('mathBadges', JSON.stringify(window.unlockedBadges));
            showToast(`Unlocked: ${badgeName}!`);
        }
    }
    
    window.checkAchievements = function(streak, score, correctAnswers) {
        if (streak === 10) unlockBadge('streak_10', '🔥 10 Correct in a Row');
        if (score > 1000) unlockBadge('score_1000', '⚡ Perfect Score'); 
        // More specific achievements logic can be added here
        
        if (window.isSquaresPracticeMode) {
            const diff = formulaEngine.getDifficulty();
            if (correctAnswers >= 5) {
                if (diff === 'Easy') unlockBadge('squares_20', '⭐ Learned Squares 1–20');
                if (diff === 'Medium') unlockBadge('squares_50', '⭐⭐ Learned Squares 1–50');
                if (diff === 'Hard') unlockBadge('squares_100', '⭐⭐⭐ Learned Squares 1–100');
            }
        }
        
        if (window.isCubesPracticeMode) {
            const diff = formulaEngine.getDifficulty();
            if (correctAnswers >= 5) {
                if (diff === 'Easy') unlockBadge('cubes_20', '⭐ Learned Cubes 1–20');
                if (diff === 'Medium') unlockBadge('cubes_50', '⭐⭐ Learned Cubes 1–50');
                if (diff === 'Hard') unlockBadge('cubes_100', '⭐⭐⭐ Learned Cubes 1–100');
            }
        }
        
        if (window.isSquareRootsPracticeMode) {
            const diff = formulaEngine.getDifficulty();
            if (correctAnswers >= 5) {
                if (diff === 'Easy') unlockBadge('squareroots_20', '⭐ Learned Square Roots 1–20');
                if (diff === 'Medium') unlockBadge('squareroots_50', '⭐⭐ Learned Square Roots 1–50');
                if (diff === 'Hard') unlockBadge('squareroots_100', '⭐⭐⭐ Learned Square Roots 1–100');
            }
        }
        
        if (window.isCubeRootsPracticeMode) {
            const diff = formulaEngine.getDifficulty();
            if (correctAnswers >= 5) {
                if (diff === 'Easy') unlockBadge('cuberoots_20', '⭐ Learned Cube Roots 1–20');
                if (diff === 'Medium') unlockBadge('cuberoots_50', '⭐⭐ Learned Cube Roots 1–50');
                if (diff === 'Hard') unlockBadge('cuberoots_100', '⭐⭐⭐ Learned Cube Roots 1–100');
            }
        }
    };

    function startSquarePractice() {
        window.isSquaresPracticeMode = true;
        selectedTopic = 'Squares';
        
        const viewsToHide = ['home-view', 'categories-view', 'squares-view'];
        viewsToHide.forEach(id => {
            const v = document.getElementById(id);
            if(v) {
                v.classList.remove('active');
                if(id==='home-view') v.classList.add('hidden-view');
                else v.setAttribute('aria-hidden', 'true');
            }
        });

        const quizView = document.getElementById('quiz-view');
        if(quizView) {
            quizView.classList.add('active');
            quizView.classList.add('slide-in-up');
        }
        document.body.classList.add('quiz-active');
        
        resetQuiz();
    }

    document.getElementById('squares-practice-btn')?.addEventListener('click', startSquarePractice);
    document.getElementById('start-square-practice-btn')?.addEventListener('click', startSquarePractice);

    window.generateSquareQuestion = function() {
        const diff = formulaEngine.getDifficulty();
        let min = 1, max = 100;
        
        if (diff === 'Easy') { min = 1; max = 20; }
        else if (diff === 'Medium') { min = 21; max = 50; }
        else if (diff === 'Hard') { min = 51; max = 100; }
        
        let attempts = 0;
        let num, questionText, answer, type, isMCQ = false, options = [];
        
        while (attempts < 50) {
            num = Math.floor(Math.random() * (max - min + 1)) + min;
            type = Math.floor(Math.random() * 4) + 1; // 1 to 4
            
            if (type === 1) {
                questionText = `${num}² = ?`;
                answer = num * num;
            } else if (type === 2) {
                questionText = `Which number has square ${num * num}?`;
                answer = num;
            } else if (type === 3) {
                questionText = `${num} × ${num} = ?`;
                answer = num * num;
            } else if (type === 4) {
                questionText = `${num}² = ?`;
                answer = num * num;
                isMCQ = true;
                let opts = new Set([answer]);
                while(opts.size < 4) {
                    let offset = (Math.floor(Math.random() * 5) + 1) * 10;
                    if(Math.random() > 0.5) opts.add(answer + offset);
                    else if (answer - offset > 0) opts.add(answer - offset);
                    else opts.add(answer + offset + 5);
                }
                options = Array.from(opts).sort(() => Math.random() - 0.5);
            }
            
            if (!formulaEngine.history.has(questionText)) {
                formulaEngine.history.add(questionText);
                break;
            }
            attempts++;
        }
        
        return {
            question: questionText,
            answer: answer,
            isMCQ: isMCQ,
            options: options
        };
    };

    // =========================================================
    // CUBES MODULE LOGIC
    // =========================================================

    const cubesView = document.getElementById('cubes-view');
    const cubesBtn = document.getElementById('cubes-btn');
    const cubesBackBtn = document.getElementById('cubes-back-btn');
    const cubesSelector = document.getElementById('cubes-selector');
    const cubesSelectorGrid = document.getElementById('cubes-selector-grid');
    const singleCubeView = document.getElementById('single-cube-view');
    const singleCubeTitle = document.getElementById('single-cube-title');
    const singleCubeEquation = document.getElementById('single-cube-equation');
    const singleCubeTrick = document.getElementById('single-cube-trick');
    
    let currentViewCube = null;

    if (cubesBtn) {
        cubesBtn.addEventListener('click', () => {
            const categoriesView = document.getElementById('categories-view');
            if(categoriesView) {
                categoriesView.classList.remove('active');
                categoriesView.setAttribute('aria-hidden', 'true');
            }
            if(cubesView) {
                cubesView.classList.add('active');
                cubesView.setAttribute('aria-hidden', 'false');
                cubesView.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }

    if (cubesBackBtn) {
        cubesBackBtn.addEventListener('click', () => {
            if(cubesView) {
                cubesView.classList.remove('active');
                cubesView.setAttribute('aria-hidden', 'true');
            }
            const categoriesView = document.getElementById('categories-view');
            if(categoriesView) {
                categoriesView.classList.add('active');
                categoriesView.setAttribute('aria-hidden', 'false');
            }
        });
    }

    if (cubesSelectorGrid) {
        for (let i = 1; i <= 100; i++) {
            cubesSelectorGrid.appendChild(createNumberTile(i, showCube));
        }
    }

    function showCube(number) {
        if (number < 1 || number > 100) return;
        currentViewCube = number;
        
        if(cubesSelector) cubesSelector.classList.add('hidden');
        if(singleCubeView) {
            singleCubeView.classList.remove('hidden');
            singleCubeView.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        
        if (singleCubeTitle) singleCubeTitle.textContent = `Cube of ${number}`;
        if (singleCubeEquation) singleCubeEquation.textContent = `${number}³ = ${number * number * number}`;
        
        if (singleCubeTrick) {
            let trick = '';
            if (number === 10 || number === 100) {
                trick = `Memory Trick: Just triple the zeros!`;
            }
            if (trick) {
                singleCubeTrick.textContent = trick;
                singleCubeTrick.classList.remove('hidden');
            } else {
                singleCubeTrick.classList.add('hidden');
            }
        }
    }

    const singleCubeBackBtn = document.getElementById('single-cube-back-btn');
    if (singleCubeBackBtn) {
        singleCubeBackBtn.addEventListener('click', () => {
            if(singleCubeView) singleCubeView.classList.add('hidden');
            if(cubesSelector) cubesSelector.classList.remove('hidden');
        });
    }
    
    document.getElementById('cubes-view-btn')?.addEventListener('click', () => {
        if(singleCubeView) singleCubeView.classList.add('hidden');
        if(cubesSelector) {
            cubesSelector.classList.remove('hidden');
            cubesSelector.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });

    document.getElementById('cube-prev-btn')?.addEventListener('click', () => {
        if (currentViewCube > 1) showCube(currentViewCube - 1);
    });
    
    document.getElementById('cube-next-btn')?.addEventListener('click', () => {
        if (currentViewCube < 100) showCube(currentViewCube + 1);
    });
    
    document.getElementById('cube-copy-btn')?.addEventListener('click', () => {
        if (currentViewCube) {
            navigator.clipboard.writeText(`${currentViewCube}³ = ${currentViewCube * currentViewCube * currentViewCube}`);
            showToast("Copied to clipboard!");
        }
    });

    const cubeSearch = document.getElementById('cubes-search');
    if (cubeSearch) {
        cubeSearch.addEventListener('input', (e) => {
            const val = parseInt(e.target.value);
            if (!isNaN(val) && val >= 1 && val <= 100) {
                showCube(val);
                e.target.value = ''; 
            }
        });
    }

    function startCubePractice() {
        window.isCubesPracticeMode = true;
        selectedTopic = 'Cubes';
        
        const viewsToHide = ['home-view', 'categories-view', 'cubes-view', 'squares-view'];
        viewsToHide.forEach(id => {
            const v = document.getElementById(id);
            if(v) {
                v.classList.remove('active');
                if(id==='home-view') v.classList.add('hidden-view');
                else v.setAttribute('aria-hidden', 'true');
            }
        });

        const quizView = document.getElementById('quiz-view');
        if(quizView) {
            quizView.classList.add('active');
            quizView.classList.add('slide-in-up');
        }
        document.body.classList.add('quiz-active');
        
        resetQuiz();
    }

    document.getElementById('cubes-practice-btn')?.addEventListener('click', startCubePractice);
    document.getElementById('start-cube-practice-btn')?.addEventListener('click', startCubePractice);

    window.generateCubeQuestion = function() {
        const diff = formulaEngine.getDifficulty();
        let min = 1, max = 100;
        
        if (diff === 'Easy') { min = 1; max = 20; }
        else if (diff === 'Medium') { min = 21; max = 50; }
        else if (diff === 'Hard') { min = 51; max = 100; }
        
        let attempts = 0;
        let num, questionText, answer, type, isMCQ = false, options = [];
        
        while (attempts < 50) {
            num = Math.floor(Math.random() * (max - min + 1)) + min;
            type = Math.floor(Math.random() * 3) + 1; // 1 to 3 types for cubes based on prompt examples
            
            if (type === 1) {
                questionText = `What is ${num}³ ?`;
                answer = num * num * num;
                isMCQ = true;
            } else if (type === 2) {
                questionText = `Which number has cube ${num * num * num}?`;
                answer = num;
                isMCQ = true;
            } else if (type === 3) {
                questionText = `${num * num * num} is the cube of?`;
                answer = num;
                isMCQ = true;
            }
            
            if (isMCQ) {
                let opts = new Set([answer]);
                while(opts.size < 4) {
                    let offset = (Math.floor(Math.random() * 5) + 1);
                    // For answers that are the cube value (type 1), offset should be large.
                    if (type === 1) {
                        offset = offset * num * num; // rough approximation offset
                    }
                    if(Math.random() > 0.5) opts.add(answer + offset);
                    else if (answer - offset > 0) opts.add(answer - offset);
                    else opts.add(answer + offset + 5);
                }
                options = Array.from(opts).sort(() => Math.random() - 0.5);
            }
            
            if (!formulaEngine.history.has(questionText)) {
                formulaEngine.history.add(questionText);
                break;
            }
            attempts++;
        }
        
        return {
            question: questionText,
            answer: answer,
            isMCQ: isMCQ,
            options: options
        };
    };

    // =========================================================
    // SQUARE ROOTS MODULE LOGIC
    // =========================================================

    const squareRootsView = document.getElementById('square-roots-view');
    const squareRootsBtn = document.getElementById('square-roots-btn');
    const squareRootsBackBtn = document.getElementById('square-roots-back-btn');
    const squareRootsSelector = document.getElementById('square-roots-selector');
    const squareRootsSelectorGrid = document.getElementById('square-roots-selector-grid');
    const singleSquareRootView = document.getElementById('single-square-root-view');
    const singleSquareRootTitle = document.getElementById('single-square-root-title');
    const singleSquareRootEquation = document.getElementById('single-square-root-equation');
    
    let currentViewSquareRoot = null;
    
    function formatRoot(num) {
        const root = Math.sqrt(num);
        return Number.isInteger(root) ? root : parseFloat(root.toFixed(2));
    }

    if (squareRootsBtn) {
        squareRootsBtn.addEventListener('click', () => {
            const categoriesView = document.getElementById('categories-view');
            if(categoriesView) {
                categoriesView.classList.remove('active');
                categoriesView.setAttribute('aria-hidden', 'true');
            }
            if(squareRootsView) {
                squareRootsView.classList.add('active');
                squareRootsView.setAttribute('aria-hidden', 'false');
                squareRootsView.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }

    if (squareRootsBackBtn) {
        squareRootsBackBtn.addEventListener('click', () => {
            if(squareRootsView) {
                squareRootsView.classList.remove('active');
                squareRootsView.setAttribute('aria-hidden', 'true');
            }
            const categoriesView = document.getElementById('categories-view');
            if(categoriesView) {
                categoriesView.classList.add('active');
                categoriesView.setAttribute('aria-hidden', 'false');
            }
        });
    }

    if (squareRootsSelectorGrid) {
        for (let i = 1; i <= 100; i++) {
            squareRootsSelectorGrid.appendChild(createNumberTile(i, showSquareRoot));
        }
    }

    function showSquareRoot(number) {
        if (number < 1 || number > 100) return;
        currentViewSquareRoot = number;
        
        if(squareRootsSelector) squareRootsSelector.classList.add('hidden');
        if(singleSquareRootView) {
            singleSquareRootView.classList.remove('hidden');
            singleSquareRootView.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        
        if (singleSquareRootTitle) singleSquareRootTitle.textContent = `Square Root of ${number}`;
        if (singleSquareRootEquation) singleSquareRootEquation.textContent = `√${number} = ${formatRoot(number)}`;
    }

    const singleSquareRootBackBtn = document.getElementById('single-square-root-back-btn');
    if (singleSquareRootBackBtn) {
        singleSquareRootBackBtn.addEventListener('click', () => {
            if(singleSquareRootView) singleSquareRootView.classList.add('hidden');
            if(squareRootsSelector) squareRootsSelector.classList.remove('hidden');
        });
    }
    
    document.getElementById('square-roots-view-btn')?.addEventListener('click', () => {
        if(singleSquareRootView) singleSquareRootView.classList.add('hidden');
        if(squareRootsSelector) {
            squareRootsSelector.classList.remove('hidden');
            squareRootsSelector.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });

    document.getElementById('square-root-prev-btn')?.addEventListener('click', () => {
        if (currentViewSquareRoot > 1) showSquareRoot(currentViewSquareRoot - 1);
    });
    
    document.getElementById('square-root-next-btn')?.addEventListener('click', () => {
        if (currentViewSquareRoot < 100) showSquareRoot(currentViewSquareRoot + 1);
    });
    
    document.getElementById('square-root-copy-btn')?.addEventListener('click', () => {
        if (currentViewSquareRoot) {
            navigator.clipboard.writeText(`√${currentViewSquareRoot} = ${formatRoot(currentViewSquareRoot)}`);
            showToast("Copied to clipboard!");
        }
    });

    const squareRootsSearch = document.getElementById('square-roots-search');
    if (squareRootsSearch) {
        squareRootsSearch.addEventListener('input', (e) => {
            const val = parseInt(e.target.value);
            if (!isNaN(val) && val >= 1 && val <= 100) {
                showSquareRoot(val);
                e.target.value = ''; 
            }
        });
    }

    function startSquareRootPractice() {
        window.isSquareRootsPracticeMode = true;
        selectedTopic = 'Square Roots';
        
        const viewsToHide = ['home-view', 'categories-view', 'square-roots-view', 'cubes-view', 'squares-view'];
        viewsToHide.forEach(id => {
            const v = document.getElementById(id);
            if(v) {
                v.classList.remove('active');
                if(id==='home-view') v.classList.add('hidden-view');
                else v.setAttribute('aria-hidden', 'true');
            }
        });

        const quizView = document.getElementById('quiz-view');
        if(quizView) {
            quizView.classList.add('active');
            quizView.classList.add('slide-in-up');
        }
        document.body.classList.add('quiz-active');
        
        resetQuiz();
    }

    document.getElementById('square-roots-practice-btn')?.addEventListener('click', startSquareRootPractice);
    document.getElementById('start-square-root-practice-btn')?.addEventListener('click', startSquareRootPractice);

    window.generateSquareRootQuestion = function() {
        const diff = formulaEngine.getDifficulty();
        let min = 1, max = 100;
        
        if (diff === 'Easy') { min = 1; max = 20; }
        else if (diff === 'Medium') { min = 21; max = 50; }
        else if (diff === 'Hard') { min = 51; max = 100; }
        
        let attempts = 0;
        let num, questionText, answer, type, isMCQ = true, options = [];
        
        while (attempts < 50) {
            num = Math.floor(Math.random() * (max - min + 1)) + min;
            type = Math.floor(Math.random() * 4) + 1;
            
            // For variety, we can ask different forms just like the examples
            // We use formatRoot for precision correctly
            if (type === 1) {
                questionText = `What is √${num}?`;
                answer = formatRoot(num);
            } else if (type === 2) {
                questionText = `Which number has a square root of ${formatRoot(num)}?`;
                answer = num;
            } else if (type === 3) {
                questionText = `What is √${num} (rounded to 2 decimal places)?`;
                answer = formatRoot(num);
            } else {
                questionText = `√${num} = ?`;
                answer = formatRoot(num);
            }
            
            let opts = new Set([answer]);
            while(opts.size < 4) {
                let offset = (Math.random() * 2).toFixed(2);
                if (Number.isInteger(answer)) offset = Math.floor(Math.random() * 5) + 1;
                
                let val1 = parseFloat((answer + Number(offset)).toFixed(2));
                let val2 = parseFloat((answer - Number(offset)).toFixed(2));
                
                if (Math.random() > 0.5) opts.add(val1);
                else if (val2 > 0) opts.add(val2);
                else opts.add(parseFloat((answer + Number(offset) + 1).toFixed(2)));
            }
            options = Array.from(opts).sort(() => Math.random() - 0.5);
            
            if (!formulaEngine.history.has(questionText)) {
                formulaEngine.history.add(questionText);
                break;
            }
            attempts++;
        }
        
        return {
            question: questionText,
            answer: answer,
            isMCQ: isMCQ,
            options: options
        };
    };

    // =========================================================
    // CUBE ROOTS MODULE LOGIC
    // =========================================================

    const cubeRootsView = document.getElementById('cube-roots-view');
    const cubeRootsBtn = document.getElementById('cube-roots-btn');
    const cubeRootsBackBtn = document.getElementById('cube-roots-back-btn');
    const cubeRootsSelector = document.getElementById('cube-roots-selector');
    const cubeRootsSelectorGrid = document.getElementById('cube-roots-selector-grid');
    const singleCubeRootView = document.getElementById('single-cube-root-view');
    const singleCubeRootTitle = document.getElementById('single-cube-root-title');
    const singleCubeRootEquation = document.getElementById('single-cube-root-equation');
    
    let currentViewCubeRoot = null;
    
    function formatCubeRoot(num) {
        // Need to account for small JS precision issues for exactly perfect cubes (e.g. cbrt of 64 is perfectly 4, but let's be safe)
        const root = Math.cbrt(num);
        // Math.round to check if it's extremely close to an integer
        const rounded = Math.round(root);
        if (Math.abs(root - rounded) < Number.EPSILON * 100) {
            return rounded;
        }
        return parseFloat(root.toFixed(2));
    }

    if (cubeRootsBtn) {
        cubeRootsBtn.addEventListener('click', () => {
            const categoriesView = document.getElementById('categories-view');
            if(categoriesView) {
                categoriesView.classList.remove('active');
                categoriesView.setAttribute('aria-hidden', 'true');
            }
            if(cubeRootsView) {
                cubeRootsView.classList.add('active');
                cubeRootsView.setAttribute('aria-hidden', 'false');
                cubeRootsView.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }

    if (cubeRootsBackBtn) {
        cubeRootsBackBtn.addEventListener('click', () => {
            if(cubeRootsView) {
                cubeRootsView.classList.remove('active');
                cubeRootsView.setAttribute('aria-hidden', 'true');
            }
            const categoriesView = document.getElementById('categories-view');
            if(categoriesView) {
                categoriesView.classList.add('active');
                categoriesView.setAttribute('aria-hidden', 'false');
            }
        });
    }

    if (cubeRootsSelectorGrid) {
        for (let i = 1; i <= 100; i++) {
            cubeRootsSelectorGrid.appendChild(createNumberTile(i, showCubeRoot));
        }
    }

    function showCubeRoot(number) {
        if (number < 1 || number > 100) return;
        currentViewCubeRoot = number;
        
        if(cubeRootsSelector) cubeRootsSelector.classList.add('hidden');
        if(singleCubeRootView) {
            singleCubeRootView.classList.remove('hidden');
            singleCubeRootView.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        
        if (singleCubeRootTitle) singleCubeRootTitle.textContent = `Cube Root of ${number}`;
        if (singleCubeRootEquation) singleCubeRootEquation.textContent = `∛${number} = ${formatCubeRoot(number)}`;
    }

    const singleCubeRootBackBtn = document.getElementById('single-cube-root-back-btn');
    if (singleCubeRootBackBtn) {
        singleCubeRootBackBtn.addEventListener('click', () => {
            if(singleCubeRootView) singleCubeRootView.classList.add('hidden');
            if(cubeRootsSelector) cubeRootsSelector.classList.remove('hidden');
        });
    }
    
    document.getElementById('cube-roots-view-btn')?.addEventListener('click', () => {
        if(singleCubeRootView) singleCubeRootView.classList.add('hidden');
        if(cubeRootsSelector) {
            cubeRootsSelector.classList.remove('hidden');
            cubeRootsSelector.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });

    document.getElementById('cube-root-prev-btn')?.addEventListener('click', () => {
        if (currentViewCubeRoot > 1) showCubeRoot(currentViewCubeRoot - 1);
    });
    
    document.getElementById('cube-root-next-btn')?.addEventListener('click', () => {
        if (currentViewCubeRoot < 100) showCubeRoot(currentViewCubeRoot + 1);
    });
    
    document.getElementById('cube-root-copy-btn')?.addEventListener('click', () => {
        if (currentViewCubeRoot) {
            navigator.clipboard.writeText(`∛${currentViewCubeRoot} = ${formatCubeRoot(currentViewCubeRoot)}`);
            showToast("Copied to clipboard!");
        }
    });

    const cubeRootsSearch = document.getElementById('cube-roots-search');
    if (cubeRootsSearch) {
        cubeRootsSearch.addEventListener('input', (e) => {
            const val = parseInt(e.target.value);
            if (!isNaN(val) && val >= 1 && val <= 100) {
                showCubeRoot(val);
                e.target.value = ''; 
            }
        });
    }

    function startCubeRootPractice() {
        window.isCubeRootsPracticeMode = true;
        selectedTopic = 'Cube Roots';
        
        const viewsToHide = ['home-view', 'categories-view', 'cube-roots-view', 'square-roots-view', 'cubes-view', 'squares-view'];
        viewsToHide.forEach(id => {
            const v = document.getElementById(id);
            if(v) {
                v.classList.remove('active');
                if(id==='home-view') v.classList.add('hidden-view');
                else v.setAttribute('aria-hidden', 'true');
            }
        });

        const quizView = document.getElementById('quiz-view');
        if(quizView) {
            quizView.classList.add('active');
            quizView.classList.add('slide-in-up');
        }
        document.body.classList.add('quiz-active');
        
        resetQuiz();
    }

    document.getElementById('cube-roots-practice-btn')?.addEventListener('click', startCubeRootPractice);
    document.getElementById('start-cube-root-practice-btn')?.addEventListener('click', startCubeRootPractice);

    window.generateCubeRootQuestion = function() {
        const diff = formulaEngine.getDifficulty();
        let min = 1, max = 100;
        
        if (diff === 'Easy') { min = 1; max = 20; }
        else if (diff === 'Medium') { min = 21; max = 50; }
        else if (diff === 'Hard') { min = 51; max = 100; }
        
        let attempts = 0;
        let num, questionText, answer, type, isMCQ = true, options = [];
        
        while (attempts < 50) {
            num = Math.floor(Math.random() * (max - min + 1)) + min;
            type = Math.floor(Math.random() * 4) + 1;
            
            if (type === 1) {
                questionText = `What is ∛${num}?`;
                answer = formatCubeRoot(num);
            } else if (type === 2) {
                questionText = `Which number has a cube root of ${formatCubeRoot(num)}?`;
                answer = num;
            } else if (type === 3) {
                questionText = `What is ∛${num} (rounded to 2 decimal places)?`;
                answer = formatCubeRoot(num);
            } else {
                questionText = `∛${num} = ?`;
                answer = formatCubeRoot(num);
            }
            
            let opts = new Set([answer]);
            while(opts.size < 4) {
                let offset = (Math.random() * 1.5).toFixed(2);
                if (Number.isInteger(answer)) offset = Math.floor(Math.random() * 5) + 1;
                
                let val1 = parseFloat((answer + Number(offset)).toFixed(2));
                let val2 = parseFloat((answer - Number(offset)).toFixed(2));
                
                if (Math.random() > 0.5) opts.add(val1);
                else if (val2 > 0) opts.add(val2);
                else opts.add(parseFloat((answer + Number(offset) + 1).toFixed(2)));
            }
            options = Array.from(opts).sort(() => Math.random() - 0.5);
            
            if (!formulaEngine.history.has(questionText)) {
                formulaEngine.history.add(questionText);
                break;
            }
            attempts++;
        }
        
        return {
            question: questionText,
            answer: answer,
            isMCQ: isMCQ,
            options: options
        };
    };
});
