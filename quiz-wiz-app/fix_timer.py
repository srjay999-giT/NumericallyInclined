import re

with open('js/script.js', 'r') as f:
    js = f.read()

# 1. Update TIME_LIMIT from 10 to 60
js = re.sub(r'const TIME_LIMIT = 10;', r'const TIME_LIMIT = 60;', js)

# 2. Modify startTimer() to update the new countdown text and handle the 60s quiz
# We also need to format the time as 01:00, 00:59, etc.
start_timer_replacement = """    function formatTime(seconds) {
        const m = Math.floor(seconds / 60).toString().padStart(2, '0');
        const s = Math.floor(seconds % 60).toString().padStart(2, '0');
        return `${m}:${s}`;
    }

    function startTimer() {
        timeLeft = TIME_LIMIT;
        if(timerBar) timerBar.style.width = '100%';
        if(timerBar) timerBar.style.background = '#10b981'; 
        
        const timerText = document.getElementById('countdown-text');
        const timerContainer = document.getElementById('quiz-countdown');
        if (timerText) timerText.textContent = formatTime(timeLeft);
        if (timerContainer) {
            timerContainer.classList.remove('warning', 'danger', 'pulse');
        }
        
        clearInterval(quizTimer);
        
        quizTimer = setInterval(() => {
            timeLeft -= 0.1; 
            const percent = (timeLeft / TIME_LIMIT) * 100;
            if(timerBar) timerBar.style.width = `${percent}%`;
            
            // Text updates every whole second to avoid jitter
            if (timerText && Math.ceil(timeLeft) >= 0) {
                const ceilTime = Math.ceil(timeLeft);
                timerText.textContent = formatTime(ceilTime);
                
                if (timerContainer) {
                    if (ceilTime <= 10 && ceilTime > 0) {
                        timerContainer.className = 'quiz-countdown danger pulse';
                    } else if (ceilTime <= 30) {
                        timerContainer.className = 'quiz-countdown warning';
                    } else {
                        timerContainer.className = 'quiz-countdown';
                    }
                }
            }

            if (timeLeft <= 0) {
                clearInterval(quizTimer);
                if (timerText) timerText.textContent = "00:00";
                if (timerContainer) timerContainer.className = 'quiz-countdown danger';
                handleTimeout();
            }
        }, 100);
    }
"""

# Replace the existing startTimer function completely
start_timer_pattern = re.compile(r'function startTimer\(\)\s*\{.*?\},\s*100\);\s*\}', re.DOTALL)
js = start_timer_pattern.sub(start_timer_replacement, js)

# 3. We need to prevent `generateQuestion()` from resetting the timer.
# The user wants a PER-QUIZ timer. 
# Currently, `generateQuestion()` calls `startTimer()` if it exists there, but actually `initQuiz()` calls `startTimer()`.
# Let's verify where `startTimer()` is called.
# Wait, if `generateQuestion()` does NOT call `startTimer()`, and only `initQuiz()` calls it, we are already golden!
