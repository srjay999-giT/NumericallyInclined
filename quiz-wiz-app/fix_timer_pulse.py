import re

with open('js/script.js', 'r') as f:
    js = f.read()

# Fix warning logic
fixed_logic = """                if (timerContainer) {
                    if (ceilTime <= 2 && ceilTime >= 0) {
                        timerContainer.className = 'quiz-countdown danger pulse';
                    } else if (ceilTime <= 3) {
                        timerContainer.className = 'quiz-countdown warning pulse';
                    } else if (ceilTime <= 5) {
                        timerContainer.className = 'quiz-countdown warning';
                    } else {
                        timerContainer.className = 'quiz-countdown';
                    }
                }"""

js = re.sub(r'                if \(timerContainer\) \{.*?                \}', fixed_logic, js, flags=re.DOTALL)

with open('js/script.js', 'w') as f:
    f.write(js)
print("Updated pulse logic")
