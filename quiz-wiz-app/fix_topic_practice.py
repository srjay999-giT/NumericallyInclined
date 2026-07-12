import re

with open('js/script.js', 'r') as f:
    js = f.read()

new_func = """    function startTopicPractice(topic) {
        selectedTopic = topic.name;
        
        // 1. Close the formula panel
        if (document.getElementById('formulas-view')?.classList.contains('active')) {
            closeFormulasView();
        }
        if (document.getElementById('categories-view')?.classList.contains('active')) {
            closeCategoriesView();
        }

        setActiveNavItem(document.querySelector('a[href="#practice"]'));

        // 2. Scroll smoothly to the Practice section
        const startSection = document.getElementById('navigation-cards');
        if (startSection) {
            startSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        const homeView = document.getElementById('home-view');
        if (homeView) {
            homeView.classList.add('fade-out');
            setTimeout(() => homeView.classList.add('hidden-view'), 500);
        }

        const quizView = document.getElementById('quiz-view');
        if (quizView) {
            quizView.classList.add('active');
            quizView.classList.add('slide-in-up');
        }
        
        document.body.classList.add('quiz-active');
        
        // 5-9. Reset score, streak, timer, question index, and Start quiz immediately.
        resetQuiz();
    }"""

js = re.sub(r'    function startTopicPractice\(topic\) \{.*?\n    \}', new_func, js, flags=re.DOTALL)

with open('js/script.js', 'w') as f:
    f.write(js)

print("Updated startTopicPractice")
