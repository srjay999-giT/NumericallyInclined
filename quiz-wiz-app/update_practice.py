import re

with open('js/script.js', 'r') as f:
    js = f.read()

# The block to replace starts at "// NAV PRACTICE BUTTON LOGIC"
start_str = "// NAV PRACTICE BUTTON LOGIC"

start_idx = js.find(start_str)
if start_idx != -1:
    js = js[:start_idx]
else:
    print("Could not find start str")

new_logic = """// NAV PRACTICE BUTTON LOGIC
    const practiceNavBtn = document.querySelector('a[href="#practice"]');
    if (practiceNavBtn) {
        practiceNavBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            const isQuizActive = document.body.classList.contains('quiz-active');
            const homeView = document.getElementById('home-view');
            const quizView = document.getElementById('quiz-view');
            
            if (isQuizActive) {
                // If in quiz, go back to home screen first
                if (quizView) {
                    quizView.classList.remove('active');
                    quizView.classList.remove('slide-in-up');
                }
                if (homeView) {
                    homeView.classList.remove('hidden-view');
                    homeView.classList.remove('fade-out');
                }
                document.body.classList.remove('quiz-active');
                
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
});
"""

js = js + new_logic

with open('js/script.js', 'w') as f:
    f.write(js)

print("Updated script.js successfully")
