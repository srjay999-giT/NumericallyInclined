# NumericallyInclined

> Master Mental Mathematics Through Unlimited Intelligent Practice.

[![Live Demo](https://img.shields.io/badge/Live-Demo-22C55E?style=for-the-badge&logo=vercel&logoColor=white)](https://numerically-inclined-twoifd2tk-jayla999.vercel.app)

## 🌐 Live Demo

🔗 **Live Website:** https://numerically-inclined-twoifd2tk-jayla999.vercel.app

NumericallyInclined is a lightning-fast, fully client-side mathematics practice platform. Designed to mimic the aesthetics and polish of modern premium tools, it provides a distraction-free environment for students and professionals to master mental math, perfect squares, and complex formulas.

It was built to solve a specific problem in math education: static quizzes run out of questions, and rote memorization fades quickly. By providing the core formula, variables, memory tricks, and common mistakes upfront, learners build intuition before testing their speed and accuracy in high-pressure scenarios.

To ensure unlimited replayability, the platform is powered by a custom Formula Generator Engine. This engine synthesizes unique, mathematically sound questions across multiple domains in real-time without requiring a backend database.

---

## 🚀 Features

The platform is designed to offer a complete ecosystem for mathematical mastery. Every feature operates instantly in the browser.

| Feature | Description |
|---------|-------------|
| **Unlimited Formula Generator** | Dynamically synthesizes infinite unique math problems. |
| **Mental Math Practice** | Core practice mode focused on rapid calculation. |
| **Categories** | 29 distinct mathematical domains categorized by difficulty. |
| **Formula Library** | Comprehensive reference guide with memory tricks and examples. |
| **Tables** | Dedicated grid practice for multiplication tables (1–30). |
| **Squares** | Dedicated grid practice for perfect squares (1–100). |
| **Cubes** | Specialized challenges for cube calculations. |
| **Square Roots** | Reverse calculation practice for square roots. |
| **Cube Roots** | Reverse calculation practice for cube roots. |
| **Multiple Choice Mode** | Quick-fire practice using dynamically generated distractors. |
| **Type Answer Mode** | Hardcore mode requiring exact numerical inputs. |
| **Adaptive Mode** | Seamlessly switches modes based on your performance trajectory. |
| **Per Question Timer** | Smooth, animated countdown to build calculation speed under pressure. |
| **Dark Mode** | Meticulously crafted dark theme for late-night study sessions. |
| **Leaderboard** | Local ranking system tracking top scores, accuracies, and streaks. |
| **GitHub-style Progress Dashboard**| Visual heatmap mapping your daily practice intensity. |
| **Responsive Design** | Flawless experience across desktop, tablet, and mobile browsers. |
| **Offline Support** | Fully functional without an internet connection. |

---

## 📸 Screenshots

<br/>

| Section | Screenshot |
|---------|------------|
| **Home Page** | `[Placeholder: home.png]` |
| **Practice** | `[Placeholder: practice.png]` |
| **Categories** | `[Placeholder: categories.png]` |
| **Formula Library** | `[Placeholder: formulas.png]` |
| **Tables** | `[Placeholder: tables.png]` |
| **Squares** | `[Placeholder: squares.png]` |
| **Leaderboard** | `[Placeholder: leaderboard.png]` |
| **Settings** | `[Placeholder: settings.png]` |
| **Dark Mode** | `[Placeholder: dark_mode.png]` |
| **Dashboard** | `[Placeholder: dashboard.png]` |

<br/>

---

## 🛠 Tech Stack

NumericallyInclined relies on a strict, dependency-free vanilla stack to ensure maximum performance and offline capability.

- HTML5
- CSS3
- JavaScript (ES6)
- Local Storage

---

## 📂 Folder Structure

```text
NumericallyInclined/
├── index.html           # Main SPA entry point
├── README.md            # Project documentation
├── css/
│   └── style.css        # Global styles, themes, and animations
├── js/
│   ├── script.js            # UI logic, routing, and session state
│   └── formula-generator.js # Procedural math question engine
└── assets/              # Icons, placeholders, and media
```

---

## ⚙️ Installation

Because NumericallyInclined uses zero backend dependencies and no build steps, running it locally is instantaneous.

```bash
git clone <repository-url>
cd <repository-folder>
```

Open `index.html` with Live Server or run a local Python HTTP server:

```bash
python3 -m http.server 8000
```

Open your browser and navigate to:

```text
http://localhost:8000
```

---

## 🧠 How It Works

### Formula Generator
Instead of fetching from a static array, the app uses a custom `FormulaGeneratorEngine`. When a topic is requested, the engine pulls boundary variables based on your current difficulty, applies the specific mathematical relationship, and computes the exact answer in real-time.

### Question Engine
The engine includes a validation loop that prevents duplicate questions (using a `Set` history array) and ensures answers are finite. For Multiple Choice mode, it intelligently calculates proximal distractors (e.g., `answer ± offset`), ensuring that options look highly plausible to test actual comprehension rather than lucky guessing.

### Timer
A smooth, animated per-question countdown enforces speed. Completing questions faster yields a time bonus added to your base score, simulating high-pressure calculation environments. 

### Progress Tracking
Every question you answer increments your global `questionsSolved` and modifies your `accuracyTotal`. This data is securely saved to `localStorage` and populates the GitHub-style Heatmap on your dashboard, visualizing your consistency over the last 98 days.

### Adaptive Difficulty
The engine maintains a rolling window of your last 4 answers. Maintain >90% accuracy, and the difficulty automatically scales up. Drop below 50%, and the engine eases up to help rebuild your confidence.

---

## ✨ Project Highlights

| Highlight | Description |
|-----------|-------------|
| **Zero Backend Dependencies** | Runs entirely in your browser with zero latency or server dependencies. |
| **Formula-First Learning** | Exposes the underlying mathematical relationships, variables, and common mistakes upfront. |
| **Dynamic Distractors** | AI-like logic ensures incorrect MCQ options are mathematically deceptive and highly plausible. |
| **Performance Driven** | Pure Vanilla JavaScript architecture ensures high framerates and instant navigation transitions. |
| **Privacy First** | All session data, leaderboards, and progress tracking are stored locally on your device. |

---

## 🚀 Future Improvements

We are constantly pushing to make mental math mastery more engaging. Upcoming features include:

- **Achievements:** Unlockable badges for reaching milestones.
- **Daily Challenges:** A synchronized global challenge with unique rule modifiers.
- **Accounts:** Secure user authentication.
- **Cloud Sync:** Firebase integration to persist your heatmap across devices.
- **PWA:** Install NumericallyInclined directly to your mobile home screen.
- **Multiplayer:** Real-time 1v1 math duels via WebSockets.
- **Spaced Repetition:** An algorithm targeting the topics you fail most often.
- **Voice Practice:** Web Speech API integration to answer questions hands-free.
- **AI Tutor:** Post-quiz analysis offering personalized advice on how to calculate faster.

---

## 🤝 Contributing

We welcome contributions from the community! To ensure high-quality additions:

1. **Fork** the project.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a **Pull Request**.

Please ensure any new features in the `FormulaGeneratorEngine` include valid distractor logic and do not break the offline-first philosophy.

---

## 📄 License (MIT)

Distributed under the MIT License. See `LICENSE` for more information.

---

## ✍️ Author

Designed and developed to make mathematics elegant, engaging, and accessible. Built with a passion for educational technology and performance-driven design.
