with open('js/script.js', 'r') as f:
    js = f.read()

# Remove clearInterval from checkAnswer
js = js.replace("""    function checkAnswer() {
        if (isProcessing || answerInput.value.trim() === '') return;
        isProcessing = true;
        clearInterval(quizTimer);""", 
"""    function checkAnswer() {
        if (isProcessing || answerInput.value.trim() === '') return;
        isProcessing = true;
        // removed clearInterval for global timer""")

# Remove startTimer from nextQuestion
js = js.replace("""            updateProgress();
            generateQuestion();
            startTimer();
        }""",
"""            updateProgress();
            generateQuestion();
            // removed startTimer for global timer
        }""")

# Modify handleTimeout to end the quiz
js = js.replace("""    function handleTimeout() {
        isProcessing = true;
        answerInput.disabled = true;
        submitBtn.disabled = true;
        streak = 0;
        
        updateStats();
        feedbackMsg.innerHTML = `<i class="fa-solid fa-clock"></i> Time's Up! Answer was ${currentAnswer}`;
        feedbackMsg.className = 'feedback-msg wrong show';
        
        setTimeout(nextQuestion, 1500);
    }""",
"""    function handleTimeout() {
        isProcessing = true;
        answerInput.disabled = true;
        submitBtn.disabled = true;
        
        updateStats();
        feedbackMsg.innerHTML = `<i class="fa-solid fa-clock"></i> Time's Up!`;
        feedbackMsg.className = 'feedback-msg wrong show';
        
        setTimeout(endQuiz, 1500);
    }""")

with open('js/script.js', 'w') as f:
    f.write(js)
print("Updated timer logic")
