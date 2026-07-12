import re

with open('js/script.js', 'r') as f:
    js = f.read()

# 1. Update TIME_LIMIT from 60 to 10
js = re.sub(r'const TIME_LIMIT = 60;', r'const TIME_LIMIT = 10;', js)

# 2. Modify startTimer()
start_timer_replacement = """    function formatTime(seconds) {
        return Math.ceil(seconds) + 's';
    }

    function startTimer() {
        timeLeft = TIME_LIMIT;
        if(timerBar) timerBar.style.width = '100%';
        if(timerBar) timerBar.style.background = '#10b981'; 
        
        const timerText = document.getElementById('countdown-text');
        const timerContainer = document.getElementById('quiz-countdown');
        if (timerText) timerText.textContent = formatTime(timeLeft);
        if (timerContainer) {
            timerContainer.className = 'quiz-countdown';
        }
        
        clearInterval(quizTimer);
        
        quizTimer = setInterval(() => {
            timeLeft -= 0.1; 
            const percent = (timeLeft / TIME_LIMIT) * 100;
            if(timerBar) timerBar.style.width = `${percent}%`;
            
            if (timerText && Math.ceil(timeLeft) >= 0) {
                const ceilTime = Math.ceil(timeLeft);
                timerText.textContent = formatTime(timeLeft);
                
                if (timerContainer) {
                    if (ceilTime <= 3 && ceilTime > 0) {
                        timerContainer.className = 'quiz-countdown danger pulse';
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
    }"""

start_timer_pattern = re.compile(r'    function formatTime\(seconds\) \{.*?\},\s*100\);\s*\}', re.DOTALL)
js = start_timer_pattern.sub(start_timer_replacement, js)

# 3. Add clearInterval to checkAnswer
js = js.replace("""    function checkAnswer() {
        if (isProcessing || answerInput.value.trim() === '') return;
        isProcessing = true;
        // removed clearInterval for global timer""", 
"""    function checkAnswer() {
        if (isProcessing || answerInput.value.trim() === '') return;
        isProcessing = true;
        clearInterval(quizTimer);""")

# 4. Add startTimer to nextQuestion
js = js.replace("""            updateProgress();
            generateQuestion();
            // removed startTimer for global timer
        }""",
"""            updateProgress();
            generateQuestion();
            startTimer();
        }""")

# 5. Revert handleTimeout to call nextQuestion
js = js.replace("""    function handleTimeout() {
        isProcessing = true;
        answerInput.disabled = true;
        submitBtn.disabled = true;
        
        updateStats();
        feedbackMsg.innerHTML = `<i class="fa-solid fa-clock"></i> Time's Up!`;
        feedbackMsg.className = 'feedback-msg wrong show';
        
        setTimeout(endQuiz, 1500);
    }""",
"""    function handleTimeout() {
        isProcessing = true;
        answerInput.disabled = true;
        submitBtn.disabled = true;
        streak = 0;
        
        updateStats();
        feedbackMsg.innerHTML = `<i class="fa-solid fa-clock"></i> Time's Up! Answer was ${currentAnswer}`;
        feedbackMsg.className = 'feedback-msg wrong show';
        
        setTimeout(nextQuestion, 1000);
    }""")

with open('js/script.js', 'w') as f:
    f.write(js)
print("Updated to per-question timer logic")
