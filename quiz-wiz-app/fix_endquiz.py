with open('js/script.js', 'r') as f:
    js = f.read()

js = js.replace("""    function endQuiz() {
        quizInProgress = false;
        // Fill the progress bar completely""", 
"""    function endQuiz() {
        quizInProgress = false;
        clearInterval(quizTimer); // Stop the global timer completely
        // Fill the progress bar completely""")

with open('js/script.js', 'w') as f:
    f.write(js)
print("Updated endQuiz")
