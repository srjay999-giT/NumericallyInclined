with open('css/style.css', 'a') as f:
    f.write("\n\n/* ==========================================================\n   Quiz Styles (Merged)\n   ========================================================== */\n")
    f.write('''
body.quiz-active {
    overflow: hidden;
    background: linear-gradient(135deg, #eef6ff, #ffffff);
}

#quiz-view {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* SPA View Transitions */
.view-section {
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}

.fade-out {
    opacity: 0;
    pointer-events: none;
    position: absolute;
    width: 100%;
    z-index: -1;
}

.slide-in-up {
    animation: slideInUpView 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes slideInUpView {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
}
''')
    
    with open('css/quiz.css', 'r') as q:
        lines = q.readlines()
        f.writelines(lines[17:295])

print("CSS Merged")
