with open('js/script.js', 'r') as f:
    js = f.read()

# First, remove the block I added at the end
start_idx = js.find("// =========================================================\n// NAV PRACTICE BUTTON LOGIC")
if start_idx != -1:
    js = js[:start_idx].strip() + "\n"

# Now inject the logic just before the end of the main DOMContentLoaded block
injection = """
    // NAV PRACTICE BUTTON LOGIC
    const practiceNavBtn = document.querySelector('a[href="#practice"]');
    if (practiceNavBtn) {
        practiceNavBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            const isQuizActive = document.body.classList.contains('quiz-active');
            
            if (isQuizActive) {
                const resultsScreen = document.getElementById('results-screen');
                const isResultsShowing = resultsScreen && !resultsScreen.classList.contains('hidden');
                
                // If they are in the middle of a quiz (not on results screen and currentQuestion > 1)
                // Actually, just prompting if they are in the quiz view and not on results is fine.
                if (!isResultsShowing) {
                    if (!confirm("Are you sure you want to discard your current progress and start a new quiz?")) {
                        return; // Cancelled
                    }
                }
            }
            
            // SPA Transition to Quiz
            const homeView = document.getElementById('home-view');
            if (homeView && !homeView.classList.contains('hidden-view')) {
                homeView.classList.add('fade-out');
                setTimeout(() => {
                    homeView.classList.add('hidden-view');
                }, 500); // Wait for transition
            }
            
            const quizView = document.getElementById('quiz-view');
            if (quizView) {
                quizView.classList.add('active');
                quizView.classList.add('slide-in-up');
            }
            document.body.classList.add('quiz-active');
            
            // Reset and start quiz
            resetQuiz();
        });
    }
"""

end_of_block = "});\n"
if js.endswith(end_of_block):
    js = js[:-len(end_of_block)] + injection + "\n" + end_of_block
else:
    print("Could not find end of block")

with open('js/script.js', 'w') as f:
    f.write(js)
print("Injected Practice button logic")
