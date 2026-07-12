# NumericallyInclined — Master Project Specification

> **This document is the SINGLE SOURCE OF TRUTH for the NumericallyInclined project.**
> Every AI agent, developer, and contributor MUST read this document in its entirety before writing a single line of code.
> No external clarification should be needed. If a detail is missing here, the builder should use best professional judgement consistent with the design philosophy described below.

**Version:** 1.0.0
**Last Updated:** 2026-07-12
**Status:** Active Specification

---

## Table of Contents

1. [Product Vision](#1-product-vision)
2. [Mission](#2-mission)
3. [Target Audience](#3-target-audience)
4. [User Personas](#4-user-personas)
5. [Business Goals](#5-business-goals)
6. [Design Philosophy](#6-design-philosophy)
7. [Brand Identity](#7-brand-identity)
8. [Logo Guidelines](#8-logo-guidelines)
9. [Complete Color System](#9-complete-color-system)
10. [Typography System](#10-typography-system)
11. [Iconography](#11-iconography)
12. [Illustrations](#12-illustrations)
13. [Motion Design](#13-motion-design)
14. [Micro Interactions](#14-micro-interactions)
15. [Complete UX Guidelines](#15-complete-ux-guidelines)
16. [User Journey](#16-user-journey)
17. [Navigation](#17-navigation)
18. [Homepage Specification](#18-homepage-specification)
19. [Quiz Flow](#19-quiz-flow)
20. [Quiz Modes](#20-quiz-modes)
21. [Question Types](#21-question-types)
22. [Difficulty System](#22-difficulty-system)
23. [Timer System](#23-timer-system)
24. [Settings](#24-settings)
25. [Gamification System](#25-gamification-system)
26. [Statistics System](#26-statistics-system)
27. [Leaderboard System](#27-leaderboard-system)
28. [Audio System](#28-audio-system)
29. [Animation Specification](#29-animation-specification)
30. [Accessibility](#30-accessibility)
31. [Performance](#31-performance)
32. [Responsive Breakpoints](#32-responsive-breakpoints)
33. [Folder Structure](#33-folder-structure)
34. [Component Architecture](#34-component-architecture)
35. [CSS Architecture](#35-css-architecture)
36. [JavaScript Architecture](#36-javascript-architecture)
37. [Naming Conventions](#37-naming-conventions)
38. [Coding Standards](#38-coding-standards)
39. [Testing Checklist](#39-testing-checklist)
40. [Browser Compatibility](#40-browser-compatibility)
41. [Future Roadmap](#41-future-roadmap)
42. [Deployment Guide](#42-deployment-guide)
43. [Git Workflow](#43-git-workflow)
44. [Development Rules](#44-development-rules)
45. [QA Checklist](#45-qa-checklist)
46. [Bug Tracking Strategy](#46-bug-tracking-strategy)
47. [Acceptance Criteria](#47-acceptance-criteria)
48. [AI Development Rules](#48-ai-development-rules)

---

# 1. Product Vision

NumericallyInclined is a **premium, gamified mental mathematics training platform** delivered as a single-page web application. It transforms the mundane act of arithmetic practice into an engaging, rewarding, and visually stunning experience that users *want* to return to every day.

### Vision Statement

> *"To make mental mathematics irresistibly fun, deeply rewarding, and universally accessible — empowering every mind to think faster, sharper, and with unshakeable confidence."*

### Core Beliefs

- **Mathematics is not boring — bad experiences are.** NumericallyInclined eliminates friction, punishment, and dullness. Every interaction feels like a game worth playing.
- **Speed and accuracy are trainable skills.** With the right feedback loops, anyone can dramatically improve their mental calculation abilities.
- **Beautiful design drives engagement.** A visually premium product earns trust, sustains attention, and inspires repeated use.
- **Progress is the ultimate motivator.** XP, streaks, achievements, and leaderboards tap into intrinsic motivation loops that keep users coming back.

### What NumericallyInclined Is

| ✅ NumericallyInclined IS                                   | ❌ NumericallyInclined is NOT                              |
|--------------------------------------------------|--------------------------------------------------|
| A premium, gamified mental maths trainer          | A generic quiz builder                           |
| A beautiful, animated, orange-branded experience  | A plain white-background test page               |
| A daily-habit-forming product                     | A one-time-use tool                              |
| Accessible and inclusive                          | Exclusionary or punishing                        |
| Performance-optimized and offline-capable         | Heavy, slow, or dependent on constant internet   |
| A single long-scrolling homepage + multi-page quiz| A complex multi-page marketing site              |

### Success Metrics

| Metric                    | Target                     |
|---------------------------|----------------------------|
| Lighthouse Performance    | ≥ 95                       |
| Lighthouse Accessibility  | ≥ 95                       |
| Lighthouse Best Practices | ≥ 95                       |
| Lighthouse SEO            | ≥ 95                       |
| First Contentful Paint    | < 1.2s                     |
| Largest Contentful Paint  | < 2.5s                     |
| Cumulative Layout Shift   | < 0.1                      |
| First Input Delay         | < 100ms                    |
| Time to Interactive       | < 3.5s                     |
| Bundle Size (gzipped)     | < 150KB total              |

---

# 2. Mission

> *"To build the world's most beautiful and effective mental maths training experience — one that makes every user feel like a genius in progress."*

### Mission Pillars

1. **Delight** — Every pixel, every animation, every sound must spark joy.
2. **Empower** — Users should leave every session measurably sharper.
3. **Include** — From a 7-year-old student to a 70-year-old retiree, everyone is welcome.
4. **Respect** — Respect the user's time, attention, data, and device capabilities.

---

# 3. Target Audience

### Primary Audiences

| Segment                  | Age Range | Description                                                               |
|--------------------------|-----------|---------------------------------------------------------------------------|
| Students                 | 7–18      | School students wanting to improve maths speed for exams                  |
| Competitive Exam Aspirants| 18–30    | Preparing for aptitude tests (SAT, GRE, GMAT, banking exams, etc.)       |
| Lifelong Learners        | 25–65     | Adults who enjoy brain training and cognitive fitness                      |
| Parents                  | 28–50     | Looking for engaging, screen-time-worthy educational tools for children   |
| Teachers                 | 25–60     | Seeking classroom warm-up activities or homework supplements              |

### Secondary Audiences

| Segment                  | Description                                                               |
|--------------------------|---------------------------------------------------------------------------|
| Casual Gamers            | People who enjoy quick, rewarding mobile games                            |
| Productivity Enthusiasts | People who track personal metrics and enjoy self-improvement              |
| Senior Citizens          | Older adults seeking cognitive exercise                                    |

### Geographic Focus

- Primary: Global (English-speaking markets)
- Design must work for LTR reading direction
- All text in English
- Numbers use standard Western Arabic numerals (0-9)

---

# 4. User Personas

## Persona 1: Arjun — The Competitive Student

| Attribute          | Detail                                                                 |
|--------------------|------------------------------------------------------------------------|
| **Age**            | 16                                                                     |
| **Occupation**     | High school student                                                    |
| **Location**       | Bengaluru, India                                                       |
| **Device**         | Android phone (mid-range), school laptop                               |
| **Goals**          | Score higher on competitive maths exams, beat friends on leaderboard   |
| **Frustrations**   | Boring maths worksheets, slow feedback, no sense of progress           |
| **Motivation**     | Competition, achievements, streaks                                     |
| **Usage Pattern**  | Daily 15-minute sessions, mostly on mobile during commute              |
| **Feature Focus**  | Speed Test, Leaderboard, Daily Challenge, Achievements                 |

### Arjun's User Story
> *"As a competitive student, I want to practice mental maths in timed challenges so that I can improve my speed and accuracy for exams, while competing with friends on the leaderboard."*

---

## Persona 2: Sarah — The Concerned Parent

| Attribute          | Detail                                                                 |
|--------------------|------------------------------------------------------------------------|
| **Age**            | 35                                                                     |
| **Occupation**     | Marketing manager                                                      |
| **Location**       | London, UK                                                             |
| **Device**         | iPhone 14, MacBook Air                                                 |
| **Goals**          | Find quality educational screen time for her 9-year-old daughter       |
| **Frustrations**   | Most educational apps are ugly, boring, or full of ads                 |
| **Motivation**     | Her daughter's academic improvement                                    |
| **Usage Pattern**  | Sets up the app for her daughter, checks progress weekly               |
| **Feature Focus**  | Practice Mode, Statistics, Beginner difficulty, positive feedback      |

### Sarah's User Story
> *"As a parent, I want a beautiful, ad-free maths practice tool so that my child can enjoy learning maths without being distracted or discouraged."*

---

## Persona 3: David — The Brain Trainer

| Attribute          | Detail                                                                 |
|--------------------|------------------------------------------------------------------------|
| **Age**            | 52                                                                     |
| **Occupation**     | Retired engineer                                                       |
| **Location**       | Toronto, Canada                                                        |
| **Device**         | iPad Pro, Windows desktop                                              |
| **Goals**          | Keep his mind sharp, enjoy a daily cognitive exercise routine           |
| **Frustrations**   | Most brain training apps require subscriptions, are overly complex     |
| **Motivation**     | Personal satisfaction, daily streaks, beating personal bests           |
| **Usage Pattern**  | One session per day, 10-20 minutes, always on iPad                    |
| **Feature Focus**  | Daily Challenge, Statistics, Progress Charts, All difficulty levels    |

### David's User Story
> *"As a retiree, I want a daily mental maths challenge so that I can keep my mind active and track my cognitive performance over time."*

---

## Persona 4: Priya — The Aspiring Teacher

| Attribute          | Detail                                                                 |
|--------------------|------------------------------------------------------------------------|
| **Age**            | 28                                                                     |
| **Occupation**     | Primary school teacher                                                 |
| **Location**       | Mumbai, India                                                          |
| **Device**         | Android phone, classroom projector (via laptop)                        |
| **Goals**          | Use as a classroom warm-up activity, recommend to students             |
| **Frustrations**   | Lack of free, beautiful, instant-start maths tools                    |
| **Motivation**     | Student engagement, making maths fun                                   |
| **Usage Pattern**  | 5-minute sessions at start of class, projected on screen              |
| **Feature Focus**  | Practice Mode, multiple difficulty levels, large readable fonts        |

### Priya's User Story
> *"As a teacher, I want to project a visually engaging maths quiz on the classroom screen so that my students can start each lesson with an energizing warm-up activity."*

---

# 5. Business Goals

### Short-Term Goals (0–3 Months)

| #  | Goal                                                    | Success Metric                           |
|----|---------------------------------------------------------|------------------------------------------|
| 1  | Launch MVP with full homepage + quiz flow               | Deployed, functional, Lighthouse ≥ 90    |
| 2  | Achieve premium visual quality                          | User feedback: "looks professional"      |
| 3  | Support all 17 question types                           | All types generating correct questions   |
| 4  | Implement gamification (XP, streaks, achievements)      | Data persists in localStorage            |
| 5  | Full offline capability via PWA                         | Works without internet after first visit |

### Medium-Term Goals (3–6 Months)

| #  | Goal                                                    | Success Metric                           |
|----|---------------------------------------------------------|------------------------------------------|
| 6  | User retention — daily active users                     | Analytics show repeat visits             |
| 7  | Add backend for persistent leaderboards                 | Firebase / Supabase integration          |
| 8  | Social sharing of achievements                          | Share buttons generate social traffic    |
| 9  | Multi-language support (i18n)                           | At least 3 languages                     |
| 10 | Mobile app wrapper (PWA or Capacitor)                   | Installable on iOS / Android             |

### Long-Term Goals (6–12 Months)

| #  | Goal                                                    | Success Metric                           |
|----|---------------------------------------------------------|------------------------------------------|
| 11 | Classroom mode (teacher dashboard)                      | Teachers can create and monitor sessions |
| 12 | Multiplayer real-time challenges                        | WebSocket-based live competitions        |
| 13 | AI-powered adaptive difficulty                          | ML model adjusting question difficulty   |
| 14 | Premium subscription tier                               | Revenue generation from power users      |
| 15 | 1M+ total users                                        | Analytics milestone                      |

---

# 6. Design Philosophy

### Core Design Principles

#### 1. Warmth Over Coldness
NumericallyInclined uses warm orange tones, soft gradients, and rounded shapes to create an inviting, non-intimidating atmosphere. Mathematics is often associated with cold, clinical aesthetics — we deliberately subvert this.

#### 2. Premium Over Generic
Every element should look like it belongs in a premium product. No default browser styles. No unstyled elements. No generic blue links. Every pixel is intentional.

#### 3. Alive Over Static
The interface breathes. Elements float, pulse, and transition smoothly. The page responds to user interaction with micro-animations that make it feel alive and responsive.

#### 4. Clarity Over Cleverness
Navigation is obvious. Labels are clear. Icons are accompanied by text. The user should never wonder "what does this button do?"

#### 5. Reward Over Punishment
Wrong answers are handled gently (soft red glow, encouraging message). Correct answers are celebrated (confetti, satisfying sound, XP gain). The emotional design always skews positive.

#### 6. Progressive Disclosure
Don't overwhelm new users. Show the basics first, reveal advanced features as users progress. The homepage scrolls through information gradually. Settings are layered.

### Design Inspiration

The visual language draws inspiration from:
- **Duolingo** — Gamification, streaks, daily goals
- **Swiggy / Zomato** — Warm orange branding, premium Indian tech aesthetic
- **Headspace** — Calming illustrations, friendly UI
- **Notion** — Clean layout, excellent typography
- **Apple** — Attention to detail, smooth animations, premium feel

### Emotional Design Targets

| State               | Emotion         | Design Response                                      |
|----------------------|-----------------|------------------------------------------------------|
| First visit          | Curiosity       | Animated hero, floating symbols, inviting CTA        |
| Starting a quiz      | Excitement      | Countdown animation, energetic transition            |
| Correct answer       | Satisfaction    | Green flash, +XP animation, optional confetti        |
| Wrong answer         | Gentle nudge    | Soft red, show correct answer, encouraging message   |
| Completing a quiz    | Pride           | Results screen with stats, achievements unlocked     |
| Viewing stats        | Motivation      | Progress charts trending upward, personal bests      |
| Earning achievement  | Delight         | Golden badge animation, celebratory sound            |
| Maintaining streak   | Commitment      | Flame icon, streak counter, social proof             |

---

# 7. Brand Identity

### Brand Name

**NumericallyInclined**

- Pronunciation: /kwɪz wɪz/
- "Quiz" — Represents the core activity: testing knowledge
- "Wiz" — Short for "Wizard", implying mastery and magic
- The rhyming quality makes it memorable and playful

### Brand Personality

| Trait          | Description                                                    |
|----------------|----------------------------------------------------------------|
| **Friendly**   | Approachable, never condescending or academic                  |
| **Energetic**  | Fast, dynamic, full of motion and life                         |
| **Warm**       | Orange-toned, inviting, comfortable                            |
| **Smart**      | Clever without being pretentious                               |
| **Playful**    | Game-like, rewarding, fun                                      |
| **Trustworthy**| Professional quality, reliable, consistent                     |

### Brand Voice

| Context              | Tone                        | Example                                        |
|----------------------|-----------------------------|-------------------------------------------------|
| Homepage headline    | Bold, inspiring             | "Master Mental Maths One Question At A Time."   |
| Button labels        | Action-oriented, clear      | "Start Quiz", "Try Again", "View Results"       |
| Correct answer       | Celebratory, encouraging    | "Brilliant!", "Nailed it!", "You're on fire!"  |
| Wrong answer         | Gentle, supportive          | "Almost!", "Good try!", "Keep going!"           |
| Achievement unlocked | Exciting, rewarding         | "🏆 Speed Demon Unlocked!"                     |
| Empty state          | Motivating, warm            | "Your journey starts here. Take your first quiz!"|
| Error message        | Helpful, non-blaming        | "Something went wrong. Let's try that again."   |

### Taglines (Use throughout the site)

- Primary: **"Master Mental Maths One Question At A Time."**
- Secondary: **"Think Fast. Think Smart. Think NumericallyInclined."**
- Tertiary: **"Your Daily Dose of Mental Maths Magic."**

---

# 8. Logo Guidelines

### Logo Concept

The NumericallyInclined logo combines:
1. **The text "NumericallyInclined"** in a custom-weighted bold font
2. **A stylized brain/lightning bolt icon** representing quick thinking
3. **Orange gradient** from `#FC8019` to `#FF9F43`

### Logo Variations

| Variation          | Use Case                                              |
|--------------------|-------------------------------------------------------|
| Full Logo          | Homepage hero, about page, marketing materials        |
| Icon Only          | Favicon, PWA icon, mobile app icon, small spaces      |
| Text Only          | Navbar, footer, contexts where icon is redundant      |
| Monochrome (White) | On dark/orange backgrounds                            |
| Monochrome (Dark)  | On light backgrounds where color is not available     |

### Logo Sizing

| Context            | Minimum Size    | Recommended Size |
|--------------------|-----------------|------------------|
| Favicon            | 16×16px         | 32×32px          |
| PWA Icon           | 192×192px       | 512×512px        |
| Navbar             | 32px height     | 40px height      |
| Hero Section       | 64px height     | 80–120px height  |
| Social Share       | 1200×630px      | 1200×630px       |

### Logo Clear Space

Maintain a minimum clear space around the logo equal to the height of the letter "W" in the logo text on all four sides.

### Logo Don'ts

- ❌ Do not stretch or distort the logo
- ❌ Do not change the logo colors outside the approved palette
- ❌ Do not add drop shadows or outer glows to the logo
- ❌ Do not place the logo on busy backgrounds without a container
- ❌ Do not rotate the logo
- ❌ Do not use the logo smaller than the minimum size

### Favicon Specification

- Format: SVG (preferred) + ICO fallback + PNG (32×32, 16×16)
- Design: Stylized "QW" monogram or brain icon in orange gradient
- Background: Transparent
- Must be legible at 16×16px

---

# 9. Complete Color System

## 9.1 Core Palette

### Primary Colors

```
Primary:           #FC8019    rgb(252, 128, 25)     hsl(27, 97%, 54%)
Primary Hover:     #E5700F    rgb(229, 112, 15)     hsl(27, 88%, 48%)
Primary Active:    #CC6400    rgb(204, 100, 0)      hsl(29, 100%, 40%)
Primary Light:     #FFA54D    rgb(255, 165, 77)     hsl(30, 100%, 65%)
Primary Lighter:   #FFD4A8    rgb(255, 212, 168)    hsl(30, 100%, 83%)
Primary Lightest:  #FFF0E0    rgb(255, 240, 224)    hsl(31, 100%, 94%)
Primary Dark:      #D46800    rgb(212, 104, 0)      hsl(29, 100%, 42%)
Primary Darker:    #A85200    rgb(168, 82, 0)       hsl(29, 100%, 33%)
Primary Darkest:   #7A3C00    rgb(122, 60, 0)       hsl(30, 100%, 24%)
```

### Secondary Colors

```
Secondary:         #FF9F43    rgb(255, 159, 67)     hsl(29, 100%, 63%)
Secondary Hover:   #F08C2E    rgb(240, 140, 46)     hsl(29, 87%, 56%)
Secondary Active:  #D97B1F    rgb(217, 123, 31)     hsl(30, 75%, 49%)
Secondary Light:   #FFB977    rgb(255, 185, 119)    hsl(29, 100%, 73%)
Secondary Lighter: #FFD9B3    rgb(255, 217, 179)    hsl(30, 100%, 85%)
Secondary Lightest:#FFEED9    rgb(255, 238, 217)    hsl(33, 100%, 93%)
```

### Accent Colors

```
Accent:            #FFB84D    rgb(255, 184, 77)     hsl(36, 100%, 65%)
Accent Hover:      #FFA830    rgb(255, 168, 48)     hsl(35, 100%, 59%)
Accent Active:     #F09820    rgb(240, 152, 32)     hsl(35, 87%, 53%)
Accent Light:      #FFCF80    rgb(255, 207, 128)    hsl(37, 100%, 75%)
Accent Lighter:    #FFE4B3    rgb(255, 228, 179)    hsl(39, 100%, 85%)
Accent Lightest:   #FFF5E0    rgb(255, 245, 224)    hsl(41, 100%, 94%)
```

### Background Colors

```
Background:        #FFFFFF    rgb(255, 255, 255)    hsl(0, 0%, 100%)
Surface:           #FFF8F1    rgb(255, 248, 241)    hsl(30, 100%, 97%)
Surface Hover:     #FFF0E0    rgb(255, 240, 224)    hsl(31, 100%, 94%)
Surface Active:    #FFE8D0    rgb(255, 232, 208)    hsl(31, 100%, 91%)
Surface Elevated:  #FFFFFF    rgb(255, 255, 255)    with shadow
```

### Semantic Colors

```
Success:           #16A34A    rgb(22, 163, 74)      hsl(142, 76%, 36%)
Success Light:     #DCFCE7    rgb(220, 252, 231)    hsl(141, 84%, 93%)
Success Dark:      #15803D    rgb(21, 128, 61)      hsl(142, 72%, 29%)

Danger:            #DC2626    rgb(220, 38, 38)      hsl(0, 72%, 51%)
Danger Light:      #FEE2E2    rgb(254, 226, 226)    hsl(0, 93%, 94%)
Danger Dark:       #B91C1C    rgb(185, 28, 28)      hsl(0, 74%, 42%)

Warning:           #F59E0B    rgb(245, 158, 11)     hsl(38, 92%, 50%)
Warning Light:     #FEF3C7    rgb(254, 243, 199)    hsl(48, 96%, 89%)
Warning Dark:      #D97706    rgb(217, 119, 6)      hsl(32, 95%, 44%)

Info:              #3B82F6    rgb(59, 130, 246)     hsl(217, 91%, 60%)
Info Light:        #DBEAFE    rgb(219, 234, 254)    hsl(214, 95%, 93%)
Info Dark:         #2563EB    rgb(37, 99, 235)      hsl(221, 83%, 53%)
```

### Neutral Colors

```
Neutral 50:        #FAFAFA    rgb(250, 250, 250)
Neutral 100:       #F5F5F5    rgb(245, 245, 245)
Neutral 200:       #E5E5E5    rgb(229, 229, 229)
Neutral 300:       #D4D4D4    rgb(212, 212, 212)
Neutral 400:       #A3A3A3    rgb(163, 163, 163)
Neutral 500:       #737373    rgb(115, 115, 115)
Neutral 600:       #525252    rgb(82, 82, 82)
Neutral 700:       #404040    rgb(64, 64, 64)
Neutral 800:       #262626    rgb(38, 38, 38)
Neutral 900:       #171717    rgb(23, 23, 23)
Neutral 950:       #0A0A0A    rgb(10, 10, 10)
```

### Text Colors

```
Text Primary:      #1A1A1A    rgb(26, 26, 26)       — Headings, body text
Text Secondary:    #525252    rgb(82, 82, 82)        — Subheadings, descriptions
Text Tertiary:     #737373    rgb(115, 115, 115)     — Captions, metadata
Text Disabled:     #A3A3A3    rgb(163, 163, 163)     — Disabled states
Text Inverse:      #FFFFFF    rgb(255, 255, 255)     — Text on dark/colored backgrounds
Text Link:         #FC8019    rgb(252, 128, 25)      — Clickable links
Text Link Hover:   #E5700F    rgb(229, 112, 15)      — Link hover state
```

## 9.2 Gradients

### Primary Gradients

```css
/* Hero Gradient — Used on hero section background */
--gradient-hero: linear-gradient(135deg, #FC8019 0%, #FF9F43 50%, #FFB84D 100%);

/* Hero Gradient Subtle — Used for section backgrounds */
--gradient-hero-subtle: linear-gradient(135deg, #FFF8F1 0%, #FFF0E0 50%, #FFE8D0 100%);

/* Warm Gradient — Used for cards, buttons */
--gradient-warm: linear-gradient(135deg, #FC8019 0%, #FF9F43 100%);

/* Sunset Gradient — Used for premium elements */
--gradient-sunset: linear-gradient(135deg, #FF6B35 0%, #FC8019 30%, #FF9F43 60%, #FFB84D 100%);

/* Gold Gradient — Used for achievements, badges */
--gradient-gold: linear-gradient(135deg, #FFB84D 0%, #FFC107 50%, #FFD700 100%);

/* Soft Orange Gradient — Used for backgrounds */
--gradient-soft: linear-gradient(180deg, #FFFFFF 0%, #FFF8F1 50%, #FFF0E0 100%);

/* Radial Glow — Used behind hero elements */
--gradient-radial-glow: radial-gradient(circle at center, rgba(252, 128, 25, 0.15) 0%, transparent 70%);

/* Success Gradient */
--gradient-success: linear-gradient(135deg, #16A34A 0%, #22C55E 100%);

/* Danger Gradient */
--gradient-danger: linear-gradient(135deg, #DC2626 0%, #EF4444 100%);

/* Dark Gradient — Used for dark sections */
--gradient-dark: linear-gradient(135deg, #1A1A1A 0%, #262626 50%, #171717 100%);
```

## 9.3 Shadows

```css
/* Elevation System */
--shadow-xs:     0 1px 2px rgba(0, 0, 0, 0.04);
--shadow-sm:     0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);
--shadow-md:     0 4px 6px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.04);
--shadow-lg:     0 10px 15px rgba(0, 0, 0, 0.06), 0 4px 6px rgba(0, 0, 0, 0.04);
--shadow-xl:     0 20px 25px rgba(0, 0, 0, 0.08), 0 8px 10px rgba(0, 0, 0, 0.04);
--shadow-2xl:    0 25px 50px rgba(0, 0, 0, 0.12);

/* Orange Glow Shadows — Used for primary buttons and interactive orange elements */
--shadow-orange-sm:  0 2px 8px rgba(252, 128, 25, 0.25);
--shadow-orange-md:  0 4px 14px rgba(252, 128, 25, 0.30);
--shadow-orange-lg:  0 8px 24px rgba(252, 128, 25, 0.35);
--shadow-orange-xl:  0 12px 36px rgba(252, 128, 25, 0.40);

/* Colored Glow Shadows */
--shadow-success:    0 4px 14px rgba(22, 163, 74, 0.30);
--shadow-danger:     0 4px 14px rgba(220, 38, 38, 0.30);
--shadow-gold:       0 4px 14px rgba(255, 184, 77, 0.35);

/* Inset Shadow — Used for input fields */
--shadow-inset:      inset 0 2px 4px rgba(0, 0, 0, 0.04);

/* Card Shadow — Default card elevation */
--shadow-card:       0 2px 8px rgba(0, 0, 0, 0.06), 0 0 1px rgba(0, 0, 0, 0.04);
--shadow-card-hover: 0 8px 24px rgba(0, 0, 0, 0.10), 0 2px 4px rgba(0, 0, 0, 0.04);
```

## 9.4 Glass Effects (Glassmorphism)

```css
/* Light Glass — Used for floating cards on orange backgrounds */
--glass-light: {
  background: rgba(255, 255, 255, 0.70);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.30);
}

/* Orange Glass — Used for overlay elements */
--glass-orange: {
  background: rgba(252, 128, 25, 0.15);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(252, 128, 25, 0.20);
}

/* Dark Glass — Used for dark mode overlays */
--glass-dark: {
  background: rgba(26, 26, 26, 0.70);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

/* Frosted Glass — Used for modals, popups */
--glass-frosted: {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.50);
}
```

## 9.5 Spacing System

Use an 8px base grid. All spacing values are multiples of 4px for fine control, with the primary scale based on 8px.

```css
--space-0:    0px;
--space-1:    4px;       /* 0.25rem */
--space-2:    8px;       /* 0.5rem  */
--space-3:    12px;      /* 0.75rem */
--space-4:    16px;      /* 1rem    */
--space-5:    20px;      /* 1.25rem */
--space-6:    24px;      /* 1.5rem  */
--space-8:    32px;      /* 2rem    */
--space-10:   40px;      /* 2.5rem  */
--space-12:   48px;      /* 3rem    */
--space-14:   56px;      /* 3.5rem  */
--space-16:   64px;      /* 4rem    */
--space-20:   80px;      /* 5rem    */
--space-24:   96px;      /* 6rem    */
--space-32:   128px;     /* 8rem    */
--space-40:   160px;     /* 10rem   */
--space-48:   192px;     /* 12rem   */
--space-56:   224px;     /* 14rem   */
--space-64:   256px;     /* 16rem   */
```

### Section Spacing

```css
--section-padding-y:         var(--space-24);    /* 96px — Vertical padding between homepage sections */
--section-padding-y-mobile:  var(--space-16);    /* 64px — Mobile vertical padding */
--section-gap:               var(--space-16);    /* 64px — Gap between section content blocks */
--container-padding-x:       var(--space-6);     /* 24px — Horizontal container padding */
--container-max-width:       1200px;              /* Maximum content width */
--container-max-width-narrow:900px;               /* Narrow content (text-heavy sections) */
```

## 9.6 Border Radius

```css
--radius-none:   0px;
--radius-xs:     2px;
--radius-sm:     4px;
--radius-md:     8px;
--radius-lg:     12px;
--radius-xl:     16px;
--radius-2xl:    20px;
--radius-3xl:    24px;
--radius-full:   9999px;   /* Pill shapes, circular elements */
```

### Usage Guidelines

| Element            | Radius              |
|--------------------|---------------------|
| Buttons            | `--radius-lg` (12px)|
| Cards              | `--radius-xl` (16px)|
| Input fields       | `--radius-md` (8px) |
| Badges             | `--radius-full`     |
| Modal              | `--radius-2xl` (20px)|
| Tooltips           | `--radius-md` (8px) |
| Avatar             | `--radius-full`     |
| Progress bars      | `--radius-full`     |

## 9.7 Z-Index Scale

```css
--z-behind:       -1;
--z-base:          0;
--z-dropdown:      10;
--z-sticky:        20;
--z-overlay:       30;
--z-modal:         40;
--z-popover:       50;
--z-toast:         60;
--z-tooltip:       70;
--z-confetti:      80;
--z-loading:       90;
--z-max:           100;
```

## 9.8 Complete CSS Custom Properties Block

All of the above tokens MUST be declared as CSS custom properties on the `:root` selector in the main CSS file. Every component MUST reference these tokens — never use hardcoded values.

---

# 10. Typography System

## 10.1 Font Family

### Primary Font: Inter

- **Source:** Google Fonts — `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap`
- **Use:** All body text, labels, buttons, navigation, descriptions
- **Fallback Stack:** `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`

### Display Font: Outfit

- **Source:** Google Fonts — `https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap`
- **Use:** Hero headlines, section titles, large display numbers (scores, timers, countdown)
- **Fallback Stack:** `'Outfit', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif`

### Monospace Font: JetBrains Mono

- **Source:** Google Fonts — `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap`
- **Use:** Timer display, score numbers, mathematical expressions, code-like elements
- **Fallback Stack:** `'JetBrains Mono', 'Fira Code', 'Courier New', monospace`

## 10.2 Type Scale

```css
--text-xs:     0.75rem;    /* 12px  — Captions, badges */
--text-sm:     0.875rem;   /* 14px  — Small text, metadata */
--text-base:   1rem;       /* 16px  — Body text */
--text-lg:     1.125rem;   /* 18px  — Large body text */
--text-xl:     1.25rem;    /* 20px  — Subheadings */
--text-2xl:    1.5rem;     /* 24px  — Card titles */
--text-3xl:    1.875rem;   /* 30px  — Section subtitles */
--text-4xl:    2.25rem;    /* 36px  — Section titles */
--text-5xl:    3rem;       /* 48px  — Page titles */
--text-6xl:    3.75rem;    /* 60px  — Hero title (desktop) */
--text-7xl:    4.5rem;     /* 72px  — Large display (desktop) */
--text-8xl:    6rem;       /* 96px  — Timer/score display */
--text-9xl:    8rem;       /* 128px — Giant display numbers */
```

## 10.3 Line Heights

```css
--leading-none:    1;        /* Display text, large headings */
--leading-tight:   1.2;      /* Headings */
--leading-snug:    1.375;    /* Subheadings */
--leading-normal:  1.5;      /* Body text default */
--leading-relaxed: 1.625;    /* Long-form body text */
--leading-loose:   2;        /* Very spaced text */
```

## 10.4 Font Weights

```css
--font-light:      300;
--font-regular:    400;
--font-medium:     500;
--font-semibold:   600;
--font-bold:       700;
--font-extrabold:  800;
--font-black:      900;
```

## 10.5 Letter Spacing

```css
--tracking-tighter:  -0.05em;   /* Large display headings */
--tracking-tight:    -0.025em;  /* Headings */
--tracking-normal:    0;        /* Body text */
--tracking-wide:      0.025em;  /* Uppercase labels, buttons */
--tracking-wider:     0.05em;   /* All-caps small text */
--tracking-widest:    0.1em;    /* Spaced-out decorative text */
```

## 10.6 Typography Classes

| Class / Use          | Font          | Size       | Weight    | Line Height | Letter Spacing | Example Use                        |
|----------------------|---------------|------------|-----------|-------------|----------------|------------------------------------|
| `.display-hero`      | Outfit        | `--text-7xl` | 800     | 1           | -0.05em        | Hero "NumericallyInclined" title             |
| `.display-large`     | Outfit        | `--text-6xl` | 700     | 1.1         | -0.025em       | Score on results page              |
| `.display-medium`    | Outfit        | `--text-5xl` | 700     | 1.1         | -0.025em       | Timer countdown number             |
| `.heading-1`         | Outfit        | `--text-4xl` | 700     | 1.2         | -0.025em       | Section titles (homepage)          |
| `.heading-2`         | Outfit        | `--text-3xl` | 600     | 1.2         | -0.025em       | Card group headings                |
| `.heading-3`         | Inter         | `--text-2xl` | 600     | 1.3         | 0              | Card titles                        |
| `.heading-4`         | Inter         | `--text-xl`  | 600     | 1.3         | 0              | Sub-section titles                 |
| `.body-large`        | Inter         | `--text-lg`  | 400     | 1.625       | 0              | Featured body text                 |
| `.body-base`         | Inter         | `--text-base`| 400     | 1.5         | 0              | Default body text                  |
| `.body-small`        | Inter         | `--text-sm`  | 400     | 1.5         | 0              | Secondary text, descriptions       |
| `.caption`           | Inter         | `--text-xs`  | 500     | 1.5         | 0.025em        | Metadata, timestamps               |
| `.label`             | Inter         | `--text-sm`  | 600     | 1           | 0.025em        | Form labels, button text           |
| `.overline`          | Inter         | `--text-xs`  | 600     | 1           | 0.1em          | Section overlines ("HOW IT WORKS") |
| `.mono-display`      | JetBrains Mono| `--text-8xl`| 700     | 1           | -0.05em        | Timer numbers, big scores          |
| `.mono-large`        | JetBrains Mono| `--text-4xl`| 600     | 1           | 0              | Question numbers                   |
| `.mono-base`         | JetBrains Mono| `--text-base`| 400    | 1.5         | 0              | Math expressions                   |

## 10.7 Responsive Typography

All font sizes MUST scale down on smaller screens. Use `clamp()` for fluid scaling:

```css
/* Hero title: 40px at 375px → 72px at 1440px */
.display-hero {
  font-size: clamp(2.5rem, 5vw + 1rem, 4.5rem);
}

/* Section titles: 28px at 375px → 36px at 1440px */
.heading-1 {
  font-size: clamp(1.75rem, 2vw + 1rem, 2.25rem);
}

/* Body text stays 16px, never smaller than 15px */
.body-base {
  font-size: clamp(0.9375rem, 1vw, 1rem);
}
```

---

# 11. Iconography

## 11.1 Icon Library

**Primary:** Lucide Icons (open-source, consistent, clean)
- Website: https://lucide.dev
- Integration: Inline SVG (NOT icon fonts)
- Reason: Best performance, accessible, styleable

**Secondary (Emoji-style):** For gamification elements, use custom SVG illustrations or Unicode emoji as fallback.

## 11.2 Icon Sizing

```css
--icon-xs:    14px;    /* Inline with small text */
--icon-sm:    16px;    /* Inline with body text */
--icon-md:    20px;    /* Buttons, nav items */
--icon-lg:    24px;    /* Standalone icons */
--icon-xl:    32px;    /* Feature icons */
--icon-2xl:   40px;    /* Section icons */
--icon-3xl:   48px;    /* Hero/illustration icons */
--icon-4xl:   64px;    /* Large decorative icons */
```

## 11.3 Icon Style Rules

- Stroke width: 2px (default Lucide)
- Color: Inherit from parent text color
- Interactive icons: Use `currentColor` so they inherit hover states
- Always include `aria-hidden="true"` on decorative icons
- Always include `aria-label` on functional icons (or use `<title>` in SVG)
- Icons in buttons: Place before text with 8px gap

## 11.4 Required Icons

| Context                | Icon Name          | Lucide Name         |
|------------------------|--------------------|---------------------|
| Home / Nav             | Home               | `home`              |
| Play / Start           | Play               | `play`              |
| Settings               | Settings           | `settings`          |
| Statistics             | Chart              | `bar-chart-3`       |
| Leaderboard            | Trophy             | `trophy`            |
| Achievements           | Award              | `award`             |
| Timer                  | Clock              | `clock`             |
| Correct Answer         | Check              | `check-circle`      |
| Wrong Answer           | X                  | `x-circle`          |
| Sound On               | Volume             | `volume-2`          |
| Sound Off              | Mute               | `volume-x`          |
| Music On               | Music              | `music`             |
| Music Off              | Music Off          | `music-off`         |
| Dark Mode              | Moon               | `moon`              |
| Light Mode             | Sun                | `sun`               |
| Back / Return          | Arrow Left         | `arrow-left`        |
| Next                   | Arrow Right        | `arrow-right`       |
| Close                  | X                  | `x`                 |
| Menu (mobile)          | Menu               | `menu`              |
| Profile                | User               | `user`              |
| Streak / Fire          | Flame              | `flame`             |
| Star                   | Star               | `star`              |
| Heart / Life           | Heart              | `heart`             |
| Info                   | Info               | `info`              |
| Question               | Help               | `help-circle`       |
| Refresh / Retry        | Refresh            | `refresh-cw`        |
| Share                  | Share              | `share-2`           |
| Download               | Download           | `download`          |
| Lock                   | Lock               | `lock`              |
| Unlock                 | Unlock             | `unlock`            |
| Lightning / Speed      | Zap                | `zap`               |
| Brain                  | Brain              | `brain`             |
| Target / Accuracy      | Target             | `target`            |
| Calendar               | Calendar           | `calendar`          |
| Coins                  | Coins              | `coins`             |
| Crown                  | Crown              | `crown`             |
| Sparkles               | Sparkles           | `sparkles`          |

---

# 12. Illustrations

## 12.1 Illustration Style

- **Style:** Flat design with subtle gradients, rounded shapes
- **Color Palette:** Strictly from the brand color system (orange-first)
- **Stroke:** Minimal or no strokes; rely on fill colors
- **Characters:** Friendly, diverse, gender-neutral where possible
- **Complexity:** Medium — detailed enough to feel premium, simple enough to load fast

## 12.2 Required Illustrations

| Location                  | Subject                              | Description                                               |
|---------------------------|--------------------------------------|-----------------------------------------------------------|
| Hero Section              | Abacus                               | Animated abacus illustration with orange beads, subtle movement |
| Hero Section              | Floating Math Symbols                | +, −, ×, ÷, =, %, √ floating with parallax effect       |
| How It Works              | Step Icons                           | 3-4 step illustrations showing the quiz flow              |
| Categories Section        | Category Icons                       | Unique icon for each math category (addition, subtraction, etc.) |
| Empty States              | No Data                              | Friendly illustration for "no quizzes played yet"         |
| Achievement Unlocked      | Trophy / Badge                       | Golden trophy or badge with sparkle effects               |
| 404 Page                  | Lost Character                       | Friendly character looking confused with math symbols     |
| Loading State             | Brain Loading                        | Brain icon with animated loading indicator                |
| Results — Perfect Score   | Celebration                          | Confetti, stars, and a happy character                    |
| Results — Needs Practice  | Encouragement                        | Character studying, motivational scene                    |

## 12.3 Floating Math Symbols (Hero)

Create SVG symbols for each of these mathematical operators and concepts:

```
+   −   ×   ÷   =   ≠   <   >   ≤   ≥
%   √   ²   ³   π   ∞   Σ   ∫   ∂   Δ
0   1   2   3   4   5   6   7   8   9
( )   [ ]   { }
```

Each symbol should:
- Be an individual SVG element
- Have randomized position, size (20px–60px), opacity (0.1–0.4), and rotation
- Float with a slow, continuous CSS animation (different duration per symbol: 8s–20s)
- Use orange color palette at low opacity
- Respect `prefers-reduced-motion` — disable floating in reduced motion mode

---

# 13. Motion Design

## 13.1 Animation Principles

1. **Purpose over decoration** — Every animation must serve a purpose (guide attention, provide feedback, indicate state change).
2. **Fast and snappy** — Animations should feel responsive, not sluggish. Most UI transitions: 200–300ms.
3. **Ease curves matter** — Use custom cubic-bezier curves, not linear.
4. **Respect user preferences** — Always check `prefers-reduced-motion` and reduce/disable animations.
5. **Performance first** — Only animate `transform` and `opacity`. Never animate `width`, `height`, `top`, `left`, or layout-triggering properties.

## 13.2 Easing Functions

```css
--ease-in:            cubic-bezier(0.4, 0, 1, 1);
--ease-out:           cubic-bezier(0, 0, 0.2, 1);
--ease-in-out:        cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce:        cubic-bezier(0.34, 1.56, 0.64, 1);
--ease-spring:        cubic-bezier(0.175, 0.885, 0.32, 1.275);
--ease-smooth:        cubic-bezier(0.25, 0.1, 0.25, 1);
--ease-snappy:        cubic-bezier(0.2, 0, 0, 1);
```

## 13.3 Duration Scale

```css
--duration-instant:   50ms;     /* Immediate feedback (active states) */
--duration-fast:      150ms;    /* Hover states, toggles */
--duration-normal:    250ms;    /* Standard transitions */
--duration-moderate:  350ms;    /* Complex transitions */
--duration-slow:      500ms;    /* Page transitions, modals */
--duration-slower:    700ms;    /* Elaborate animations */
--duration-slowest:   1000ms;   /* Hero animations, celebrations */
```

## 13.4 Standard Transition

```css
/* Default transition for interactive elements */
--transition-default: all var(--duration-normal) var(--ease-out);

/* Specific transitions */
--transition-colors:   color var(--duration-fast) var(--ease-out),
                       background-color var(--duration-fast) var(--ease-out),
                       border-color var(--duration-fast) var(--ease-out);
--transition-opacity:  opacity var(--duration-normal) var(--ease-out);
--transition-shadow:   box-shadow var(--duration-normal) var(--ease-out);
--transition-transform:transform var(--duration-normal) var(--ease-out);
```

## 13.5 Keyframe Animations

### Page Load Animations

```css
/* Fade in from below — Used for section content appearing on scroll */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Fade in from above */
@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Fade in with scale — Used for cards, modals */
@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Slide in from right — Used for page transitions */
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Slide in from left */
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-60px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```

### Interactive Animations

```css
/* Pulse — Used for CTA buttons, attention-drawing elements */
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(252, 128, 25, 0.4);
  }
  50% {
    transform: scale(1.02);
    box-shadow: 0 0 0 12px rgba(252, 128, 25, 0);
  }
}

/* Shake — Used for wrong answer feedback */
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
  20%, 40%, 60%, 80% { transform: translateX(4px); }
}

/* Bounce — Used for correct answer feedback */
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  30% { transform: translateY(-12px); }
  50% { transform: translateY(-6px); }
  70% { transform: translateY(-3px); }
}

/* Wiggle — Used for streak icon */
@keyframes wiggle {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
}

/* Spin — Used for loading indicators */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Float — Used for hero decorative elements */
@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-15px) rotate(2deg);
  }
  50% {
    transform: translateY(-8px) rotate(-1deg);
  }
  75% {
    transform: translateY(-20px) rotate(1deg);
  }
}
```

### Gamification Animations

```css
/* XP Gain — Number floats up and fades */
@keyframes xpGain {
  0% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateY(-50px) scale(1.2);
  }
}

/* Level Up — Scale + glow */
@keyframes levelUp {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* Achievement Badge Unlock */
@keyframes badgeUnlock {
  0% {
    transform: scale(0) rotate(-180deg);
    opacity: 0;
  }
  60% {
    transform: scale(1.15) rotate(10deg);
    opacity: 1;
  }
  100% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
}

/* Confetti Particle */
@keyframes confettiFall {
  0% {
    transform: translateY(-100vh) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) rotate(720deg);
    opacity: 0;
  }
}

/* Progress Ring Fill */
@keyframes progressFill {
  from {
    stroke-dashoffset: var(--circumference);
  }
  to {
    stroke-dashoffset: var(--target-offset);
  }
}

/* Streak Flame */
@keyframes flamePulse {
  0%, 100% {
    transform: scale(1) rotate(0deg);
    filter: brightness(1);
  }
  25% {
    transform: scale(1.05) rotate(-2deg);
    filter: brightness(1.1);
  }
  50% {
    transform: scale(1.1) rotate(1deg);
    filter: brightness(1.2);
  }
  75% {
    transform: scale(1.03) rotate(-1deg);
    filter: brightness(1.05);
  }
}
```

### Countdown Animations

```css
/* Countdown Number */
@keyframes countdownPop {
  0% {
    transform: scale(2);
    opacity: 0;
  }
  30% {
    transform: scale(1);
    opacity: 1;
  }
  70% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.5);
    opacity: 0;
  }
}

/* Timer Urgency Pulse — when timer is low */
@keyframes urgentPulse {
  0%, 100% {
    color: var(--danger);
    transform: scale(1);
  }
  50% {
    color: var(--danger-dark);
    transform: scale(1.05);
  }
}
```

## 13.6 Scroll-Triggered Animations

Use the Intersection Observer API to trigger animations when elements enter the viewport.

### Implementation Rules

```javascript
const observerOptions = {
  root: null,
  rootMargin: '0px 0px -80px 0px',  // Trigger 80px before element enters
  threshold: 0.15                     // 15% of element must be visible
};
```

### Stagger Behavior

When multiple elements in a group animate in (e.g., feature cards), stagger them:
- Base delay: 0ms for first item
- Increment: 100ms per subsequent item
- Maximum total stagger: 500ms (i.e., max 6 items staggered)

```css
.stagger-item:nth-child(1) { animation-delay: 0ms; }
.stagger-item:nth-child(2) { animation-delay: 100ms; }
.stagger-item:nth-child(3) { animation-delay: 200ms; }
.stagger-item:nth-child(4) { animation-delay: 300ms; }
.stagger-item:nth-child(5) { animation-delay: 400ms; }
.stagger-item:nth-child(6) { animation-delay: 500ms; }
```

## 13.7 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  /* Keep essential functional animations */
  .loading-spinner {
    animation-duration: 1s !important;
  }
}
```

---

# 14. Micro Interactions

Every interactive element must have micro interactions that provide immediate tactile feedback.

## 14.1 Buttons

### Primary Button (Orange CTA)

| State     | Visual Change                                                          | Duration |
|-----------|------------------------------------------------------------------------|----------|
| Default   | Orange background, white text, medium shadow                           | —        |
| Hover     | Slightly darker orange, larger shadow, scale(1.02)                     | 150ms    |
| Active    | Even darker orange, reduced shadow, scale(0.98)                        | 50ms     |
| Focus     | Orange outline ring (3px offset) for keyboard users                    | instant  |
| Disabled  | 50% opacity, cursor: not-allowed, no hover effects                    | —        |
| Loading   | Show spinner, text changes to "Loading...", pointer-events: none       | —        |

### Secondary Button

| State     | Visual Change                                                          | Duration |
|-----------|------------------------------------------------------------------------|----------|
| Default   | White/transparent background, orange border, orange text               | —        |
| Hover     | Light orange background fill, scale(1.02)                              | 150ms    |
| Active    | Slightly darker orange background, scale(0.98)                         | 50ms     |
| Focus     | Orange outline ring                                                     | instant  |

### Ghost Button

| State     | Visual Change                                                          | Duration |
|-----------|------------------------------------------------------------------------|----------|
| Default   | Transparent background, text color only                                | —        |
| Hover     | Very light orange background                                            | 150ms    |
| Active    | Slightly darker background                                              | 50ms     |

## 14.2 Cards

| State     | Visual Change                                                          | Duration |
|-----------|------------------------------------------------------------------------|----------|
| Default   | White background, subtle shadow                                        | —        |
| Hover     | Elevated shadow, translateY(-4px), subtle border color change          | 250ms    |
| Active    | Slightly less elevated than hover, translateY(-2px)                    | 100ms    |

## 14.3 Answer Options (Quiz)

| State     | Visual Change                                                          | Duration |
|-----------|------------------------------------------------------------------------|----------|
| Default   | White background, light border                                         | —        |
| Hover     | Orange border, light orange background, scale(1.01)                    | 150ms    |
| Selected  | Orange border, orange light background, checkmark icon                 | 150ms    |
| Correct   | Green border, green background, checkmark, bounce animation            | 300ms    |
| Wrong     | Red border, red background, X icon, shake animation                    | 300ms    |
| Disabled  | Greyed out, no pointer events                                          | —        |

## 14.4 Input Fields

| State     | Visual Change                                                          | Duration |
|-----------|------------------------------------------------------------------------|----------|
| Default   | Light border, white background                                         | —        |
| Hover     | Slightly darker border                                                 | 150ms    |
| Focus     | Orange border, orange glow shadow, label floats up                     | 200ms    |
| Error     | Red border, red glow, error message appears below                      | 200ms    |
| Success   | Green border, green checkmark                                          | 200ms    |

## 14.5 Toggle Switches

| State     | Visual Change                                                          | Duration |
|-----------|------------------------------------------------------------------------|----------|
| Off       | Grey track, white circle on left                                       | —        |
| On        | Orange track, white circle slides to right, scale bounce               | 250ms    |

## 14.6 Navigation Items

| State     | Visual Change                                                          | Duration |
|-----------|------------------------------------------------------------------------|----------|
| Default   | Normal text color                                                      | —        |
| Hover     | Orange text, underline slides in from left                             | 200ms    |
| Active    | Bold weight, orange text, persistent underline                         | —        |

## 14.7 Progress Bars

| State           | Visual Change                                                    | Duration |
|-----------------|------------------------------------------------------------------|----------|
| Loading         | Animated gradient shimmer moves left to right                    | 1500ms   |
| Filling         | Bar width increases smoothly                                     | 500ms    |
| Complete        | Pulse glow effect                                                | 500ms    |

## 14.8 Achievement Badge

| State           | Visual Change                                                    | Duration |
|-----------------|------------------------------------------------------------------|----------|
| Locked          | Greyscale, lock icon overlay                                     | —        |
| Unlocking       | Rotate + scale animation, golden glow, particles                 | 800ms    |
| Unlocked        | Full color, subtle continuous glow                               | —        |

## 14.9 Score Counter

When score increases:
1. Number rolls up (counting animation) — 300ms
2. "+XP" text floats up and fades — 600ms
3. Subtle green flash on the score container — 200ms

## 14.10 Streak Counter

When streak increases:
1. Flame icon wiggles — 400ms
2. Number bumps up with spring easing — 300ms
3. Orange glow pulse around the container — 500ms

---

# 15. Complete UX Guidelines

## 15.1 Core UX Principles

1. **Zero Learning Curve** — A first-time user should be able to start a quiz within 5 seconds of landing on the site.
2. **One Primary Action Per Screen** — Every screen has one obvious thing the user should do next.
3. **Constant Feedback** — The user should never wonder "did that work?" Every action gets immediate visual and (optionally) audio feedback.
4. **Forgiveness** — Allow undo where possible. Confirm destructive actions. Don't punish mistakes.
5. **Predictability** — Same patterns, same places. Buttons look like buttons. Links look like links.

## 15.2 Loading States

Every async operation must show a loading state:

| Scenario                    | Loading UI                                              |
|-----------------------------|---------------------------------------------------------|
| Page load                   | Skeleton screens with shimmer animation                 |
| Button action               | Button shows spinner, text changes, pointer-events: none|
| Data fetch                  | Skeleton placeholders for content                       |
| Image loading               | Blurred placeholder → sharp image transition            |
| Quiz generation             | "Generating your quiz..." with animated brain icon      |

### Skeleton Screen Specification

```css
.skeleton {
  background: linear-gradient(
    90deg,
    var(--neutral-200) 25%,
    var(--neutral-100) 50%,
    var(--neutral-200) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: var(--radius-md);
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

## 15.3 Empty States

Every section that can be empty must have a friendly empty state:

| Context                     | Empty State Content                                     |
|-----------------------------|---------------------------------------------------------|
| No quizzes played           | Illustration + "Your journey starts here. Take your first quiz!" + CTA |
| No achievements             | Locked badge illustration + "Complete quizzes to unlock achievements!" |
| No leaderboard data         | Trophy illustration + "Be the first to top the leaderboard!" |
| No statistics               | Chart illustration + "Play a few quizzes to see your stats!" |

## 15.4 Error States

| Error Type                  | UI Response                                              |
|-----------------------------|----------------------------------------------------------|
| Network error               | Toast notification: "No internet connection. Don't worry, your progress is saved!" |
| Invalid input               | Inline error below input, field border turns red         |
| Quiz generation error       | Full-screen friendly error with retry button             |
| 404 page                    | Custom 404 with illustration and "Go Home" button        |

## 15.5 Confirmation Dialogs

Required before:
- Resetting progress (destructive)
- Exiting a quiz in progress
- Changing settings that affect current quiz

Dialog design:
- Modal overlay with backdrop blur
- Clear title describing the action
- Descriptive body text explaining consequences
- Two buttons: Cancel (secondary) + Confirm (primary/danger)
- Escape key closes without confirming
- Click outside closes without confirming

## 15.6 Toast Notifications

Position: Bottom-center on mobile, bottom-right on desktop.

| Type      | Color          | Icon         | Duration  |
|-----------|----------------|--------------|-----------|
| Success   | Green          | Check Circle | 3 seconds |
| Error     | Red            | X Circle     | 5 seconds |
| Warning   | Yellow/Amber   | Alert        | 4 seconds |
| Info      | Blue           | Info         | 3 seconds |
| Achievement| Gold/Orange   | Award        | 5 seconds |

Behavior:
- Slide in from bottom
- Auto-dismiss after duration
- Swipe to dismiss (mobile)
- Click X to dismiss (desktop)
- Stack up to 3 toasts; oldest dismisses when 4th arrives

## 15.7 Form UX

- Labels always visible (above input, not placeholder-only)
- Validate on blur, not on every keystroke
- Show validation state (green check / red error) after first blur
- Number inputs: Use `inputmode="numeric"` (NOT `type="number"`) for mobile numeric keypad
- Auto-focus the answer input when a question appears
- Submit on Enter key

## 15.8 Touch Target Sizes

- Minimum touch target: 44×44px (WCAG 2.5.5)
- Recommended touch target: 48×48px
- Spacing between touch targets: minimum 8px

---

# 16. User Journey

## 16.1 First-Time User Journey

```
1. User lands on homepage
   └── Sees hero section with animated math symbols
   └── Reads "Master Mental Maths One Question At A Time."
   └── Scrolls through sections to learn about NumericallyInclined

2. Clicks "Start Quiz" (hero CTA)
   └── Transitions to Difficulty Selection screen

3. Selects difficulty (e.g., "Beginner")
   └── Transitions to Instructions screen

4. Reads instructions, clicks "Start"
   └── 3-2-1 countdown animation

5. Answers 10 questions
   └── Gets immediate feedback (correct/wrong) per question
   └── Sees progress bar, timer, score updating in real-time

6. Quiz ends → Results Screen
   └── Sees score, accuracy, time, XP earned
   └── Achievement unlocked: "First Steps" 🏆
   └── Options: Play Again, View Leaderboard, Go Home

7. Views Leaderboard
   └── Sees their position (likely low, motivating improvement)

8. Returns to homepage
   └── Stats section now shows their data
   └── Encouraged to try again tomorrow
```

## 16.2 Returning User Journey

```
1. User returns to homepage
   └── Homepage remembers them (localStorage)
   └── "Welcome back!" personalization
   └── Daily Challenge badge glows if not completed today

2. Clicks Daily Challenge
   └── Unique set of questions for today
   └── Completing maintains streak

3. After quiz, checks Statistics
   └── Sees progress over time
   └── Identifies weak areas (e.g., Division accuracy: 62%)

4. Chooses Practice Mode → Division → Adaptive difficulty
   └── Focused practice on weak area

5. Over time:
   └── Unlocks achievements
   └── Climbs leaderboard
   └── Maintains streaks
   └── Explores harder difficulties
```

## 16.3 Flow Diagram

```
                    ┌─────────────┐
                    │  HOMEPAGE   │
                    │ (scrolling) │
                    └──────┬──────┘
                           │
                    ┌──────▼──────┐
                    │  DIFFICULTY  │
                    │  SELECTION   │
                    └──────┬──────┘
                           │
                    ┌──────▼──────┐
                    │ INSTRUCTIONS │
                    └──────┬──────┘
                           │
                    ┌──────▼──────┐
                    │  COUNTDOWN   │
                    │   3...2...1  │
                    └──────┬──────┘
                           │
                    ┌──────▼──────┐
                    │    QUIZ      │◄────────┐
                    │  (question   │         │
                    │   by question)│        │
                    └──────┬──────┘         │
                           │                │
                    ┌──────▼──────┐         │
                    │   RESULTS    │         │
                    │   SCREEN     │         │
                    └──────┬──────┘         │
                           │                │
              ┌────────────┼───────────┐    │
              │            │           │    │
       ┌──────▼──┐  ┌──────▼──┐  ┌────▼──┐│
       │LEADERBOARD│ │ACHIEVEMENTS│ │ PLAY  ││
       │          │  │          │  │ AGAIN ├┘
       └──────────┘  └──────────┘  └───────┘
```

---

# 17. Navigation

## 17.1 Homepage Navigation (Navbar)

The homepage features a **fixed/sticky navbar** at the top of the viewport.

### Desktop Navbar Layout

```
┌─────────────────────────────────────────────────────────────────┐
│  [Logo]  NumericallyInclined     Home  Features  How It Works  FAQ    [Start Quiz] │
└─────────────────────────────────────────────────────────────────┘
```

- **Left:** Logo + "NumericallyInclined" text
- **Center/Right:** Navigation links (smooth-scroll to homepage sections)
- **Far Right:** "Start Quiz" CTA button (primary orange)

### Navbar Behavior

| Scroll State           | Behavior                                                    |
|------------------------|-------------------------------------------------------------|
| Top of page (0–100px)  | Transparent background, white text (on hero gradient)       |
| Scrolled (>100px)      | White background, shadow, dark text, glass effect           |
| Transition             | Smooth 250ms background/color transition                    |

### Mobile Navbar

```
┌───────────────────────────────┐
│  [Logo]              [☰ Menu] │
└───────────────────────────────┘
```

- Hamburger menu icon on right
- Opens full-screen overlay menu with links
- Menu slides in from right with backdrop blur
- Close button (X) in top-right
- Navigation links stacked vertically, large touch targets

### Navbar Links (Smooth Scroll)

| Link Label      | Scrolls To            |
|-----------------|-----------------------|
| Home            | Hero section          |
| Features        | Features section      |
| How It Works    | How It Works section  |
| Categories      | Categories section    |
| FAQ             | FAQ section           |

## 17.2 Quiz Navigation

During the quiz experience (Difficulty → Instructions → Quiz → Results), navigation is **linear and controlled**:

- **Back button** in top-left to return to previous step
- **No navbar** during active quiz (minimize distractions)
- **Minimal UI** during questions — just the question, timer, and answer area
- **Exit button** (X) in top-right corner → confirmation dialog → back to homepage

## 17.3 Navigation Transitions

Page-to-page transitions within the quiz flow:
- Forward: Slide in from right, 350ms, ease-out
- Backward: Slide in from left, 350ms, ease-out
- Content fades in within the sliding container

---

# 18. Homepage Specification

> **CRITICAL: The homepage MUST be a single, long-scrolling page. All sections below exist on the same `index.html` page, accessed by scrolling.**

## 18.0 Page Meta

```html
<title>NumericallyInclined — Master Mental Maths One Question At A Time</title>
<meta name="description" content="NumericallyInclined is a free, premium mental maths training platform. Practice addition, subtraction, multiplication, division, and more with gamified quizzes, daily challenges, and adaptive difficulty.">
<meta name="keywords" content="mental maths, math quiz, brain training, arithmetic practice, math games, mental calculation">
<meta name="theme-color" content="#FC8019">
```

---

## 18.1 Section: Hero

### Layout

Full viewport height (`100vh`). Orange gradient background. Content centered vertically and horizontally.

### Content (Top to Bottom)

1. **Quote Block**
   - Text: *"The only way to learn mathematics is to do mathematics."*
   - Attribution: *— Paul Halmos —*
   - Style: Italic, `--text-lg`, white text, subtle opacity (0.9)
   - Position: Above the main title, with `--space-8` margin below

2. **Logo / Title: "NumericallyInclined"**
   - Font: Outfit, `--font-black` (900), `.display-hero` size
   - Color: White
   - Text shadow: `0 4px 20px rgba(0, 0, 0, 0.15)`
   - Optional: Animated gradient text effect

3. **Subtitle**
   - Text: "Master Mental Maths One Question At A Time."
   - Font: Inter, `--text-xl`, `--font-medium`
   - Color: White (opacity 0.95)
   - Max-width: 600px, centered

4. **CTA Button: "Start Quiz"**
   - Size: Large (min-width 220px, height 56px)
   - Style: White background, orange text, large border-radius, prominent shadow
   - Hover: Scale up, stronger shadow
   - Icon: Play icon (▶) before text
   - Margin-top: `--space-10`

5. **Secondary Action** (Optional)
   - Text link: "Learn More ↓" — smooth scrolls to "Why NumericallyInclined" section
   - Color: White, underline on hover

### Decorative Elements

6. **Floating Mathematical Symbols**
   - 15–25 math symbols scattered across the hero
   - Each with unique: position, size, opacity (0.1–0.3), rotation, animation-duration (8s–20s)
   - Float animation (see Motion Design section)
   - Colors: White at various opacities
   - Must not overlap with text content
   - z-index below text content

7. **Animated Abacus Illustration**
   - Position: Right side on desktop, below text on mobile
   - Style: Flat illustration with orange-toned beads
   - Animation: Beads slide gently left-right on a subtle loop
   - Size: ~300px wide on desktop, ~200px on mobile

### Hero Background

```css
.hero {
  background: var(--gradient-hero);
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Subtle pattern overlay for texture */
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 50%);
  pointer-events: none;
}
```

### Hero Responsive Behavior

| Breakpoint | Layout Change                                                   |
|------------|------------------------------------------------------------------|
| Desktop    | Text left-center, abacus right; horizontal layout               |
| Tablet     | Text centered, abacus below at reduced size                     |
| Mobile     | Text centered, abacus hidden or very small below CTA            |

---

## 18.2 Section: Why NumericallyInclined

### Purpose
Explain the value proposition. Why should someone use NumericallyInclined?

### Content

**Section Overline:** "WHY NUMERICALLYINCLINED"
**Section Title:** "Why Train Your Mental Maths?"
**Section Subtitle:** "In a world of calculators, a sharp mind is your superpower."

### Content Cards (3 cards in a row on desktop, stacked on mobile)

| Card | Icon          | Title                    | Description                                                            |
|------|---------------|--------------------------|------------------------------------------------------------------------|
| 1    | Brain         | Sharpen Your Mind        | Mental maths strengthens neural pathways, improving overall cognitive function and problem-solving skills. |
| 2    | Zap           | Think Faster             | Speed up your everyday calculations — from splitting bills to estimating discounts in seconds. |
| 3    | Target        | Build Confidence         | Mastering numbers eliminates maths anxiety and builds unshakeable confidence in your abilities. |

### Card Design
- White background
- Subtle border (1px, `--neutral-200`)
- Large icon in orange circle at top
- Bold title
- Body description text
- Hover: lift + shadow increase
- Scroll-triggered: fade-in-up with stagger

---

## 18.3 Section: Benefits

### Purpose
List the concrete benefits of using NumericallyInclined specifically.

**Section Overline:** "BENEFITS"
**Section Title:** "What You'll Get"

### Benefits List (Grid: 2 columns desktop, 1 column mobile)

| #  | Icon      | Title                       | Description                                                            |
|----|-----------|-----------------------------|------------------------------------------------------------------------|
| 1  | Sparkles  | 17+ Question Types          | From basic arithmetic to BODMAS, square roots, and mental estimation. |
| 2  | Layers    | 7 Difficulty Levels         | From Beginner to Master, with an adaptive mode that adjusts to you.   |
| 3  | Trophy    | Gamified Experience         | Earn XP, unlock achievements, maintain streaks, and climb leaderboards.|
| 4  | Clock     | Flexible Timer Options      | Choose from 5s to unlimited — practice at your own pace or race the clock.|
| 5  | Wifi-Off  | Works Offline               | Install as a PWA and practice anywhere, even without internet.         |
| 6  | Chart     | Detailed Statistics         | Track accuracy, speed, streaks, and progress across every category.    |
| 7  | Moon      | Dark Mode                   | Easy on the eyes for late-night practice sessions.                     |
| 8  | Smartphone| Fully Responsive            | Beautiful on every device — phone, tablet, laptop, or ultrawide.       |

---

## 18.4 Section: Features

### Purpose
Showcase the main features with visual flair.

**Section Overline:** "FEATURES"
**Section Title:** "Packed With Powerful Features"

### Feature Showcases

Display as alternating left-right layout (image left + text right, then text left + image right):

#### Feature 1: Adaptive Learning
- **Image/Illustration:** Brain with neural pathways lighting up
- **Title:** "Adaptive Learning"
- **Description:** "NumericallyInclined analyzes your performance in real-time and adjusts question difficulty to keep you in the optimal learning zone — challenging enough to grow, comfortable enough to stay motivated."

#### Feature 2: Daily Challenges
- **Image/Illustration:** Calendar with flame icon
- **Title:** "Daily Challenges"
- **Description:** "A fresh set of questions every day. Complete the daily challenge to maintain your streak and earn bonus XP. Come back tomorrow for a new challenge!"

#### Feature 3: Rich Statistics
- **Image/Illustration:** Dashboard with charts and graphs
- **Title:** "Rich Statistics"
- **Description:** "Deep dive into your performance with accuracy breakdowns by category, average response times, progress charts, and personal bests. Knowledge is power."

#### Feature 4: Achievements & Rewards
- **Image/Illustration:** Trophy case with golden badges
- **Title:** "Achievements & Rewards"
- **Description:** "Unlock over 50 achievements as you progress. From 'First Steps' to 'Speed Demon' to 'Maths Master' — collect them all and show off your badges."

---

## 18.5 Section: How It Works

### Purpose
Simple 4-step guide showing how easy it is to start.

**Section Overline:** "HOW IT WORKS"
**Section Title:** "Get Started in Seconds"

### Steps (Horizontal on desktop, vertical on mobile)

```
   ①              ②               ③               ④
Choose         Read           Answer          View
Difficulty     Instructions   Questions       Results
   │               │               │               │
   ▼               ▼               ▼               ▼
 Pick your     Quick overview   Race the      See your
 level from    of the rules    clock and     score, XP,
 Beginner      and get ready   test your     and climb
 to Master     to begin        skills        the ranks
```

| Step | Number | Title              | Description                                        | Icon       |
|------|--------|--------------------|----------------------------------------------------|------------|
| 1    | 01     | Choose Difficulty  | Pick your comfort level — from Beginner to Master  | Sliders    |
| 2    | 02     | Read Instructions  | Quick overview of the rules and format              | Book Open  |
| 3    | 03     | Answer Questions   | Race the clock and test your mental maths skills    | Brain      |
| 4    | 04     | View Results       | See your score, earn XP, and track your progress    | Trophy     |

### Design
- Connected by a decorative line/path between steps
- Numbers in large orange circles
- Icons inside step cards
- Scroll-triggered: Each step fades in sequentially with stagger

---

## 18.6 Section: Learning Journey

### Purpose
Show the progression path from beginner to master.

**Section Overline:** "YOUR JOURNEY"
**Section Title:** "From Beginner to Maths Master"

### Visual: Vertical timeline / roadmap

```
🟢 Beginner ──── "Start here. Simple single-digit operations."
     │
🔵 Easy ──────── "Two-digit operations. Building speed."
     │
🟡 Medium ────── "Multi-digit operations. Fractions & decimals."
     │
🟠 Hard ──────── "Complex operations. BODMAS. Patterns."
     │
🔴 Expert ────── "Advanced mental maths. Speed under pressure."
     │
🟣 Master ────── "The ultimate challenge. Only the best reach here."
     │
⚡ Adaptive ──── "AI-adjusted difficulty that grows with you."
```

Each level shows:
- Level name and color badge
- Brief description
- Number range (e.g., "Numbers 1–10")
- Operation types available
- Estimated skill level

---

## 18.7 Section: Categories

### Purpose
Display all 17 question types as browsable category cards.

**Section Overline:** "CATEGORIES"
**Section Title:** "17+ Question Types to Master"
**Section Subtitle:** "From basic arithmetic to advanced mental maths"

### Category Cards Grid (4 columns desktop, 2 columns tablet, 1 column mobile)

| Category          | Icon              | Color Accent     | Example Question       |
|-------------------|-------------------|------------------|------------------------|
| Addition          | Plus               | Orange           | 47 + 38 = ?           |
| Subtraction       | Minus              | Blue             | 83 − 29 = ?           |
| Multiplication    | X (multiply)       | Green            | 12 × 7 = ?            |
| Division          | Divide             | Purple           | 96 ÷ 8 = ?            |
| Fractions         | Pie Chart          | Teal             | 1/3 + 1/6 = ?         |
| Decimals          | Dot                | Indigo           | 3.7 + 2.45 = ?        |
| Percentages       | Percent            | Amber            | 25% of 120 = ?        |
| Squares           | Square (²)         | Rose             | 13² = ?               |
| Square Roots      | √ symbol           | Emerald          | √144 = ?              |
| Cubes             | Cube (³)           | Sky              | 5³ = ?                |
| Cube Roots        | ∛ symbol           | Violet           | ∛216 = ?              |
| Number Patterns   | Trending Up        | Lime             | 2, 6, 18, 54, ?       |
| Missing Numbers   | Puzzle Piece        | Fuchsia          | 12 × ? = 84           |
| BODMAS            | Brackets           | Cyan             | 5 + 3 × 4 − 2 = ?    |
| Mental Estimation | Approximate        | Coral            | ≈ 497 + 312 = ?       |
| Rapid Fire        | Zap                | Red              | Quick mixed questions  |
| Random Mix        | Shuffle            | Gold             | All types combined     |

### Card Design
- Square-ish cards with category icon prominently displayed
- Category name below icon
- Example question in lighter text
- Hover: scale up, shadow increase, border color changes to category accent
- Click: Could navigate to a filtered quiz (future feature — for now, visual only)

---

## 18.8 Section: Daily Challenge

### Purpose
Promote the daily challenge feature to drive returning visits.

**Section Overline:** "DAILY CHALLENGE"
**Section Title:** "Today's Challenge Awaits"

### Content
- Large card/banner with a countdown to next challenge reset (midnight)
- Shows today's challenge difficulty and question count
- "Take Today's Challenge" CTA button
- If completed: Shows a checkmark and "Completed! Come back tomorrow."
- Streak counter: "🔥 Current Streak: X Days"

### Design
- Orange gradient background (lighter than hero)
- Large section, high visual prominence
- Timer counting down to midnight: HH:MM:SS
- Animated flame icon if streak > 0

---

## 18.9 Section: Leaderboard Preview

### Purpose
Show a preview of the leaderboard to motivate competition.

**Section Overline:** "LEADERBOARD"
**Section Title:** "Top Performers"

### Content
- Tab switcher: Daily | Weekly | Monthly | All Time
- Top 5 entries shown in a stylized list
- Each entry shows: Rank (1-5), Avatar (initial-based), Username, Score, Accuracy
- Top 3 get special styling (gold/silver/bronze)
- "View Full Leaderboard" link at bottom

### Placeholder Data (for initial build)
Generate mock leaderboard data with realistic names and scores. Data format:

```javascript
const mockLeaderboard = [
  { rank: 1, name: "MathsWizard", score: 98750, accuracy: 97, avatar: "M" },
  { rank: 2, name: "NumberNinja", score: 94200, accuracy: 95, avatar: "N" },
  { rank: 3, name: "CalcKing", score: 91800, accuracy: 93, avatar: "C" },
  { rank: 4, name: "QuickMind", score: 88450, accuracy: 91, avatar: "Q" },
  { rank: 5, name: "BrainPower", score: 85100, accuracy: 89, avatar: "B" },
];
```

### Design
- Clean table/list design
- Rank #1: Gold accent, slightly larger
- Rank #2: Silver accent
- Rank #3: Bronze accent
- Hover effect on rows
- Scroll-triggered animation: Rows slide in from left with stagger

---

## 18.10 Section: Statistics Preview

### Purpose
Show a preview of the statistics dashboard to demonstrate the tracking capabilities.

**Section Overline:** "TRACK YOUR PROGRESS"
**Section Title:** "Detailed Performance Analytics"

### Content
- Mock statistics dashboard showing:
  - Accuracy gauge (circular progress ring) — e.g., 87%
  - Average Time per question — e.g., 3.2s
  - Best Streak — e.g., 24
  - Games Played — e.g., 142
  - Questions Answered — e.g., 1,420
  - Category Performance Bar Chart (horizontal bars showing accuracy per category)

### Design
- Grid of stat cards
- Circular progress rings animated on scroll
- Numbers count up on scroll (using Intersection Observer)
- Bar chart animates bars growing to their values on scroll
- White cards on surface background

---

## 18.11 Section: Achievements Preview

### Purpose
Showcase the achievement system to motivate users.

**Section Overline:** "ACHIEVEMENTS"
**Section Title:** "Collect Them All"

### Content
- Grid of achievement badges (show 8–12)
- Mix of locked (greyscale) and unlocked (colorful) badges
- Each badge has: Icon, Name, Description, XP Reward

### Sample Achievements to Display

| Badge Name       | Icon     | Description                           | XP    | Shown As |
|------------------|----------|---------------------------------------|-------|----------|
| First Steps      | 🎯       | Complete your first quiz              | 50    | Unlocked |
| Speed Demon      | ⚡       | Answer 10 questions in under 30s     | 200   | Unlocked |
| Perfect Score    | ⭐       | Get 100% accuracy on any quiz        | 300   | Unlocked |
| Streak Starter   | 🔥       | Maintain a 3-day streak              | 150   | Unlocked |
| Century          | 💯       | Answer 100 questions correctly        | 500   | Locked   |
| Night Owl        | 🦉       | Complete a quiz after 10 PM          | 100   | Locked   |
| Early Bird       | 🐦       | Complete a quiz before 7 AM          | 100   | Locked   |
| Maths Master     | 👑       | Reach Master difficulty              | 1000  | Locked   |
| Unstoppable      | 🔥       | 30-day streak                        | 2000  | Locked   |
| All-Rounder      | 🎲       | Play every category at least once    | 500   | Locked   |
| Lightning        | ⚡       | Average under 2s per question        | 750   | Locked   |
| Perfectionist    | 💎       | 10 perfect scores in a row           | 1500  | Locked   |

### Design
- Responsive grid: 4 columns desktop, 3 tablet, 2 mobile
- Unlocked badges: Full color, subtle glow
- Locked badges: Greyscale, lock overlay icon, slightly blurred
- Hover on unlocked: Scale up with golden glow
- Hover on locked: Show "Keep playing to unlock!" tooltip

---

## 18.12 Section: Testimonials

### Purpose
Social proof to build trust and credibility.

**Section Overline:** "WHAT USERS SAY"
**Section Title:** "Loved by Maths Enthusiasts"

### Content
Carousel / slider of testimonial cards (auto-scroll with manual controls).

### Testimonials Data

| Name            | Role                | Quote                                                                                                  | Rating |
|-----------------|---------------------|--------------------------------------------------------------------------------------------------------|--------|
| Arjun S.        | Student, Grade 10   | "NumericallyInclined made me fall in love with maths! My calculation speed improved by 3x in just two weeks."    | 5/5    |
| Sarah M.        | Parent              | "My daughter asks to play NumericallyInclined instead of watching YouTube. That says everything!"                 | 5/5    |
| David L.        | Retired Engineer    | "I do the daily challenge every morning with my coffee. It's the perfect brain warm-up."               | 5/5    |
| Priya K.        | Primary Teacher     | "I project NumericallyInclined on the classroom screen. My students fight over who gets to answer first!"         | 5/5    |
| Alex R.         | Software Developer  | "The gamification is addictive. I've maintained a 47-day streak and I'm not stopping now."             | 5/5    |
| Maya T.         | University Student  | "Helped me ace the quantitative section of the GRE. The adaptive difficulty is brilliant."              | 5/5    |

### Card Design
- White card with subtle shadow
- Large opening quotation mark (decorative, orange)
- Quote text in italic
- User name, role below
- Star rating (5 orange stars)
- Avatar circle with user's initial

### Carousel Behavior
- Auto-scroll every 5 seconds
- Pause on hover
- Manual navigation: Left/Right arrows + dot indicators
- Smooth sliding transition (500ms)
- Loop infinitely
- Show 1 card on mobile, 2 on tablet, 3 on desktop

---

## 18.13 Section: FAQ

### Purpose
Address common questions to reduce hesitation and support needs.

**Section Overline:** "FAQ"
**Section Title:** "Frequently Asked Questions"

### FAQ Items (Accordion)

| Question                                              | Answer                                                                                                                                                              |
|-------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Is NumericallyInclined free to use?                              | Yes! NumericallyInclined is completely free. No ads, no hidden fees, no subscription required. Practice as much as you want.                                                   |
| Does it work offline?                                 | Yes! NumericallyInclined is a Progressive Web App (PWA). Install it on your device and practice even without an internet connection. Your progress is saved locally.           |
| What age group is NumericallyInclined for?                       | NumericallyInclined is designed for everyone — from 7-year-old students to adults. The difficulty levels range from Beginner (single-digit) to Master (advanced mental maths). |
| How does adaptive difficulty work?                    | Our adaptive system monitors your accuracy and response time in real-time. If you're getting questions right quickly, it increases difficulty. If you're struggling, it eases up to keep you learning without frustration. |
| Is my progress saved?                                 | Yes! All your progress, statistics, achievements, and streaks are saved in your browser's local storage. As long as you use the same browser, your data persists.   |
| Can I use NumericallyInclined in the classroom?                  | Absolutely! NumericallyInclined is perfect for classroom warm-ups. Project it on a screen and let students answer together. We're working on a dedicated classroom mode.       |
| What topics does NumericallyInclined cover?                      | NumericallyInclined covers 17+ question types including addition, subtraction, multiplication, division, fractions, decimals, percentages, squares, square roots, cubes, cube roots, number patterns, BODMAS, and more. |
| How is the leaderboard calculated?                    | Leaderboard scores are calculated based on a combination of correct answers, accuracy percentage, and speed. Higher difficulty questions earn more points.           |

### Accordion Behavior
- Only one item open at a time (closing others)
- Smooth height transition (300ms)
- Plus/Minus icon rotates on open/close
- Orange left border on open item
- Click anywhere on the question row to toggle

---

## 18.14 Section: Footer

### Layout

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   NumericallyInclined                    Quick Links     Resources         │
│   Master Mental Maths         Home            FAQ               │
│   One Question At A Time.     Features        Privacy Policy    │
│                               How It Works    Terms of Service  │
│   [Social Icons]              Categories      Contact           │
│                               Leaderboard                       │
│                                                                 │
│─────────────────────────────────────────────────────────────────│
│   © 2026 NumericallyInclined. Made with ♥ and a lot of mental maths.     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Footer Design
- Dark background (`--neutral-900` or `--gradient-dark`)
- White/light text
- Orange accent for links and hover states
- Logo and tagline on the left
- Navigation links organized in columns
- Social icons (placeholder SVGs for Twitter/X, GitHub, LinkedIn)
- Copyright notice at bottom
- Separator line above copyright
- Padding: `--space-16` top, `--space-8` bottom

---

# 19. Quiz Flow

## 19.1 Complete Flow State Machine

```
HOME ─→ DIFFICULTY_SELECT ─→ INSTRUCTIONS ─→ COUNTDOWN ─→ QUIZ_ACTIVE ─→ RESULTS
                                                                            │
                                                              ┌─────────────┤
                                                              │             │
                                                         LEADERBOARD  ACHIEVEMENTS
                                                              │             │
                                                              └──────┬──────┘
                                                                     │
                                                                PLAY_AGAIN ─→ DIFFICULTY_SELECT
```

## 19.2 Difficulty Selection Screen

### Layout
Full-screen view with centered content.

### Header
- Back button (← arrow) to return to homepage
- Title: "Choose Your Level"
- Subtitle: "Select a difficulty that matches your skill"

### Difficulty Cards (Vertical list or grid)

| Level      | Color Badge  | Label     | Number Range  | Description                              |
|------------|-------------|-----------|---------------|------------------------------------------|
| Beginner   | 🟢 Green    | Beginner  | 1 – 10        | "Perfect for starting out. Single digits."|
| Easy       | 🔵 Blue     | Easy      | 1 – 50        | "Building confidence with larger numbers."|
| Medium     | 🟡 Yellow   | Medium    | 1 – 100       | "Two-digit operations. Time to focus."    |
| Hard       | 🟠 Orange   | Hard      | 1 – 500       | "Multi-digit maths. Getting serious."     |
| Expert     | 🔴 Red      | Expert    | 1 – 1000      | "Complex problems. Speed under pressure." |
| Master     | 🟣 Purple   | Master    | 1 – 9999      | "The ultimate test. Only the best."       |
| Adaptive   | ⚡ Gold      | Adaptive  | Dynamic       | "AI-adjusted. Grows with you."            |

### Card Design
- Horizontal card with color badge on left
- Title, description, and number range
- Hover: border becomes badge color, slight lift
- Click: selects and transitions to Instructions
- Previously played difficulties show a small "Played" badge

## 19.3 Instructions Screen

### Layout
Clean, focused screen.

### Content
- Title: "Ready to Begin?"
- Difficulty badge showing selected level
- Instructions list:
  1. "You'll get **10 questions** at **[Difficulty]** level."
  2. "Each question has **4 answer options**."
  3. "You have **[Timer]** seconds per question." (or "Unlimited time" if no timer)
  4. "Earn **XP** for correct answers. Bonus XP for speed!"
  5. "Try to maintain your streak for bonus rewards."
- Settings quick-access: Timer, Question Count, Operations (expandable)
- Large "Start Quiz" button (primary orange)
- "Change Difficulty" link (secondary, goes back)

## 19.4 Countdown Screen

### Layout
Full-screen, centered content, orange gradient background.

### Animation Sequence

```
[3] ─── 1 second ─── [2] ─── 1 second ─── [1] ─── 1 second ─── [GO!]
```

Each number:
- Appears at scale(2), opacity 0
- Animates to scale(1), opacity 1 over 300ms
- Holds for 400ms
- Animates to scale(0.5), opacity 0 over 300ms
- "GO!" appears with extra bounce and stays for 500ms before transitioning to quiz

Sound: Tick sound on each number, higher-pitched "ding" on "GO!"

## 19.5 Quiz Active Screen

### Layout

```
┌─────────────────────────────────────────────┐
│  [← Back]          Q 3/10          [⏱ 15s] │
│                                              │
│  ████████░░░░░░░░░░░░  (Progress Bar 30%)   │
│                                              │
│                                              │
│         What is 47 + 38?                    │
│                                              │
│                                              │
│    ┌──────────┐    ┌──────────┐              │
│    │    75    │    │    85    │              │
│    └──────────┘    └──────────┘              │
│    ┌──────────┐    ┌──────────┐              │
│    │    95    │    │    82    │              │
│    └──────────┘    └──────────┘              │
│                                              │
│    Score: 240      Streak: 🔥 3              │
│                                              │
└─────────────────────────────────────────────┘
```

### Elements

1. **Top Bar**
   - Back button (with exit confirmation)
   - Question counter: "Q 3/10"
   - Timer display (monospace font, large, counts down)
   - Timer color changes: Green (>50% time) → Yellow (25-50%) → Red (<25%, pulsing)

2. **Progress Bar**
   - Full width, thin (4px), below top bar
   - Orange fill, grows with each question
   - Smooth width transition

3. **Question Area**
   - Question text: Large, centered, bold
   - Math expression: Monospace font for numbers
   - Sufficient whitespace around question

4. **Answer Options**
   - 2×2 grid (desktop) or vertical stack (mobile)
   - Large touch targets (minimum 64px height)
   - Clear text, centered
   - Labeled A, B, C, D (keyboard shortcuts)
   - Hover: orange border
   - Selected: orange fill
   - After selection, immediately show correct/wrong state

5. **Answer Feedback** (shown for 1.5 seconds after answering)
   - Correct: Option turns green, checkmark appears, "+10 XP" floats up, optional confetti burst
   - Wrong: Selected option turns red and shakes. Correct option highlighted in green. Brief explanation shown if applicable.
   - Timeout: All options disable, correct answer highlighted. "Time's up!" message.

6. **Score Bar** (bottom)
   - Current score (animates counting up)
   - Current streak with flame icon

### Keyboard Support

| Key     | Action                        |
|---------|-------------------------------|
| 1 / A   | Select option A               |
| 2 / B   | Select option B               |
| 3 / C   | Select option C               |
| 4 / D   | Select option D               |
| Enter   | Confirm selection / Next      |
| Escape  | Exit quiz (with confirmation) |

## 19.6 Results Screen

### Layout

```
┌─────────────────────────────────────────────┐
│                                              │
│            🎉 Quiz Complete! 🎉             │
│                                              │
│              ┌──────────┐                    │
│              │   8/10   │  (Large score)     │
│              │  Score   │                    │
│              └──────────┘                    │
│                                              │
│   ┌─────────┐ ┌──────────┐ ┌──────────┐    │
│   │ 80%     │ │ 3.2s     │ │ 240 XP   │    │
│   │Accuracy │ │ Avg Time │ │ Earned   │    │
│   └─────────┘ └──────────┘ └──────────┘    │
│                                              │
│   Best Streak: 5   |   Coins Earned: 30     │
│                                              │
│   ┌─────────────────────────────────────┐   │
│   │  🏆 Achievement Unlocked!          │   │
│   │  "Speed Demon" — +200 XP           │   │
│   └─────────────────────────────────────┘   │
│                                              │
│  [Play Again]  [Leaderboard]  [Home]        │
│                                              │
└─────────────────────────────────────────────┘
```

### Elements

1. **Header Animation**
   - Confetti burst on load (if score ≥ 70%)
   - "Quiz Complete!" with scale-in animation
   - Encouraging subtitle based on score:
     - 100%: "PERFECT! You're a genius! 🧠"
     - 90-99%: "Outstanding! Almost flawless! ⭐"
     - 80-89%: "Great job! You're getting sharper! 💪"
     - 70-79%: "Good work! Keep practicing! 👍"
     - 50-69%: "Not bad! Room for improvement! 📈"
     - < 50%: "Keep going! Practice makes perfect! 🌟"

2. **Score Display**
   - Large circular progress ring showing score percentage
   - Number inside counts up from 0 to final score (counting animation)
   - Ring animates filling to the percentage

3. **Stats Cards**
   - Accuracy percentage
   - Average time per question
   - XP earned (with breakdown: base + speed bonus + streak bonus)
   - Coins earned
   - Best streak in this quiz

4. **Achievement Card** (if any unlocked)
   - Golden border, sparkle effects
   - Badge icon + name + XP reward
   - Animate in with badge unlock animation

5. **Question Review** (Expandable section)
   - List of all questions with:
     - Question text
     - User's answer (highlighted green if correct, red if wrong)
     - Correct answer (if user was wrong)
     - Time taken for each question

6. **Action Buttons**
   - "Play Again" (primary, orange) → Goes to Difficulty Selection
   - "View Leaderboard" (secondary)
   - "Go Home" (text link)
   - "Share Results" (optional — generates a shareable image/text)

---

# 20. Quiz Modes

## 20.1 Practice Mode

| Property          | Value                                                  |
|-------------------|--------------------------------------------------------|
| **Purpose**       | Stress-free practice with no timer pressure            |
| **Timer**         | Unlimited (default), optional timer available          |
| **Questions**     | User-selected count (5, 10, 15, 20)                   |
| **Feedback**      | Immediate — shows correct answer and explanation       |
| **XP**            | Standard XP, no speed bonus                           |
| **Leaderboard**   | Does NOT count toward leaderboard                      |
| **Retry**         | Can retry missed questions at end                      |

## 20.2 Learn Mode

| Property          | Value                                                  |
|-------------------|--------------------------------------------------------|
| **Purpose**       | Educational mode with hints and explanations           |
| **Timer**         | Unlimited                                              |
| **Questions**     | 10 per session                                         |
| **Feedback**      | Detailed — shows step-by-step solution                 |
| **Hints**         | Available — one hint per question (reduces XP by 50%)  |
| **XP**            | Reduced XP (learning-focused, not performance)         |
| **Leaderboard**   | Does NOT count toward leaderboard                      |

## 20.3 Speed Test

| Property          | Value                                                  |
|-------------------|--------------------------------------------------------|
| **Purpose**       | Test raw calculation speed                             |
| **Timer**         | Per-question timer (5s, 10s, or 15s)                   |
| **Questions**     | 20 questions                                           |
| **Feedback**      | Brief — correct/wrong flash, no explanation            |
| **XP**            | High XP with speed bonus multiplier                    |
| **Leaderboard**   | Counts toward leaderboard                              |
| **Special**       | Score = correct answers × speed multiplier             |

## 20.4 Exam Mode

| Property          | Value                                                  |
|-------------------|--------------------------------------------------------|
| **Purpose**       | Simulate a real exam environment                       |
| **Timer**         | Total quiz timer (not per-question)                    |
| **Questions**     | 30 questions                                           |
| **Feedback**      | None during quiz — all feedback shown at end           |
| **Navigation**    | Can go back and change answers                         |
| **XP**            | High XP with accuracy bonus                            |
| **Leaderboard**   | Counts toward leaderboard                              |
| **Special**       | No sound effects. Minimal UI. Focus mode.              |

## 20.5 Daily Challenge

| Property          | Value                                                  |
|-------------------|--------------------------------------------------------|
| **Purpose**       | Daily habit-forming challenge                          |
| **Timer**         | Per-question (10s)                                     |
| **Questions**     | 10 questions (unique set each day, seeded by date)     |
| **Difficulty**    | Medium (fixed)                                         |
| **Feedback**      | Immediate                                              |
| **XP**            | Bonus XP (1.5× multiplier)                            |
| **Streak**        | Completing increments daily streak counter             |
| **Leaderboard**   | Daily leaderboard                                      |
| **Reset**         | New challenge at midnight (user's local time)          |
| **Limit**         | One attempt per day                                    |

## 20.6 Weekly Challenge

| Property          | Value                                                  |
|-------------------|--------------------------------------------------------|
| **Purpose**       | Longer-form weekly challenge                           |
| **Timer**         | Per-question (15s)                                     |
| **Questions**     | 25 questions (unique set each week)                    |
| **Difficulty**    | Hard                                                   |
| **XP**            | Bonus XP (2× multiplier)                              |
| **Reset**         | Every Monday at midnight                               |
| **Limit**         | One attempt per week                                   |

## 20.7 Random Challenge

| Property          | Value                                                  |
|-------------------|--------------------------------------------------------|
| **Purpose**       | Surprise mix of question types and difficulties        |
| **Timer**         | Random (5s–20s per question)                           |
| **Questions**     | 15 questions                                           |
| **Types**         | Random mix of all 17 categories                        |
| **Difficulty**    | Random per question                                    |
| **XP**            | Variable (higher difficulty questions = more XP)       |

## 20.8 Adaptive Learning

| Property          | Value                                                  |
|-------------------|--------------------------------------------------------|
| **Purpose**       | Personalized learning that adjusts to user level       |
| **Timer**         | Dynamic (starts at 15s, adjusts based on performance)  |
| **Questions**     | 15 questions                                           |
| **Algorithm**     | Start at user's historical average difficulty. If 3 correct in a row → increase difficulty. If 2 wrong in a row → decrease difficulty. |
| **XP**            | Standard with accuracy bonus                           |
| **Data**          | Feeds into user's performance profile                  |

---

# 21. Question Types

## 21.1 Complete Question Type Specifications

Each question type specifies: category name, ID, operation rules, number ranges per difficulty, question format, answer generation, and distractor (wrong answer) generation.

### Addition

| Property          | Value                                                  |
|-------------------|--------------------------------------------------------|
| **ID**            | `addition`                                             |
| **Display Name**  | "Addition"                                             |
| **Symbol**        | +                                                      |
| **Format**        | "What is A + B?"                                       |
| **Answer**        | A + B                                                  |

**Number Ranges by Difficulty:**

| Difficulty | A Range   | B Range   | Example         |
|------------|-----------|-----------|-----------------|
| Beginner   | 1–9       | 1–9       | 3 + 5 = ?       |
| Easy       | 10–50     | 1–50      | 23 + 17 = ?     |
| Medium     | 10–100    | 10–100    | 47 + 63 = ?     |
| Hard       | 100–500   | 100–500   | 234 + 378 = ?   |
| Expert     | 100–1000  | 100–1000  | 567 + 834 = ?   |
| Master     | 1000–9999 | 1000–9999 | 4521 + 3789 = ? |

**Distractor Generation:**
- Generate 3 wrong answers within ±20% of correct answer
- Ensure no two options are identical
- Ensure no negative options for addition
- Shuffle all 4 options randomly

---

### Subtraction

| Property          | Value                                                  |
|-------------------|--------------------------------------------------------|
| **ID**            | `subtraction`                                          |
| **Display Name**  | "Subtraction"                                          |
| **Symbol**        | −                                                      |
| **Format**        | "What is A − B?"                                       |
| **Answer**        | A − B                                                  |
| **Constraint**    | A ≥ B (no negative answers at Beginner/Easy)           |

**Number Ranges by Difficulty:**

| Difficulty | A Range   | B Range   | Negative OK? |
|------------|-----------|-----------|--------------|
| Beginner   | 1–9       | 1–A       | No           |
| Easy       | 10–50     | 1–A       | No           |
| Medium     | 10–100    | 1–A       | No           |
| Hard       | 100–500   | 1–500     | Yes          |
| Expert     | 100–1000  | 1–1000    | Yes          |
| Master     | 1000–9999 | 1–9999    | Yes          |

---

### Multiplication

| Property          | Value                                                  |
|-------------------|--------------------------------------------------------|
| **ID**            | `multiplication`                                       |
| **Display Name**  | "Multiplication"                                       |
| **Symbol**        | ×                                                      |
| **Format**        | "What is A × B?"                                       |
| **Answer**        | A × B                                                  |

**Number Ranges by Difficulty:**

| Difficulty | A Range   | B Range   | Example         |
|------------|-----------|-----------|-----------------|
| Beginner   | 1–5       | 1–5       | 3 × 4 = ?       |
| Easy       | 2–10      | 2–10      | 7 × 8 = ?       |
| Medium     | 2–12      | 2–12      | 11 × 9 = ?      |
| Hard       | 10–25     | 2–15      | 17 × 13 = ?     |
| Expert     | 10–50     | 10–50     | 34 × 27 = ?     |
| Master     | 25–99     | 25–99     | 67 × 43 = ?     |

---

### Division

| Property          | Value                                                  |
|-------------------|--------------------------------------------------------|
| **ID**            | `division`                                             |
| **Display Name**  | "Division"                                             |
| **Symbol**        | ÷                                                      |
| **Format**        | "What is A ÷ B?"                                       |
| **Answer**        | A ÷ B                                                  |
| **Constraint**    | A must be evenly divisible by B (whole number answers)  |

**Generation Algorithm:**
1. Pick answer C in the range for difficulty
2. Pick B in the range for difficulty
3. A = B × C
4. Question: "What is A ÷ B?"
5. Correct answer: C

**Ranges by Difficulty:**

| Difficulty | C Range   | B Range   | Example          |
|------------|-----------|-----------|------------------|
| Beginner   | 1–5       | 1–5       | 12 ÷ 3 = ?      |
| Easy       | 1–10      | 2–10      | 56 ÷ 7 = ?      |
| Medium     | 1–12      | 2–12      | 132 ÷ 11 = ?    |
| Hard       | 10–25     | 5–20      | 360 ÷ 15 = ?    |
| Expert     | 10–50     | 10–50     | 1250 ÷ 25 = ?   |
| Master     | 25–99     | 15–99     | 5742 ÷ 78 = ?   |

---

### Fractions

| Property          | Value                                                  |
|-------------------|--------------------------------------------------------|
| **ID**            | `fractions`                                            |
| **Display Name**  | "Fractions"                                            |
| **Format**        | "What is a/b + c/d?" or "What is a/b − c/d?"          |
| **Answer**        | Simplified fraction or decimal                         |

**Operations by Difficulty:**

| Difficulty | Operations        | Denominator Range | Example              |
|------------|-------------------|-------------------|----------------------|
| Beginner   | Addition only     | 2–4               | 1/2 + 1/4 = ?       |
| Easy       | Add / Subtract    | 2–6               | 2/3 + 1/6 = ?       |
| Medium     | Add / Sub / Mult  | 2–10              | 3/5 × 2/3 = ?       |
| Hard       | All four          | 2–12              | 5/8 ÷ 3/4 = ?       |
| Expert     | Mixed operations  | 2–20              | 7/15 + 3/10 = ?     |
| Master     | Complex mixed     | 2–50              | 13/17 × 5/8 − 1/4 = ? |

**Answer Format:** Display as simplified fraction. Accept decimal equivalent.

---

### Decimals

| Property          | Value                                                  |
|-------------------|--------------------------------------------------------|
| **ID**            | `decimals`                                             |
| **Display Name**  | "Decimals"                                             |
| **Format**        | "What is A.xx + B.xx?"                                 |

**Ranges by Difficulty:**

| Difficulty | Decimal Places | Number Range | Example            |
|------------|----------------|--------------|--------------------|
| Beginner   | 1              | 0.1–9.9      | 2.5 + 3.1 = ?     |
| Easy       | 1              | 0.1–50.0     | 12.7 + 8.4 = ?    |
| Medium     | 2              | 0.01–100.00  | 23.45 + 17.89 = ? |
| Hard       | 2              | Operations ×/÷ | 3.7 × 4.2 = ?   |
| Expert     | 2–3            | 0.001–999    | 45.678 − 12.345 = ? |
| Master     | 2–3            | Mixed ops    | 12.5 × 3.4 ÷ 2 = ? |

---

### Percentages

| Property          | Value                                                  |
|-------------------|--------------------------------------------------------|
| **ID**            | `percentages`                                          |
| **Display Name**  | "Percentages"                                          |
| **Format**        | "What is X% of Y?"                                     |

**Ranges by Difficulty:**

| Difficulty | Percentage     | Base Number  | Example            |
|------------|----------------|--------------|--------------------|
| Beginner   | 10, 25, 50, 100 | 10–100     | 50% of 80 = ?     |
| Easy       | 10, 20, 25, 50, 75 | 10–200  | 25% of 120 = ?    |
| Medium     | 5–95 (step 5)  | 10–500       | 35% of 240 = ?    |
| Hard       | 1–99           | 50–1000      | 17% of 350 = ?    |
| Expert     | 1–150          | 100–5000     | 125% of 840 = ?   |
| Master     | Any            | Any          | 37.5% of 1200 = ? |

---

### Squares

| Property          | Value                                                  |
|-------------------|--------------------------------------------------------|
| **ID**            | `squares`                                              |
| **Display Name**  | "Squares"                                              |
| **Format**        | "What is N²?"                                          |

| Difficulty | N Range   | Example      |
|------------|-----------|--------------|
| Beginner   | 1–5       | 3² = ?       |
| Easy       | 1–10      | 8² = ?       |
| Medium     | 1–15      | 13² = ?      |
| Hard       | 10–25     | 19² = ?      |
| Expert     | 15–50     | 37² = ?      |
| Master     | 25–99     | 67² = ?      |

---

### Square Roots

| Property          | Value                                                  |
|-------------------|--------------------------------------------------------|
| **ID**            | `square_roots`                                         |
| **Display Name**  | "Square Roots"                                         |
| **Format**        | "What is √N?"                                          |
| **Constraint**    | N must be a perfect square                             |

| Difficulty | Answer Range | N Range      | Example       |
|------------|-------------|--------------|---------------|
| Beginner   | 1–5         | 1–25         | √9 = ?        |
| Easy       | 1–10        | 1–100        | √64 = ?       |
| Medium     | 1–15        | 1–225        | √169 = ?      |
| Hard       | 10–25       | 100–625      | √361 = ?      |
| Expert     | 15–50       | 225–2500     | √1369 = ?     |
| Master     | 25–99       | 625–9801     | √4489 = ?     |

---

### Cubes

| Property          | Value                                                  |
|-------------------|--------------------------------------------------------|
| **ID**            | `cubes`                                                |
| **Display Name**  | "Cubes"                                                |
| **Format**        | "What is N³?"                                          |

| Difficulty | N Range   | Example      |
|------------|-----------|--------------|
| Beginner   | 1–3       | 2³ = ?       |
| Easy       | 1–5       | 4³ = ?       |
| Medium     | 1–8       | 6³ = ?       |
| Hard       | 5–12      | 9³ = ?       |
| Expert     | 8–20      | 15³ = ?      |
| Master     | 10–30     | 23³ = ?      |

---

### Cube Roots

| Property          | Value                                                  |
|-------------------|--------------------------------------------------------|
| **ID**            | `cube_roots`                                           |
| **Display Name**  | "Cube Roots"                                           |
| **Format**        | "What is ∛N?"                                          |
| **Constraint**    | N must be a perfect cube                               |

| Difficulty | Answer Range | Example       |
|------------|-------------|---------------|
| Beginner   | 1–3         | ∛8 = ?        |
| Easy       | 1–5         | ∛64 = ?       |
| Medium     | 1–8         | ∛216 = ?      |
| Hard       | 5–12        | ∛729 = ?      |
| Expert     | 8–20        | ∛3375 = ?     |
| Master     | 10–30       | ∛12167 = ?    |

---

### Number Patterns

| Property          | Value                                                  |
|-------------------|--------------------------------------------------------|
| **ID**            | `number_patterns`                                      |
| **Display Name**  | "Number Patterns"                                      |
| **Format**        | "What comes next? A, B, C, D, ?"                       |

**Pattern Types:**
- Arithmetic progression: +N each step
- Geometric progression: ×N each step
- Square numbers: 1, 4, 9, 16, ?
- Fibonacci-like: Each number = sum of previous two
- Alternating: +A, −B, +A, −B, ...
- Factorial: 1, 2, 6, 24, ?

**By Difficulty:**

| Difficulty | Pattern Complexity | Show N Terms | Example                    |
|------------|-------------------|--------------|----------------------------|
| Beginner   | Simple arithmetic (+1, +2) | 4   | 2, 4, 6, 8, ?             |
| Easy       | Arithmetic (+3 to +10) | 4        | 5, 10, 15, 20, ?          |
| Medium     | Geometric (×2, ×3) | 4           | 3, 9, 27, 81, ?           |
| Hard       | Mixed patterns    | 5            | 1, 4, 9, 16, 25, ?        |
| Expert     | Complex patterns  | 5            | 2, 6, 18, 54, ?           |
| Master     | Multi-rule patterns| 5           | 1, 1, 2, 3, 5, 8, ?       |

---

### Missing Numbers

| Property          | Value                                                  |
|-------------------|--------------------------------------------------------|
| **ID**            | `missing_numbers`                                      |
| **Display Name**  | "Missing Numbers"                                      |
| **Format**        | "A ○ ? = C" or "? ○ B = C"                            |

Where ○ is +, −, ×, or ÷

**By Difficulty:**

| Difficulty | Operations | Number Range | Example            |
|------------|-----------|--------------|---------------------|
| Beginner   | +, −      | 1–10         | 3 + ? = 7           |
| Easy       | +, −      | 1–50         | ? + 15 = 32         |
| Medium     | +, −, ×   | 1–100        | 12 × ? = 84         |
| Hard       | All four  | 1–200        | ? ÷ 7 = 13          |
| Expert     | All four  | 1–500        | 234 − ? = 89        |
| Master     | All four  | 1–9999       | ? × 37 = 1369       |

---

### BODMAS / Order of Operations

| Property          | Value                                                  |
|-------------------|--------------------------------------------------------|
| **ID**            | `bodmas`                                               |
| **Display Name**  | "BODMAS"                                               |
| **Format**        | "Evaluate: expression"                                 |

**By Difficulty:**

| Difficulty | Operations | Terms | Brackets | Example                    |
|------------|-----------|-------|----------|----------------------------|
| Beginner   | +, ×      | 3     | No       | 5 + 3 × 2 = ?             |
| Easy       | +, −, ×   | 3     | No       | 10 − 2 × 3 = ?            |
| Medium     | All       | 3–4   | Optional | (5 + 3) × 4 = ?           |
| Hard       | All       | 4–5   | Yes      | (8 + 2) × (6 − 3) = ?     |
| Expert     | All + pow | 4–5   | Yes      | 4² + (10 − 3) × 2 = ?     |
| Master     | All       | 5–6   | Nested   | ((4 + 6) × 3 − 10) ÷ 4 = ? |

---

### Mental Estimation

| Property          | Value                                                  |
|-------------------|--------------------------------------------------------|
| **ID**            | `mental_estimation`                                    |
| **Display Name**  | "Mental Estimation"                                    |
| **Format**        | "Approximately, what is A ○ B?"                        |
| **Answer Style**  | Closest option to exact answer (options are rounded)   |

**By Difficulty:**

| Difficulty | Number Range  | Example                     | Options                     |
|------------|---------------|-----------------------------|-----------------------------|
| Beginner   | 10–100        | ≈ 48 + 33 = ?              | 70, 80, 90, 100            |
| Easy       | 100–500       | ≈ 198 + 312 = ?            | 400, 500, 600, 700         |
| Medium     | 100–1000      | ≈ 497 × 3 = ?              | 1200, 1500, 1800, 2100     |
| Hard       | 1000–10000    | ≈ 4,820 + 3,190 = ?        | 7000, 8000, 9000, 10000    |
| Expert     | Complex       | ≈ 33% of 892 = ?           | 250, 300, 350, 400         |
| Master     | Very Complex  | ≈ √1567 = ?                | 35, 40, 45, 50             |

---

### Rapid Fire

| Property          | Value                                                  |
|-------------------|--------------------------------------------------------|
| **ID**            | `rapid_fire`                                           |
| **Display Name**  | "Rapid Fire"                                           |
| **Format**        | Rapid mix of simple questions from all categories       |
| **Timer**         | Forced: 5 seconds per question                         |
| **Questions**     | 20 questions                                           |
| **Special**       | Consecutive correct answers increase score multiplier   |

---

### Random Mix

| Property          | Value                                                  |
|-------------------|--------------------------------------------------------|
| **ID**            | `random_mix`                                           |
| **Display Name**  | "Random Mix"                                           |
| **Format**        | Randomly selects from all 16 other categories           |
| **Distribution**  | Roughly equal distribution across categories            |
| **Difficulty**    | Follows the user's selected difficulty level            |

## 21.2 Distractor (Wrong Answer) Generation Rules

For ALL question types, wrong answers (distractors) must:

1. **Be plausible** — Close to the correct answer, not obviously wrong
2. **Be unique** — No two options should be the same value
3. **Not include the correct answer twice**
4. **Follow the correct answer's format** — If answer is a fraction, distractors are fractions
5. **Be within a reasonable range** — Typically ±10% to ±30% of correct answer
6. **Not be negative** if the question type doesn't produce negative answers (Beginner/Easy)
7. **Include common mistake answers** where possible (e.g., for BODMAS, include the answer you'd get without following order of operations)

### Algorithm:

```javascript
function generateDistractors(correctAnswer, count = 3) {
  const distractors = new Set();
  const range = Math.max(Math.abs(correctAnswer * 0.3), 5);

  // Common mistake: off by one
  distractors.add(correctAnswer + 1);
  distractors.add(correctAnswer - 1);

  // Random distractors in range
  while (distractors.size < count) {
    const offset = Math.floor(Math.random() * range * 2) - range;
    const distractor = correctAnswer + offset;
    if (distractor !== correctAnswer && distractor !== 0) {
      distractors.add(distractor);
    }
  }

  return [...distractors].slice(0, count);
}
```

---

# 22. Difficulty System

## 22.1 Difficulty Levels

| Level    | ID          | Color    | Badge     | Number Range | Timer Modifier | XP Multiplier | Description                            |
|----------|-------------|----------|-----------|--------------|----------------|---------------|----------------------------------------|
| Beginner | `beginner`  | `#16A34A`| 🟢       | 1–10         | ×2 (double)    | 0.5×          | Single-digit operations                |
| Easy     | `easy`      | `#3B82F6`| 🔵       | 1–50         | ×1.5           | 0.75×         | Two-digit operations                   |
| Medium   | `medium`    | `#EAB308`| 🟡       | 1–100        | ×1 (standard)  | 1.0×          | Multi-digit with all operations        |
| Hard     | `hard`      | `#F97316`| 🟠       | 1–500        | ×0.8           | 1.5×          | Complex operations                     |
| Expert   | `expert`    | `#EF4444`| 🔴       | 1–1000       | ×0.6           | 2.0×          | Advanced maths, speed pressure         |
| Master   | `master`    | `#8B5CF6`| 🟣       | 1–9999       | ×0.5 (half)    | 3.0×          | Maximum difficulty                     |
| Adaptive | `adaptive`  | `#F59E0B`| ⚡       | Dynamic      | Dynamic        | Variable      | Auto-adjusting                         |

## 22.2 Adaptive Algorithm

```javascript
class AdaptiveDifficulty {
  constructor() {
    this.currentLevel = 3;  // Start at Medium (0-indexed: 0=Beginner...5=Master)
    this.consecutiveCorrect = 0;
    this.consecutiveWrong = 0;
  }

  recordAnswer(isCorrect, responseTimeMs) {
    if (isCorrect) {
      this.consecutiveCorrect++;
      this.consecutiveWrong = 0;

      // Fast + correct = increase faster
      if (this.consecutiveCorrect >= 3 || (this.consecutiveCorrect >= 2 && responseTimeMs < 3000)) {
        this.increaseLevel();
        this.consecutiveCorrect = 0;
      }
    } else {
      this.consecutiveWrong++;
      this.consecutiveCorrect = 0;

      // Two wrong = decrease
      if (this.consecutiveWrong >= 2) {
        this.decreaseLevel();
        this.consecutiveWrong = 0;
      }
    }
  }

  increaseLevel() {
    this.currentLevel = Math.min(this.currentLevel + 1, 5);
  }

  decreaseLevel() {
    this.currentLevel = Math.max(this.currentLevel - 1, 0);
  }
}
```

---

# 23. Timer System

## 23.1 Timer Options

| Timer Value | Label       | Use Case                                              |
|-------------|-------------|-------------------------------------------------------|
| 5           | 5 seconds   | Rapid Fire, Expert+ speed runs                        |
| 10          | 10 seconds  | Standard timed quiz                                   |
| 15          | 15 seconds  | Comfortable timed practice                            |
| 20          | 20 seconds  | Relaxed timed practice                                |
| 30          | 30 seconds  | Extended thinking time                                |
| 0/null      | Unlimited   | Practice mode, no time pressure                       |

## 23.2 Timer Behavior

### Visual Display
- Monospace font, large display
- Counts DOWN from the set time
- Shows one decimal place for seconds under 5 (e.g., "4.3")
- Color transitions: Green → Yellow → Red as time decreases

### Color Thresholds

| Time Remaining   | Color            | Animation           |
|------------------|------------------|----------------------|
| > 50% of total   | Green (`#16A34A`) | None                |
| 25%–50%          | Yellow (`#EAB308`)| None                |
| 10%–25%          | Orange (`#FC8019`)| Subtle pulse        |
| < 10%            | Red (`#DC2626`)   | Urgent pulse + shake|

### Timer Events

| Event             | Trigger                    | Response                                   |
|-------------------|----------------------------|--------------------------------------------|
| Timer warning     | 25% time remaining         | Color change + subtle audio tick            |
| Timer urgent      | 10% time remaining         | Red color + pulsing + urgent ticking        |
| Timer expired     | 0 seconds                  | Question auto-skipped, marked as wrong, "Time's up!" toast |

### Timer in Exam Mode
- Single total timer for entire quiz (not per-question)
- Shows remaining time for entire exam
- Same color thresholds but based on total time

## 23.3 Speed Bonus XP

```javascript
function calculateSpeedBonus(timeRemaining, totalTime, baseXP) {
  if (totalTime === 0) return 0; // No bonus for unlimited
  const percentRemaining = timeRemaining / totalTime;
  if (percentRemaining > 0.75) return Math.round(baseXP * 0.5);  // 50% bonus
  if (percentRemaining > 0.50) return Math.round(baseXP * 0.3);  // 30% bonus
  if (percentRemaining > 0.25) return Math.round(baseXP * 0.1);  // 10% bonus
  return 0; // No bonus if slow
}
```

---

# 24. Settings

## 24.1 Settings Panel

Settings are accessed via a gear icon in the navbar (homepage) or quiz header. Settings are stored in `localStorage`.

### Settings Structure

```javascript
const defaultSettings = {
  // Appearance
  theme: 'light',           // 'light' | 'dark' | 'system'

  // Audio
  soundEnabled: true,       // Sound effects (correct, wrong, etc.)
  musicEnabled: false,      // Background music
  soundVolume: 0.7,         // 0.0 – 1.0
  musicVolume: 0.3,         // 0.0 – 1.0

  // Quiz Configuration
  timerDuration: 10,        // 5 | 10 | 15 | 20 | 30 | 0 (unlimited)
  questionCount: 10,        // 5 | 10 | 15 | 20 | 25 | 30
  difficulty: 'medium',     // beginner | easy | medium | hard | expert | master | adaptive
  questionTypes: ['all'],   // Array of question type IDs, or ['all']

  // Question Range (optional override)
  minNumber: null,           // null = use difficulty default
  maxNumber: null,           // null = use difficulty default

  // Display
  showTimer: true,           // Show/hide timer
  showScore: true,           // Show/hide score during quiz
  showStreak: true,          // Show/hide streak counter
  showProgressBar: true,     // Show/hide progress bar

  // Accessibility
  reducedMotion: false,      // Override system preference
  highContrast: false,       // Increase contrast ratios
  largeText: false,          // Increase base font size

  // Data
  resetConfirmation: true,   // Require confirmation before reset
};
```

### Settings UI

Each setting group is a collapsible section:

1. **Appearance** — Theme toggle (Light / Dark / System)
2. **Sound & Music** — Toggle switches + volume sliders
3. **Quiz Defaults** — Timer, question count, difficulty dropdowns
4. **Question Types** — Checklist of all 17 types
5. **Accessibility** — Toggle switches for motion, contrast, text size
6. **Data** — "Reset All Progress" button (with confirmation dialog)

### Dark Mode Specification

When dark mode is active:

| Token               | Light Value   | Dark Value     |
|----------------------|---------------|----------------|
| Background           | `#FFFFFF`     | `#0F0F0F`      |
| Surface              | `#FFF8F1`     | `#1A1A1A`      |
| Surface Elevated     | `#FFFFFF`     | `#262626`      |
| Text Primary         | `#1A1A1A`     | `#F5F5F5`      |
| Text Secondary       | `#525252`     | `#A3A3A3`      |
| Border               | `#E5E5E5`     | `#333333`      |
| Card Background      | `#FFFFFF`     | `#1E1E1E`      |
| Primary              | `#FC8019`     | `#FC8019` (same)|
| Shadows              | Standard      | Reduced opacity |

Dark mode is toggled by adding `data-theme="dark"` to the `<html>` element and using CSS custom property overrides.

---

# 25. Gamification System

## 25.1 Experience Points (XP)

### XP Sources

| Source                          | Base XP | Notes                                      |
|---------------------------------|---------|--------------------------------------------|
| Correct answer                  | 10      | Per question                               |
| Speed bonus                     | 1–5     | Based on response time                     |
| Streak bonus                    | +2/streak| Cumulative per consecutive correct answer  |
| Perfect quiz                    | 50      | Bonus for 100% accuracy                    |
| Daily challenge complete        | 25      | One-time per day                           |
| Weekly challenge complete       | 75      | One-time per week                          |
| Achievement unlocked            | Varies  | Defined per achievement (50–2000)          |
| Difficulty multiplier           | ×0.5–3  | Applied to all XP from that quiz           |

### XP Formula

```javascript
function calculateQuizXP(results, difficulty) {
  const diffMultiplier = getDifficultyMultiplier(difficulty);
  let totalXP = 0;

  results.questions.forEach((q, index) => {
    if (q.isCorrect) {
      let questionXP = 10;                             // Base
      questionXP += calculateSpeedBonus(q.timeRemaining, q.totalTime, 10);  // Speed
      questionXP += Math.min(q.currentStreak * 2, 20); // Streak (capped at 20)
      totalXP += questionXP;
    }
  });

  // Perfect quiz bonus
  if (results.accuracy === 100) {
    totalXP += 50;
  }

  // Apply difficulty multiplier
  totalXP = Math.round(totalXP * diffMultiplier);

  return totalXP;
}
```

## 25.2 Coins

Coins are a secondary currency earned alongside XP.

| Source                    | Coins |
|---------------------------|-------|
| Per correct answer         | 1     |
| Quiz completion            | 5     |
| Perfect quiz               | 10    |
| Daily challenge            | 15    |
| Achievement unlocked       | Varies|

**Future Use:** Coins can unlock cosmetic items (themes, avatar frames, badges) in future updates.

## 25.3 Levels

Leveling is based on total XP accumulated.

| Level | XP Required (Total) | Title              |
|-------|---------------------|--------------------|
| 1     | 0                   | Newcomer           |
| 2     | 100                 | Beginner           |
| 3     | 300                 | Learner            |
| 4     | 600                 | Apprentice         |
| 5     | 1,000               | Student            |
| 6     | 1,500               | Scholar            |
| 7     | 2,500               | Practitioner       |
| 8     | 4,000               | Expert             |
| 9     | 6,000               | Master             |
| 10    | 8,500               | Grandmaster        |
| 11    | 12,000              | Sage               |
| 12    | 16,000              | Wizard             |
| 13    | 21,000              | Archmage           |
| 14    | 27,000              | Legend             |
| 15    | 35,000              | Maths God          |

**Level-up Animation:**
- Full-screen overlay with "Level Up!" text
- Golden particles burst
- New title displayed
- Sound effect plays
- Auto-dismisses after 3 seconds or on click

## 25.4 Achievements

### Achievement Categories

1. **First Steps** — Onboarding achievements
2. **Consistency** — Streak-based achievements
3. **Speed** — Time-based achievements
4. **Accuracy** — Accuracy-based achievements
5. **Mastery** — Category completion achievements
6. **Social** — Leaderboard achievements
7. **Special** — Time-of-day, milestone achievements

### Complete Achievement List

| ID  | Name                | Category     | Description                             | XP    | Condition                                      |
|-----|---------------------|--------------|-----------------------------------------|-------|-------------------------------------------------|
| A01 | First Steps         | First Steps  | Complete your first quiz                | 50    | Complete 1 quiz                                 |
| A02 | Getting Started     | First Steps  | Answer 10 questions correctly           | 75    | 10 total correct answers                        |
| A03 | Centurion           | First Steps  | Answer 100 questions correctly          | 200   | 100 total correct answers                       |
| A04 | Thousand Club       | First Steps  | Answer 1,000 questions correctly        | 500   | 1,000 total correct answers                     |
| A05 | Streak Starter      | Consistency  | 3-day daily streak                      | 100   | 3-day streak                                    |
| A06 | Week Warrior        | Consistency  | 7-day daily streak                      | 250   | 7-day streak                                    |
| A07 | Fortnight Force     | Consistency  | 14-day daily streak                     | 500   | 14-day streak                                   |
| A08 | Monthly Master      | Consistency  | 30-day daily streak                     | 1000  | 30-day streak                                   |
| A09 | Unstoppable         | Consistency  | 100-day daily streak                    | 2000  | 100-day streak                                  |
| A10 | Speed Demon         | Speed        | Average < 3s per question in a quiz     | 200   | Avg time < 3s, min 10 questions                 |
| A11 | Lightning Fast      | Speed        | Average < 2s per question               | 500   | Avg time < 2s, min 10 questions                 |
| A12 | Instant Mind        | Speed        | Answer a question in under 1 second     | 150   | Any single question < 1s                        |
| A13 | Perfect Score       | Accuracy     | 100% accuracy on a quiz                 | 300   | 100% on any quiz with 10+ questions             |
| A14 | Double Perfect      | Accuracy     | Two perfect quizzes in a row            | 500   | 2 consecutive 100% quizzes                      |
| A15 | Perfectionist       | Accuracy     | 10 perfect quizzes                      | 1500  | 10 total 100% quizzes                           |
| A16 | Addition Master     | Mastery      | 95%+ accuracy on 50 addition questions  | 300   | Category-specific mastery                       |
| A17 | Subtraction Master  | Mastery      | 95%+ accuracy on 50 subtraction Q's     | 300   | Category-specific mastery                       |
| A18 | Multiplication Master| Mastery     | 95%+ accuracy on 50 multiplication Q's  | 300   | Category-specific mastery                       |
| A19 | Division Master     | Mastery      | 95%+ accuracy on 50 division Q's        | 300   | Category-specific mastery                       |
| A20 | All-Rounder         | Mastery      | Play every question category            | 500   | At least 1 quiz in each of 17 categories        |
| A21 | Top 10              | Social       | Reach top 10 on any leaderboard         | 500   | Leaderboard position ≤ 10                       |
| A22 | Podium Finish       | Social       | Reach top 3 on any leaderboard          | 1000  | Leaderboard position ≤ 3                        |
| A23 | Early Bird          | Special      | Complete a quiz before 7 AM             | 100   | Quiz completed 5:00–6:59 AM local time          |
| A24 | Night Owl           | Special      | Complete a quiz after 10 PM             | 100   | Quiz completed 10:00 PM–11:59 PM                |
| A25 | Weekend Warrior     | Special      | Complete a quiz on Saturday or Sunday   | 75    | Quiz on weekend                                 |
| A26 | Marathon            | Special      | Answer 50 questions in one session      | 400   | Single quiz with 50 questions (custom)          |
| A27 | Levelheaded         | Special      | Reach Level 10                          | 750   | XP level ≥ 10                                   |
| A28 | Maths God           | Special      | Reach Level 15                          | 2000  | XP level ≥ 15                                   |

### Achievement Storage Format

```javascript
const achievementState = {
  unlocked: {
    'A01': { unlockedAt: '2026-01-15T10:30:00Z' },
    'A02': { unlockedAt: '2026-01-15T10:45:00Z' },
    // ...
  },
  progress: {
    'A03': { current: 67, target: 100 },
    'A05': { current: 2, target: 3 },
    // ...
  }
};
```

## 25.5 Daily Streak

### Rules
- Streak increments when user completes **any quiz** (or daily challenge) on a given day
- "Day" is defined by user's local time midnight-to-midnight
- Missing one day resets the streak to 0
- Streak is stored with the date of the last activity

### Visual
- Flame (🔥) icon with streak number
- Flame animates (pulse/wiggle) when streak is active
- Flame is grey/dimmed when streak is broken
- Shown in: Navbar, homepage stats, results screen

### Storage

```javascript
const streakData = {
  currentStreak: 12,
  longestStreak: 24,
  lastActivityDate: '2026-07-11',  // YYYY-MM-DD format
};
```

## 25.6 Badges

Badges are visual representations of achievements. Each achievement has an associated badge.

### Badge Design
- Circular or shield shape
- Distinct icon per badge
- Color coding by category
- Locked state: Greyscale + lock icon
- Unlocked state: Full color + subtle animated glow

## 25.7 Progress Rings

Circular SVG progress indicators used for:
- Quiz score display
- Category mastery (% in each category)
- Level progress (% to next level)
- Daily streak goal

### Implementation

```html
<svg class="progress-ring" viewBox="0 0 120 120">
  <circle class="progress-ring__background"
          cx="60" cy="60" r="54"
          fill="none" stroke="#E5E5E5" stroke-width="8" />
  <circle class="progress-ring__progress"
          cx="60" cy="60" r="54"
          fill="none" stroke="#FC8019" stroke-width="8"
          stroke-dasharray="339.292"
          stroke-dashoffset="67.858"
          stroke-linecap="round"
          transform="rotate(-90 60 60)" />
  <text x="60" y="65" text-anchor="middle" class="progress-ring__text">80%</text>
</svg>
```

## 25.8 Confetti System

Triggers on:
- Perfect quiz score
- Achievement unlock
- Level up
- Leaderboard position improvement

### Implementation
- Generate 50–100 confetti particles
- Colors: Brand palette (orange, gold, white, accent colors)
- Shapes: Rectangles, circles, strips
- Physics: Random initial velocity, gravity pull, slight wind
- Duration: 3 seconds
- Performance: Use `requestAnimationFrame`, recycle DOM elements
- z-index: `--z-confetti` (above everything)

## 25.9 Rewards & Unlockables

Future feature placeholder — for now, the reward system includes:
- XP and level progression
- Achievement badges
- Coins (tracked but not yet spendable)
- Visual progression (progress rings, charts)

---

# 26. Statistics System

## 26.1 Data Model

```javascript
const userStats = {
  // Lifetime stats
  totalQuizzesPlayed: 0,
  totalQuestionsAnswered: 0,
  totalCorrectAnswers: 0,
  totalWrongAnswers: 0,
  totalTimeSpentMs: 0,
  totalXPEarned: 0,
  totalCoinsEarned: 0,

  // Best records
  highestScore: 0,
  bestAccuracy: 0,
  fastestAvgTime: Infinity,
  longestStreak: 0,
  bestQuizStreak: 0,     // Consecutive correct in one quiz

  // Per-category stats
  categories: {
    addition: {
      questionsAnswered: 0,
      correctAnswers: 0,
      totalTimeMs: 0,
      bestStreak: 0,
    },
    subtraction: { /* same structure */ },
    // ... all 17 categories
  },

  // Per-difficulty stats
  difficulties: {
    beginner: { played: 0, avgAccuracy: 0, avgTime: 0 },
    easy: { /* ... */ },
    // ... all 7 levels
  },

  // History (last 50 quizzes for charts)
  recentQuizzes: [
    {
      date: '2026-07-11T15:30:00Z',
      difficulty: 'medium',
      category: 'addition',
      score: 8,
      total: 10,
      accuracy: 80,
      avgTimeMs: 4200,
      xpEarned: 120,
    },
    // ...
  ],
};
```

## 26.2 Statistics Dashboard Sections

### Overview Cards
- Total Quizzes Played
- Total Questions Answered
- Overall Accuracy (%)
- Average Time per Question

### Performance Charts
- **Line Chart:** Accuracy trend over last 30 quizzes
- **Bar Chart:** Category-wise accuracy (all 17 categories)
- **Pie Chart:** Time distribution across categories
- **Area Chart:** XP accumulation over time

### Category Analysis
- List of all 17 categories
- Each showing: total questions, accuracy %, average time
- Progress bar showing mastery level
- Color-coded: Red (<60%), Yellow (60-80%), Green (>80%)

### Difficulty Analysis
- Stats broken down by difficulty level
- Shows which difficulties user performs best at
- Recommendation for optimal difficulty

### Personal Bests
- Highest quiz score
- Best accuracy
- Fastest average time
- Longest streak
- Most XP in a single quiz

## 26.3 Chart Implementation

Use vanilla JavaScript canvas rendering or SVG for charts. Do NOT include heavy chart libraries. Keep it lightweight.

Alternatively, use a lightweight charting approach:
- SVG-based charts (best for simple bar/line charts)
- CSS-only charts for simple bar charts
- Canvas for line charts with many data points

---

# 27. Leaderboard System

## 27.1 Leaderboard Periods

| Period    | Reset Cycle        | Scope                     |
|-----------|--------------------|---------------------------|
| Daily     | Every midnight      | Today's scores only       |
| Weekly    | Every Monday        | This week's scores        |
| Monthly   | 1st of each month   | This month's scores       |
| All Time  | Never               | Cumulative all-time       |

## 27.2 Scoring Formula

```javascript
function calculateLeaderboardScore(quiz) {
  const accuracyScore = quiz.accuracy * 10;  // 0-1000
  const speedScore = Math.max(0, 500 - (quiz.avgTimeMs / 10));  // 0-500
  const difficultyBonus = getDifficultyMultiplier(quiz.difficulty) * 200;  // 100-600
  const streakBonus = quiz.bestStreak * 5;  // Variable

  return Math.round(accuracyScore + speedScore + difficultyBonus + streakBonus);
}
```

## 27.3 Leaderboard Entry

```javascript
const leaderboardEntry = {
  rank: 1,
  username: "Player123",     // Default: "Player" + random 4-digit number
  score: 1850,
  accuracy: 95,
  quizzesPlayed: 47,
  difficulty: 'expert',
  avatar: 'P',               // First letter of username
  isCurrentUser: false,       // Highlight if this is the current user
};
```

## 27.4 Username System

- Default username: "Player" + 4-digit random number (generated on first visit)
- User can change username in settings
- Username validation: 3–15 characters, alphanumeric + underscores only
- Stored in localStorage
- No authentication required (v1 is local-only)

## 27.5 MVP Implementation

For the MVP (no backend), the leaderboard works as follows:
- User's own scores are stored in localStorage
- Mock data fills other leaderboard positions
- User's real score is inserted into the mock data at the appropriate rank
- This gives the illusion of a live leaderboard while being fully client-side

---

# 28. Audio System

## 28.1 Sound Effects

| ID               | Trigger                      | Description                    | Duration | Format |
|------------------|------------------------------|--------------------------------|----------|--------|
| `sfx_correct`    | Correct answer selected      | Bright, positive ding          | < 500ms  | MP3    |
| `sfx_wrong`      | Wrong answer selected        | Soft, low buzz/beep            | < 500ms  | MP3    |
| `sfx_timeout`    | Timer expires                | Clock alarm/bell               | < 800ms  | MP3    |
| `sfx_click`      | Button click                 | Subtle click/tap               | < 200ms  | MP3    |
| `sfx_achievement`| Achievement unlocked         | Triumphant fanfare             | < 2s     | MP3    |
| `sfx_victory`    | Quiz completed (good score)  | Victory jingle                 | < 3s     | MP3    |
| `sfx_levelup`    | Level up                     | Ascending chime sequence       | < 2s     | MP3    |
| `sfx_countdown`  | Countdown numbers            | Tick sound                     | < 300ms  | MP3    |
| `sfx_go`         | Countdown "GO!"              | Higher-pitched ding            | < 500ms  | MP3    |
| `sfx_streak`     | Streak increment             | Quick ascending note           | < 300ms  | MP3    |
| `sfx_coin`       | Coins earned                 | Coin collection sound          | < 300ms  | MP3    |
| `sfx_confetti`   | Confetti burst               | Party popper                   | < 1s     | MP3    |

## 28.2 Background Music

| ID               | Context                      | Description                    | Duration | Loop   |
|------------------|------------------------------|--------------------------------|----------|--------|
| `bgm_menu`       | Homepage, settings           | Calm, ambient, lo-fi           | 60–120s  | Yes    |
| `bgm_quiz`       | During quiz                  | Upbeat, focused, not distracting| 60–120s | Yes    |
| `bgm_results`    | Results screen               | Celebratory if good, neutral otherwise | 30s | No  |

## 28.3 Audio Implementation

```javascript
class AudioManager {
  constructor() {
    this.sounds = {};
    this.musicVolume = 0.3;
    this.sfxVolume = 0.7;
    this.isMuted = false;
    this.isMusicEnabled = false;
  }

  preload(id, url) {
    const audio = new Audio(url);
    audio.preload = 'auto';
    this.sounds[id] = audio;
  }

  play(id) {
    if (this.isMuted) return;
    const sound = this.sounds[id];
    if (sound) {
      sound.currentTime = 0;
      sound.volume = this.sfxVolume;
      sound.play().catch(() => {}); // Catch autoplay restrictions
    }
  }

  playMusic(id) {
    if (!this.isMusicEnabled || this.isMuted) return;
    // Stop current music, start new
    this.stopMusic();
    const music = this.sounds[id];
    if (music) {
      music.volume = this.musicVolume;
      music.loop = true;
      music.play().catch(() => {});
      this.currentMusic = music;
    }
  }

  stopMusic() {
    if (this.currentMusic) {
      this.currentMusic.pause();
      this.currentMusic.currentTime = 0;
    }
  }

  setMuted(muted) {
    this.isMuted = muted;
    if (muted) this.stopMusic();
  }
}
```

## 28.4 Audio File Requirements

- Format: MP3 (primary) + OGG (fallback)
- Bit rate: 128kbps
- Sample rate: 44.1kHz
- Channels: Mono (for effects), Stereo (for music)
- File size: Sound effects < 50KB each, music < 500KB each
- License: Royalty-free or CC0

## 28.5 Audio UX Rules

1. **Sound is OFF by default for music, ON for effects** — Respect autoplay policies
2. **User must interact with page before any audio plays** — Browser requirement
3. **Provide clear mute/unmute controls** — Sound icon in the settings or quiz header
4. **Never play audio during reduced motion preference** without explicit user opt-in
5. **Volume controls are persistent** — Saved in localStorage

---

# 29. Animation Specification

> **CRITICAL: This is the master reference for every animation in NumericallyInclined. Each animation has a unique ID, trigger, and exact specification.**

## 29.1 Animation Registry

| ID      | Name                   | Trigger                    | Element              | Keyframe           | Duration | Easing        | Repeat    |
|---------|------------------------|----------------------------|----------------------|--------------------|---------:|---------------|-----------|
| AN-01   | Hero Float             | Page load                  | Math symbols         | `float`            | 8–20s    | ease-in-out   | Infinite  |
| AN-02   | Section Fade In        | Scroll into view           | Section content      | `fadeInUp`         | 600ms    | ease-out      | Once      |
| AN-03   | Card Stagger           | Scroll into view           | Card groups          | `fadeInUp`         | 600ms    | ease-out      | Once      |
| AN-04   | Button Pulse           | Idle (hero CTA)            | Start Quiz button    | `pulse`            | 2s       | ease-in-out   | Infinite  |
| AN-05   | Navbar Transition      | Scroll > 100px             | Navbar               | CSS transition     | 250ms    | ease-out      | N/A       |
| AN-06   | Correct Answer         | Answer correct              | Answer option        | `bounce` + green   | 300ms    | spring        | Once      |
| AN-07   | Wrong Answer           | Answer wrong                | Answer option        | `shake` + red      | 400ms    | linear        | Once      |
| AN-08   | XP Gain Float          | XP earned                   | +XP text             | `xpGain`           | 800ms    | ease-out      | Once      |
| AN-09   | Countdown Number       | Quiz start                  | Countdown digits     | `countdownPop`     | 1000ms   | spring        | Once each |
| AN-10   | Progress Bar Fill      | Question answered           | Progress bar         | CSS width          | 300ms    | ease-out      | N/A       |
| AN-11   | Timer Pulse            | Timer < 10%                 | Timer display        | `urgentPulse`      | 500ms    | ease-in-out   | Infinite  |
| AN-12   | Score Count Up         | Results screen load         | Score number         | JS counter         | 1500ms   | ease-out      | Once      |
| AN-13   | Progress Ring Fill     | Results screen load         | SVG progress ring    | `progressFill`     | 1200ms   | ease-out      | Once      |
| AN-14   | Confetti Burst         | Perfect score / achievement | Full screen          | `confettiFall`     | 3000ms   | physics       | Once      |
| AN-15   | Achievement Badge      | Achievement unlocked        | Badge element        | `badgeUnlock`      | 800ms    | spring        | Once      |
| AN-16   | Level Up               | Level up event              | Overlay              | `levelUp`          | 1000ms   | spring        | Once      |
| AN-17   | Streak Flame           | Streak active               | Flame icon           | `flamePulse`       | 2000ms   | ease-in-out   | Infinite  |
| AN-18   | Streak Wiggle          | Streak increment            | Flame icon           | `wiggle`           | 400ms    | spring        | Once      |
| AN-19   | Card Hover Lift        | Mouse hover                 | Cards                | CSS transform      | 250ms    | ease-out      | N/A       |
| AN-20   | Button Scale Up        | Mouse hover                 | Buttons              | CSS transform      | 150ms    | ease-out      | N/A       |
| AN-21   | Button Scale Down      | Mouse active (click)        | Buttons              | CSS transform      | 50ms     | linear        | N/A       |
| AN-22   | Slide In Right         | Page transition (forward)   | Page container       | `slideInRight`     | 350ms    | ease-out      | Once      |
| AN-23   | Slide In Left          | Page transition (backward)  | Page container       | `slideInLeft`      | 350ms    | ease-out      | Once      |
| AN-24   | Fade In Scale          | Modal open                  | Modal                | `fadeInScale`      | 300ms    | spring        | Once      |
| AN-25   | Spinner Spin           | Loading                     | Spinner              | `spin`             | 1000ms   | linear        | Infinite  |
| AN-26   | Skeleton Shimmer       | Loading state               | Skeleton             | `shimmer`          | 1500ms   | linear        | Infinite  |
| AN-27   | Toast Slide In         | Toast notification          | Toast                | `slideInRight`     | 300ms    | spring        | Once      |
| AN-28   | Accordion Expand       | FAQ item click              | FAQ answer           | CSS height         | 300ms    | ease-out      | N/A       |
| AN-29   | Testimonial Slide      | Auto / manual               | Carousel             | CSS transform      | 500ms    | ease-in-out   | N/A       |
| AN-30   | Stat Count Up          | Scroll into view            | Stat numbers         | JS counter         | 2000ms   | ease-out      | Once      |
| AN-31   | Abacus Bead Slide      | Continuous (hero)           | Abacus beads         | CSS transform      | 3000ms   | ease-in-out   | Infinite  |
| AN-32   | Mobile Menu Slide      | Menu button click           | Mobile nav overlay   | `slideInRight`     | 300ms    | ease-out      | Once      |
| AN-33   | Difficulty Card Glow   | Hover                       | Difficulty cards     | CSS box-shadow     | 200ms    | ease-out      | N/A       |

---

# 30. Accessibility

## 30.1 Standards Compliance

- **Target:** WCAG 2.1 Level AA compliance
- **Testing Tool:** axe-core or Lighthouse Accessibility audit
- **Target Score:** ≥ 95

## 30.2 Keyboard Navigation

All interactive elements must be fully operable with keyboard alone.

### Focus Order
1. Skip to content link (hidden until focused)
2. Navbar items (left to right)
3. Main content (top to bottom, left to right)
4. Footer links

### Focus Styles

```css
:focus-visible {
  outline: 3px solid var(--primary);
  outline-offset: 3px;
  border-radius: var(--radius-sm);
}

/* Remove default focus ring for mouse users */
:focus:not(:focus-visible) {
  outline: none;
}
```

### Keyboard Shortcuts (Quiz)

| Key       | Action                |
|-----------|-----------------------|
| 1, A      | Select option A       |
| 2, B      | Select option B       |
| 3, C      | Select option C       |
| 4, D      | Select option D       |
| Enter     | Confirm / Next        |
| Escape    | Exit quiz             |
| Space     | Pause timer (if applicable) |
| Tab       | Navigate between options |

## 30.3 Screen Reader Support

- All images have descriptive `alt` text
- Decorative images use `alt=""` and `aria-hidden="true"`
- Icons use `aria-label` or `aria-hidden` as appropriate
- Dynamic content updates use `aria-live="polite"` regions
- Quiz questions announce the question text, options, and result
- Timer announces "Time remaining: X seconds" periodically via `aria-live`
- Score changes announced via `aria-live="polite"`

### ARIA Landmarks

```html
<header role="banner">        <!-- Navbar -->
<nav role="navigation">        <!-- Navigation -->
<main role="main">             <!-- Main content -->
<footer role="contentinfo">    <!-- Footer -->
<aside role="complementary">   <!-- Sidebar (if any) -->
```

## 30.4 Color Contrast

All text must meet WCAG AA contrast ratios:
- Normal text (< 18pt): minimum 4.5:1 contrast ratio
- Large text (≥ 18pt / 14pt bold): minimum 3:1 contrast ratio
- Interactive elements: minimum 3:1 against adjacent colors

### Verified Contrasts

| Text Color  | Background    | Ratio  | Pass? |
|-------------|---------------|--------|-------|
| `#1A1A1A`   | `#FFFFFF`     | 16.6:1 | ✅ AA  |
| `#1A1A1A`   | `#FFF8F1`     | 15.6:1 | ✅ AA  |
| `#FFFFFF`   | `#FC8019`     | 3.2:1  | ✅ Large only |
| `#FFFFFF`   | `#E5700F`     | 3.8:1  | ✅ Large only |
| `#525252`   | `#FFFFFF`     | 7.4:1  | ✅ AA  |
| `#FFFFFF`   | `#16A34A`     | 3.4:1  | ✅ Large only |
| `#FFFFFF`   | `#DC2626`     | 4.5:1  | ✅ AA  |

> **Note:** White text on primary orange (`#FC8019`) only passes for large text. For small text on orange backgrounds, use `#1A1A1A` (dark text) or add a dark overlay.

## 30.5 Reduced Motion

- Respect `prefers-reduced-motion: reduce` media query
- Disable all decorative animations (floating symbols, pulses, bounces)
- Keep functional animations (page transitions) but reduce to simple fades
- Replace counting animations with instant final values
- Allow user override in settings

## 30.6 Additional Accessibility

- **Semantic HTML:** Use proper heading hierarchy (h1 > h2 > h3, etc.)
- **Form labels:** Every input has an associated `<label>`
- **Error messages:** Connected to inputs via `aria-describedby`
- **Touch targets:** Minimum 44×44px
- **Zoom support:** Page must be usable at 200% zoom
- **Language:** `<html lang="en">` specified
- **Page title:** Descriptive and unique per page/state

---

# 31. Performance

## 31.1 Performance Targets

| Metric                  | Target    |
|-------------------------|-----------|
| Lighthouse Performance  | ≥ 95      |
| Lighthouse Accessibility| ≥ 95      |
| Lighthouse Best Practices| ≥ 95     |
| Lighthouse SEO          | ≥ 95      |
| First Contentful Paint  | < 1.2s    |
| Largest Contentful Paint| < 2.5s    |
| First Input Delay       | < 100ms   |
| Cumulative Layout Shift | < 0.1     |
| Time to Interactive     | < 3.5s    |
| Total Bundle Size (gzip)| < 150KB   |

## 31.2 Optimization Strategies

### Lazy Loading

- Images below the fold: `loading="lazy"`
- Sections below the fold: Load content via Intersection Observer
- Audio files: Preload only on user interaction
- Fonts: `font-display: swap`

### Image Optimization

- Use WebP format with JPEG/PNG fallback
- Responsive images with `srcset` and `sizes`
- Compress all images (target: < 50KB per image)
- Use CSS for decorative elements instead of images where possible
- Inline small SVGs (< 2KB)

### CSS Optimization

- Minimize CSS specificity
- Remove unused CSS
- Critical CSS inlined in `<head>`
- Non-critical CSS loaded async
- Use CSS `contain` property for complex sections

### JavaScript Optimization

- No unnecessary dependencies
- Vanilla JS only (no jQuery, no React)
- Defer non-critical scripts
- Use `requestAnimationFrame` for animations
- Debounce scroll and resize event handlers (16ms / 60fps)
- Use event delegation where possible

### Caching

```javascript
// Service Worker caching strategy
const CACHE_NAME = 'numericallyinclined-v1';
const CACHE_ASSETS = [
  '/',
  '/index.html',
  '/quiz.html',
  '/css/main.css',
  '/js/app.js',
  '/js/quiz.js',
  // ... all static assets
];
```

## 31.3 SEO

### Required Meta Tags

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>NumericallyInclined — Master Mental Maths One Question At A Time</title>
<meta name="description" content="Free premium mental maths training. Practice 17+ question types with gamified quizzes, daily challenges, and adaptive difficulty. Works offline.">
<meta name="keywords" content="mental maths, math quiz, brain training, arithmetic, math games">
<meta name="author" content="NumericallyInclined">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://numericallyinclined.com/">

<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:title" content="NumericallyInclined — Master Mental Maths">
<meta property="og:description" content="Free premium mental maths training platform.">
<meta property="og:image" content="/assets/og-image.png">
<meta property="og:url" content="https://numericallyinclined.com/">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="NumericallyInclined — Master Mental Maths">
<meta name="twitter:description" content="Free premium mental maths training platform.">
<meta name="twitter:image" content="/assets/twitter-image.png">
```

### Structured Data (JSON-LD)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "NumericallyInclined",
  "description": "Premium mental maths training platform",
  "url": "https://numericallyinclined.com",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
}
</script>
```

## 31.4 PWA (Progressive Web App)

### Web App Manifest

```json
{
  "name": "NumericallyInclined — Mental Maths Training",
  "short_name": "NumericallyInclined",
  "description": "Master mental maths one question at a time.",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#FFFFFF",
  "theme_color": "#FC8019",
  "orientation": "portrait-primary",
  "icons": [
    { "src": "/assets/icons/icon-72.png", "sizes": "72x72", "type": "image/png" },
    { "src": "/assets/icons/icon-96.png", "sizes": "96x96", "type": "image/png" },
    { "src": "/assets/icons/icon-128.png", "sizes": "128x128", "type": "image/png" },
    { "src": "/assets/icons/icon-144.png", "sizes": "144x144", "type": "image/png" },
    { "src": "/assets/icons/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/assets/icons/icon-384.png", "sizes": "384x384", "type": "image/png" },
    { "src": "/assets/icons/icon-512.png", "sizes": "512x512", "type": "image/png", "purpose": "any maskable" }
  ],
  "categories": ["education", "games"],
  "screenshots": [
    {
      "src": "/assets/screenshots/home.png",
      "sizes": "1280x720",
      "type": "image/png",
      "label": "NumericallyInclined Homepage"
    }
  ]
}
```

### Service Worker

- **Strategy:** Cache-first for static assets, network-first for dynamic content
- **Offline:** Full app functionality available offline
- **Updates:** Check for updates on page load, notify user if update available
- **Cache Management:** Version-based cache names, delete old caches on activate

## 31.5 Offline Mode

All core functionality must work without internet:
- ✅ Homepage (fully cached)
- ✅ Quiz flow (questions generated client-side)
- ✅ Settings (localStorage)
- ✅ Statistics (localStorage)
- ✅ Achievements (localStorage)
- ⚠️ Leaderboard (show cached data, indicate offline)
- ✅ Sound effects (cached)
- ✅ All assets (cached by service worker)

---

# 32. Responsive Breakpoints

## 32.1 Breakpoint Definitions

```css
/* Mobile First Approach */

/* Mobile (default): 0 – 639px */
/* No media query needed — this is the base */

/* Tablet: 640px – 1023px */
@media (min-width: 640px) { /* sm */ }

/* Laptop: 1024px – 1279px */
@media (min-width: 1024px) { /* md */ }

/* Desktop: 1280px – 1535px */
@media (min-width: 1280px) { /* lg */ }

/* Ultra-wide: 1536px+ */
@media (min-width: 1536px) { /* xl */ }
```

## 32.2 Layout Behavior by Breakpoint

| Element              | Mobile (0-639)  | Tablet (640-1023) | Laptop (1024-1279) | Desktop (1280+)   |
|----------------------|-----------------|-------------------|--------------------|---------------------|
| Container Max Width  | 100%            | 640px             | 960px              | 1200px              |
| Container Padding    | 16px            | 24px              | 32px               | 40px                |
| Navbar               | Logo + Hamburger| Logo + Links      | Logo + Links + CTA | Logo + Links + CTA  |
| Hero Layout          | Stacked, no abacus| Stacked + abacus| Side-by-side       | Side-by-side         |
| Grid Columns         | 1               | 2                 | 3                  | 4                    |
| Card Size            | Full width      | 50% width         | 33% width          | 25% width           |
| Font Scale           | Base            | Base × 1.05       | Base × 1.1         | Base × 1.15          |
| Section Padding Y    | 64px            | 80px              | 96px               | 96px                 |
| Quiz Answer Grid     | 1 column        | 2 columns         | 2 columns          | 2 columns            |
| Footer Columns       | 1 (stacked)     | 2                 | 3                  | 3                    |
| Testimonial Cards    | 1 visible       | 2 visible         | 3 visible          | 3 visible            |
| Category Grid        | 2 columns       | 3 columns         | 4 columns          | 4 columns            |

## 32.3 Touch vs. Pointer

```css
/* Touch devices */
@media (pointer: coarse) {
  /* Larger touch targets */
  .btn { min-height: 48px; }
  .answer-option { min-height: 56px; }
}

/* Mouse devices */
@media (pointer: fine) {
  /* Hover effects enabled */
  .card:hover { transform: translateY(-4px); }
}
```

---

# 33. Folder Structure

```
quiz-wiz-app/
├── index.html                          # Homepage (single scrolling page)
├── quiz.html                           # Quiz experience (difficulty → quiz → results)
├── manifest.json                       # PWA manifest
├── sw.js                               # Service Worker
├── robots.txt                          # SEO robots file
├── sitemap.xml                         # SEO sitemap
│
├── css/
│   ├── variables.css                   # All CSS custom properties (design tokens)
│   ├── reset.css                       # CSS reset / normalize
│   ├── base.css                        # Base element styles (body, headings, links)
│   ├── typography.css                  # Typography classes
│   ├── utilities.css                   # Utility classes (spacing, flex, grid)
│   ├── animations.css                  # All keyframe animations
│   ├── components/
│   │   ├── navbar.css                  # Navbar styles
│   │   ├── hero.css                    # Hero section styles
│   │   ├── buttons.css                 # Button variants
│   │   ├── cards.css                   # Card component styles
│   │   ├── forms.css                   # Input, select, toggle styles
│   │   ├── modal.css                   # Modal / dialog styles
│   │   ├── toast.css                   # Toast notification styles
│   │   ├── progress.css               # Progress bars and rings
│   │   ├── accordion.css              # FAQ accordion styles
│   │   ├── carousel.css               # Testimonial carousel styles
│   │   ├── leaderboard.css            # Leaderboard table styles
│   │   ├── achievements.css           # Achievement badge styles
│   │   ├── stats.css                  # Statistics dashboard styles
│   │   ├── quiz.css                   # Quiz screen styles
│   │   ├── results.css               # Results screen styles
│   │   ├── countdown.css             # Countdown screen styles
│   │   ├── difficulty.css            # Difficulty selection styles
│   │   ├── instructions.css          # Instructions screen styles
│   │   ├── settings.css              # Settings panel styles
│   │   ├── footer.css                # Footer styles
│   │   ├── skeleton.css              # Skeleton loading styles
│   │   └── confetti.css              # Confetti animation styles
│   ├── sections/
│   │   ├── why-numericallyinclined.css           # Why NumericallyInclined section
│   │   ├── benefits.css              # Benefits section
│   │   ├── features.css              # Features section
│   │   ├── how-it-works.css          # How It Works section
│   │   ├── learning-journey.css      # Learning Journey section
│   │   ├── categories.css            # Categories section
│   │   ├── daily-challenge.css       # Daily Challenge section
│   │   ├── leaderboard-preview.css   # Leaderboard Preview section
│   │   ├── stats-preview.css         # Stats Preview section
│   │   ├── achievements-preview.css  # Achievements Preview section
│   │   ├── testimonials.css          # Testimonials section
│   │   └── faq.css                   # FAQ section
│   ├── themes/
│   │   └── dark.css                  # Dark mode overrides
│   └── main.css                       # Master CSS file (imports all above)
│
├── js/
│   ├── app.js                         # Main application entry point
│   ├── router.js                      # Client-side page/state management
│   ├── config.js                      # App configuration constants
│   ├── utils/
│   │   ├── dom.js                     # DOM manipulation helpers
│   │   ├── storage.js                 # localStorage wrapper
│   │   ├── math.js                    # Math utility functions
│   │   ├── random.js                  # Random number generation
│   │   ├── format.js                  # Number/date formatting
│   │   ├── animation.js              # Animation helpers (intersection observer)
│   │   ├── debounce.js               # Debounce and throttle utilities
│   │   └── validation.js             # Input validation helpers
│   ├── core/
│   │   ├── quiz-engine.js            # Question generation and quiz logic
│   │   ├── timer.js                  # Timer management
│   │   ├── scorer.js                 # Score calculation
│   │   ├── difficulty.js             # Difficulty management + adaptive algorithm
│   │   └── question-generator.js     # Question generation for all 17 types
│   ├── features/
│   │   ├── gamification.js           # XP, levels, coins, streaks
│   │   ├── achievements.js           # Achievement system
│   │   ├── statistics.js             # Statistics tracking and computation
│   │   ├── leaderboard.js            # Leaderboard management
│   │   ├── daily-challenge.js        # Daily challenge logic
│   │   ├── settings.js               # Settings management
│   │   └── theme.js                  # Theme switching (light/dark)
│   ├── ui/
│   │   ├── navbar.js                 # Navbar behavior (scroll, mobile menu)
│   │   ├── hero.js                   # Hero animations (floating symbols)
│   │   ├── carousel.js               # Testimonial carousel
│   │   ├── accordion.js              # FAQ accordion
│   │   ├── modal.js                  # Modal management
│   │   ├── toast.js                  # Toast notification system
│   │   ├── confetti.js               # Confetti particle system
│   │   ├── progress-ring.js          # SVG progress ring component
│   │   ├── counter.js                # Animated number counter
│   │   └── scroll-animations.js      # Scroll-triggered animations
│   ├── audio/
│   │   └── audio-manager.js          # Audio system management
│   └── pages/
│       ├── homepage.js               # Homepage section initialization
│       ├── difficulty-page.js        # Difficulty selection page
│       ├── instructions-page.js      # Instructions page
│       ├── countdown-page.js         # Countdown page
│       ├── quiz-page.js              # Active quiz page
│       └── results-page.js           # Results page
│
├── assets/
│   ├── icons/
│   │   ├── favicon.svg               # SVG favicon
│   │   ├── favicon.ico               # ICO fallback
│   │   ├── icon-16.png               # 16×16 PNG
│   │   ├── icon-32.png               # 32×32 PNG
│   │   ├── icon-72.png               # PWA icon
│   │   ├── icon-96.png
│   │   ├── icon-128.png
│   │   ├── icon-144.png
│   │   ├── icon-192.png
│   │   ├── icon-384.png
│   │   ├── icon-512.png
│   │   └── apple-touch-icon.png      # iOS home screen icon
│   ├── images/
│   │   ├── og-image.png              # Open Graph social share image
│   │   ├── twitter-image.png         # Twitter card image
│   │   └── hero-abacus.svg           # Abacus illustration
│   ├── illustrations/
│   │   ├── empty-state.svg           # Empty state illustration
│   │   ├── error-404.svg             # 404 page illustration
│   │   ├── loading-brain.svg         # Loading state illustration
│   │   ├── celebration.svg           # Perfect score celebration
│   │   └── encouragement.svg         # Low score encouragement
│   ├── audio/
│   │   ├── sfx/
│   │   │   ├── correct.mp3
│   │   │   ├── wrong.mp3
│   │   │   ├── timeout.mp3
│   │   │   ├── click.mp3
│   │   │   ├── achievement.mp3
│   │   │   ├── victory.mp3
│   │   │   ├── levelup.mp3
│   │   │   ├── countdown.mp3
│   │   │   ├── go.mp3
│   │   │   ├── streak.mp3
│   │   │   ├── coin.mp3
│   │   │   └── confetti.mp3
│   │   └── bgm/
│   │       ├── menu.mp3
│   │       ├── quiz.mp3
│   │       └── results.mp3
│   └── fonts/                        # Self-hosted font files (optional fallback)
│       ├── Inter-Regular.woff2
│       ├── Inter-Medium.woff2
│       ├── Inter-SemiBold.woff2
│       ├── Inter-Bold.woff2
│       ├── Outfit-Bold.woff2
│       ├── Outfit-ExtraBold.woff2
│       └── JetBrainsMono-Regular.woff2
│
└── docs/
    └── CHANGELOG.md                   # Version history and changes
```

---

# 34. Component Architecture

## 34.1 Architecture Overview

NumericallyInclined uses a **vanilla JavaScript component pattern** — no frameworks. Each component is a self-contained JavaScript module that manages its own DOM, state, and events.

### Component Pattern

```javascript
// Example component: Toast Notification
class Toast {
  constructor(container) {
    this.container = container;
    this.queue = [];
    this.maxVisible = 3;
  }

  show({ message, type = 'info', duration = 3000 }) {
    const toast = this.createToastElement(message, type);
    this.container.appendChild(toast);

    // Trigger enter animation
    requestAnimationFrame(() => toast.classList.add('toast--visible'));

    // Auto-dismiss
    if (duration > 0) {
      setTimeout(() => this.dismiss(toast), duration);
    }
  }

  dismiss(toast) {
    toast.classList.remove('toast--visible');
    toast.addEventListener('transitionend', () => toast.remove());
  }

  createToastElement(message, type) {
    const el = document.createElement('div');
    el.className = `toast toast--${type}`;
    el.setAttribute('role', 'alert');
    el.innerHTML = `
      <span class="toast__icon">${this.getIcon(type)}</span>
      <span class="toast__message">${message}</span>
      <button class="toast__close" aria-label="Dismiss">&times;</button>
    `;
    el.querySelector('.toast__close').addEventListener('click', () => this.dismiss(el));
    return el;
  }

  getIcon(type) {
    const icons = { success: '✓', error: '✕', warning: '⚠', info: 'ℹ', achievement: '🏆' };
    return icons[type] || icons.info;
  }
}
```

## 34.2 Component List

| Component          | File                    | Responsibility                                      |
|--------------------|-------------------------|-----------------------------------------------------|
| App                | `app.js`                | Root application, initializes all modules            |
| Router             | `router.js`             | Manages page state (homepage vs quiz flow)          |
| Navbar             | `navbar.js`             | Scroll behavior, mobile menu, active states         |
| Hero               | `hero.js`               | Floating symbols animation, parallax                 |
| Carousel           | `carousel.js`           | Testimonial slider with auto-scroll                  |
| Accordion          | `accordion.js`          | FAQ expand/collapse behavior                         |
| Modal              | `modal.js`              | Overlay dialogs with backdrop                        |
| Toast              | `toast.js`              | Notification toasts                                  |
| Confetti           | `confetti.js`           | Particle system for celebrations                     |
| ProgressRing       | `progress-ring.js`      | Animated SVG circular progress                       |
| Counter            | `counter.js`            | Animated number counting                             |
| ScrollAnimations   | `scroll-animations.js`  | Intersection Observer for scroll-triggered animations|
| QuizEngine         | `quiz-engine.js`        | Core quiz logic, question flow, scoring              |
| Timer              | `timer.js`              | Countdown timer with visual states                   |
| QuestionGenerator  | `question-generator.js` | Generates questions for all 17 types                 |
| Scorer             | `scorer.js`             | Calculates scores, XP, bonuses                       |
| Gamification       | `gamification.js`       | XP, levels, coins, streaks                           |
| Achievements       | `achievements.js`       | Achievement checking and unlocking                   |
| Statistics         | `statistics.js`         | Tracking and computing user stats                    |
| Leaderboard        | `leaderboard.js`        | Leaderboard data management                          |
| DailyChallenge     | `daily-challenge.js`    | Daily challenge generation and tracking              |
| Settings           | `settings.js`           | Settings management and UI                           |
| Theme              | `theme.js`              | Light/dark/system theme switching                    |
| AudioManager       | `audio-manager.js`      | Sound effects and music playback                     |
| Storage            | `storage.js`            | localStorage abstraction with JSON parse/stringify   |

## 34.3 Module Communication

Components communicate through a simple **Event Bus** pattern:

```javascript
class EventBus {
  constructor() {
    this.listeners = {};
  }

  on(event, callback) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(callback);
  }

  off(event, callback) {
    if (!this.listeners[event]) return;
    this.listeners[event] = this.listeners[event].filter(cb => cb !== callback);
  }

  emit(event, data) {
    if (!this.listeners[event]) return;
    this.listeners[event].forEach(cb => cb(data));
  }
}

// Global event bus
const eventBus = new EventBus();
```

### Key Events

| Event Name                | Payload                               | Description                    |
|---------------------------|---------------------------------------|--------------------------------|
| `quiz:start`              | `{ difficulty, mode, settings }`      | Quiz begins                    |
| `quiz:answer`             | `{ questionId, answer, isCorrect }`  | User answers a question        |
| `quiz:complete`           | `{ results }`                        | Quiz ends                      |
| `quiz:exit`               | `{}`                                 | User exits quiz                |
| `xp:earned`               | `{ amount, source }`                | XP gained                      |
| `level:up`                | `{ newLevel, title }`               | User leveled up                |
| `achievement:unlocked`    | `{ achievementId, name }`           | Achievement earned             |
| `streak:updated`          | `{ current, longest }`             | Streak changed                 |
| `theme:changed`           | `{ theme }`                         | Theme switched                 |
| `settings:changed`        | `{ key, value }`                    | Setting updated                |
| `audio:play`              | `{ soundId }`                       | Sound effect request           |
| `toast:show`              | `{ message, type, duration }`       | Toast notification             |
| `confetti:burst`          | `{}`                                | Trigger confetti               |

---

# 35. CSS Architecture

## 35.1 Methodology: BEM (Block Element Modifier)

All CSS classes follow the BEM naming convention:

```
.block {}
.block__element {}
.block--modifier {}
.block__element--modifier {}
```

### Examples

```css
.card {}                      /* Block */
.card__title {}               /* Element */
.card__title--highlighted {}  /* Modifier */
.card--featured {}            /* Block modifier */
.card--featured .card__title {} /* Element within modified block */

.btn {}
.btn--primary {}
.btn--secondary {}
.btn--ghost {}
.btn--lg {}
.btn--sm {}
.btn__icon {}
.btn__text {}

.navbar {}
.navbar__logo {}
.navbar__links {}
.navbar__link {}
.navbar__link--active {}
.navbar__cta {}
.navbar--scrolled {}
.navbar--transparent {}
```

## 35.2 CSS File Import Order

In `main.css`:

```css
/* 1. Design Tokens */
@import 'variables.css';

/* 2. Reset */
@import 'reset.css';

/* 3. Base Styles */
@import 'base.css';
@import 'typography.css';

/* 4. Animations */
@import 'animations.css';

/* 5. Utilities */
@import 'utilities.css';

/* 6. Components (alphabetical) */
@import 'components/accordion.css';
@import 'components/achievements.css';
@import 'components/buttons.css';
@import 'components/cards.css';
@import 'components/carousel.css';
@import 'components/confetti.css';
@import 'components/countdown.css';
@import 'components/difficulty.css';
@import 'components/footer.css';
@import 'components/forms.css';
@import 'components/hero.css';
@import 'components/instructions.css';
@import 'components/leaderboard.css';
@import 'components/modal.css';
@import 'components/navbar.css';
@import 'components/progress.css';
@import 'components/quiz.css';
@import 'components/results.css';
@import 'components/settings.css';
@import 'components/skeleton.css';
@import 'components/stats.css';
@import 'components/toast.css';

/* 7. Homepage Sections */
@import 'sections/why-numericallyinclined.css';
@import 'sections/benefits.css';
@import 'sections/features.css';
@import 'sections/how-it-works.css';
@import 'sections/learning-journey.css';
@import 'sections/categories.css';
@import 'sections/daily-challenge.css';
@import 'sections/leaderboard-preview.css';
@import 'sections/stats-preview.css';
@import 'sections/achievements-preview.css';
@import 'sections/testimonials.css';
@import 'sections/faq.css';

/* 8. Themes */
@import 'themes/dark.css';
```

## 35.3 Utility Classes

```css
/* Display */
.d-none { display: none; }
.d-block { display: block; }
.d-flex { display: flex; }
.d-grid { display: grid; }
.d-inline-flex { display: inline-flex; }

/* Flex */
.flex-center { display: flex; align-items: center; justify-content: center; }
.flex-between { display: flex; align-items: center; justify-content: space-between; }
.flex-col { flex-direction: column; }
.flex-wrap { flex-wrap: wrap; }
.gap-1 { gap: var(--space-1); }
.gap-2 { gap: var(--space-2); }
.gap-4 { gap: var(--space-4); }
.gap-6 { gap: var(--space-6); }
.gap-8 { gap: var(--space-8); }

/* Text Alignment */
.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

/* Spacing (margin/padding) — Using m/p + t/r/b/l/x/y + size */
.mt-4 { margin-top: var(--space-4); }
.mb-8 { margin-bottom: var(--space-8); }
.mx-auto { margin-left: auto; margin-right: auto; }
.p-4 { padding: var(--space-4); }
.py-8 { padding-top: var(--space-8); padding-bottom: var(--space-8); }
.px-6 { padding-left: var(--space-6); padding-right: var(--space-6); }
/* ... extend as needed */

/* Width */
.w-full { width: 100%; }
.max-w-container { max-width: var(--container-max-width); }
.max-w-narrow { max-width: var(--container-max-width-narrow); }

/* Visibility */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* Container */
.container {
  width: 100%;
  max-width: var(--container-max-width);
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--container-padding-x);
  padding-right: var(--container-padding-x);
}
```

---

# 36. JavaScript Architecture

## 36.1 Module Pattern

All JavaScript uses ES6 modules with `import` / `export`:

```javascript
// quiz-engine.js
export class QuizEngine {
  constructor(options) { /* ... */ }
  start() { /* ... */ }
  submitAnswer(answer) { /* ... */ }
  getResults() { /* ... */ }
}
```

```javascript
// app.js
import { QuizEngine } from './core/quiz-engine.js';
import { AudioManager } from './audio/audio-manager.js';
import { Settings } from './features/settings.js';
```

## 36.2 State Management

State is managed through a simple **Store** pattern:

```javascript
class Store {
  constructor(initialState) {
    this.state = initialState;
    this.subscribers = [];
  }

  getState() {
    return { ...this.state };
  }

  setState(updates) {
    this.state = { ...this.state, ...updates };
    this.notify();
  }

  subscribe(callback) {
    this.subscribers.push(callback);
    return () => {
      this.subscribers = this.subscribers.filter(cb => cb !== callback);
    };
  }

  notify() {
    this.subscribers.forEach(cb => cb(this.state));
  }
}
```

### Application State Shape

```javascript
const appState = new Store({
  // Current page/screen
  currentPage: 'home',    // 'home' | 'difficulty' | 'instructions' | 'countdown' | 'quiz' | 'results'

  // Quiz state
  quiz: {
    mode: null,
    difficulty: null,
    category: null,
    questions: [],
    currentIndex: 0,
    answers: [],
    score: 0,
    streak: 0,
    startTime: null,
  },

  // User state
  user: {
    username: 'Player1234',
    level: 1,
    xp: 0,
    coins: 0,
    dailyStreak: 0,
  },

  // Settings
  settings: { /* ... from Section 24 */ },
});
```

## 36.3 Data Persistence

All user data is persisted to `localStorage` via a `Storage` utility:

```javascript
// storage.js
export const Storage = {
  prefix: 'numericallyinclined_',

  get(key, defaultValue = null) {
    try {
      const raw = localStorage.getItem(this.prefix + key);
      return raw ? JSON.parse(raw) : defaultValue;
    } catch {
      return defaultValue;
    }
  },

  set(key, value) {
    try {
      localStorage.setItem(this.prefix + key, JSON.stringify(value));
    } catch (e) {
      console.warn('Storage quota exceeded:', e);
    }
  },

  remove(key) {
    localStorage.removeItem(this.prefix + key);
  },

  clear() {
    Object.keys(localStorage)
      .filter(key => key.startsWith(this.prefix))
      .forEach(key => localStorage.removeItem(key));
  }
};
```

### Storage Keys

| Key                        | Type   | Description                          |
|----------------------------|--------|--------------------------------------|
| `numericallyinclined_settings`         | Object | User settings                        |
| `numericallyinclined_stats`            | Object | User statistics                      |
| `numericallyinclined_achievements`     | Object | Achievement progress and unlocks     |
| `numericallyinclined_streak`           | Object | Streak data                          |
| `numericallyinclined_leaderboard`      | Array  | User's leaderboard entries           |
| `numericallyinclined_user`             | Object | User profile (username, level, XP)   |
| `numericallyinclined_daily_challenge`  | Object | Today's challenge state              |
| `numericallyinclined_theme`            | String | Current theme preference             |
| `numericallyinclined_first_visit`      | Bool   | Whether this is the first visit      |
| `numericallyinclined_quiz_history`     | Array  | Last 50 quiz results                 |

---

# 37. Naming Conventions

## 37.1 Files and Folders

| Type          | Convention       | Example                    |
|---------------|------------------|----------------------------|
| HTML files    | kebab-case       | `index.html`, `quiz.html`  |
| CSS files     | kebab-case       | `navbar.css`, `hero.css`   |
| JS files      | kebab-case       | `quiz-engine.js`, `app.js` |
| Image files   | kebab-case       | `hero-abacus.svg`          |
| Audio files   | kebab-case       | `correct.mp3`, `bgm-menu.mp3` |
| Folders       | kebab-case       | `components/`, `features/` |

## 37.2 CSS Classes

| Type           | Convention       | Example                         |
|----------------|------------------|---------------------------------|
| Block          | kebab-case       | `.navbar`, `.quiz-card`         |
| Element        | BEM `__`         | `.navbar__link`, `.card__title` |
| Modifier       | BEM `--`         | `.btn--primary`, `.card--large` |
| Utility        | Short kebab      | `.d-flex`, `.mt-4`, `.text-center` |
| State          | `is-` / `has-`   | `.is-active`, `.is-open`, `.has-error` |
| JavaScript hook| `js-`            | `.js-toggle`, `.js-accordion`   |

## 37.3 JavaScript

| Type           | Convention       | Example                         |
|----------------|------------------|---------------------------------|
| Variables      | camelCase        | `currentScore`, `isActive`      |
| Constants      | UPPER_SNAKE_CASE | `MAX_QUESTIONS`, `API_URL`      |
| Functions      | camelCase        | `calculateScore()`, `renderCard()` |
| Classes        | PascalCase       | `QuizEngine`, `AudioManager`    |
| Event names    | kebab-case       | `quiz:start`, `achievement:unlocked` |
| DOM IDs        | kebab-case       | `#hero-section`, `#quiz-timer`  |
| Data attributes| kebab-case       | `data-difficulty`, `data-category` |

## 37.4 HTML IDs (for Testing)

Every interactive element MUST have a unique, descriptive `id`:

| Element                    | ID                          |
|----------------------------|-----------------------------|
| Start Quiz button (hero)   | `hero-start-btn`            |
| Mobile menu toggle         | `mobile-menu-toggle`        |
| Theme toggle               | `theme-toggle`              |
| Sound toggle               | `sound-toggle`              |
| Quiz timer display         | `quiz-timer`                |
| Quiz score display         | `quiz-score`                |
| Quiz progress bar          | `quiz-progress`             |
| Answer option A            | `answer-option-a`           |
| Answer option B            | `answer-option-b`           |
| Answer option C            | `answer-option-c`           |
| Answer option D            | `answer-option-d`           |
| Results score              | `results-score`             |
| Play Again button          | `results-play-again`        |
| Settings panel             | `settings-panel`            |

---

# 38. Coding Standards

## 38.1 HTML Standards

- Use semantic HTML5 elements (`<header>`, `<main>`, `<nav>`, `<section>`, `<footer>`, `<article>`, `<aside>`)
- One `<h1>` per page
- Proper heading hierarchy (no skipping levels)
- All images have `alt` attributes
- All forms have `<label>` elements
- Use `<button>` for actions, `<a>` for navigation
- Validate with W3C HTML Validator
- Self-close void elements: `<img />`, `<br />`, `<input />`

## 38.2 CSS Standards

- Mobile-first media queries (`min-width`)
- Use CSS custom properties for ALL design tokens
- No `!important` except in utility overrides and accessibility
- No inline styles
- Properties ordered: Position → Display → Box Model → Typography → Visual → Animation
- Max nesting depth: 3 levels
- Prefer classes over IDs for styling
- Use `rem` for font sizes, `px` for borders/shadows, `%` / `vw` / `vh` for layout

## 38.3 JavaScript Standards

- Use `const` by default, `let` when reassignment is needed, never `var`
- Use template literals for string interpolation
- Use arrow functions for callbacks
- Use async/await over raw Promises
- No global variables (use modules)
- Handle all errors gracefully
- Comment complex logic
- Use JSDoc for public function documentation

```javascript
/**
 * Generates a random math question based on category and difficulty.
 * @param {string} category - Question category ID (e.g., 'addition', 'multiplication')
 * @param {string} difficulty - Difficulty level ('beginner' | 'easy' | 'medium' | 'hard' | 'expert' | 'master')
 * @returns {{ question: string, answer: number, options: number[] }}
 */
function generateQuestion(category, difficulty) {
  // ...
}
```

## 38.4 Code Quality Rules

- No `console.log` in production code (use a debug flag)
- No `alert()`, `confirm()`, or `prompt()` — use custom modals/toasts
- No `eval()` or `Function()` constructor
- No `document.write()`
- No `innerHTML` with user-generated content (XSS risk)
- Always use `textContent` for text insertion
- Sanitize any data rendered to the DOM

---

# 39. Testing Checklist

## 39.1 Functional Testing

### Homepage

- [ ] All 14 homepage sections render correctly
- [ ] Scroll-triggered animations fire at correct scroll positions
- [ ] Navbar transitions from transparent to solid on scroll
- [ ] Mobile menu opens and closes correctly
- [ ] All navbar links smooth-scroll to correct sections
- [ ] "Start Quiz" CTA navigates to difficulty selection
- [ ] Testimonial carousel auto-scrolls and manual controls work
- [ ] FAQ accordion opens/closes items correctly (only one open at a time)
- [ ] Footer links are functional
- [ ] Floating math symbols animate in hero

### Quiz Flow

- [ ] Difficulty selection works for all 7 levels
- [ ] Instructions screen shows correct information for selected difficulty
- [ ] Countdown animation plays correctly (3-2-1-GO!)
- [ ] Questions render correctly for all 17 question types
- [ ] All 4 answer options are unique and one is correct
- [ ] Selecting an answer shows correct/wrong feedback
- [ ] Timer counts down correctly
- [ ] Timer changes color at correct thresholds
- [ ] Timer expiration marks question as wrong
- [ ] Progress bar updates after each question
- [ ] Score updates after correct answers
- [ ] Streak counter increments/resets correctly
- [ ] Results screen shows accurate statistics
- [ ] Play Again returns to difficulty selection
- [ ] Exit quiz (with confirmation) returns to homepage

### Gamification

- [ ] XP is calculated correctly (base + speed + streak + difficulty)
- [ ] Level up triggers at correct XP thresholds
- [ ] Level up animation plays
- [ ] Coins are earned correctly
- [ ] Achievements unlock when conditions are met
- [ ] Achievement notification displays
- [ ] Daily streak increments on first quiz of the day
- [ ] Daily streak resets if a day is missed
- [ ] Confetti triggers on perfect score and achievement unlock

### Settings

- [ ] Theme toggle (Light/Dark/System) works correctly
- [ ] Sound toggle enables/disables sound effects
- [ ] Music toggle enables/disables background music
- [ ] Timer setting changes quiz timer duration
- [ ] Question count setting changes number of questions
- [ ] Reset Progress clears all localStorage data (with confirmation)
- [ ] Settings persist after page reload

### Statistics

- [ ] All stat values are accurate
- [ ] Statistics update after each quiz
- [ ] Per-category stats track correctly
- [ ] Progress charts display correctly
- [ ] Empty state shows when no data exists

### Leaderboard

- [ ] Mock data displays correctly
- [ ] User's real score inserts at correct rank
- [ ] Tab switching (Daily/Weekly/Monthly/All Time) works
- [ ] Top 3 have special styling (gold/silver/bronze)

## 39.2 Visual Testing

- [ ] All elements match the design specification colors
- [ ] Typography uses correct fonts, sizes, and weights
- [ ] All animations are smooth (60fps)
- [ ] No visual glitches or layout shifts
- [ ] Dark mode applies correctly to all elements
- [ ] All icons render correctly (SVG)
- [ ] Glass effects render correctly (backdrop-filter)
- [ ] Gradients render correctly
- [ ] Shadows render correctly

## 39.3 Responsive Testing

- [ ] Mobile (375px) — iPhone SE
- [ ] Mobile (390px) — iPhone 14
- [ ] Mobile (428px) — iPhone 14 Pro Max
- [ ] Tablet (768px) — iPad
- [ ] Tablet (1024px) — iPad Pro
- [ ] Laptop (1280px)
- [ ] Desktop (1440px)
- [ ] Ultra-wide (1920px)
- [ ] No horizontal scroll at any breakpoint
- [ ] Touch targets ≥ 44px on touch devices
- [ ] Text is readable at all sizes

## 39.4 Accessibility Testing

- [ ] Lighthouse Accessibility ≥ 95
- [ ] All interactive elements keyboard-accessible
- [ ] Tab order is logical
- [ ] Focus styles are visible
- [ ] Screen reader can navigate all content
- [ ] All images have alt text
- [ ] Color contrast meets WCAG AA
- [ ] Reduced motion preference is respected
- [ ] ARIA attributes are correct
- [ ] Skip-to-content link works

## 39.5 Performance Testing

- [ ] Lighthouse Performance ≥ 95
- [ ] FCP < 1.2s
- [ ] LCP < 2.5s
- [ ] CLS < 0.1
- [ ] FID < 100ms
- [ ] TTI < 3.5s
- [ ] No render-blocking resources
- [ ] Images are optimized and lazy-loaded
- [ ] CSS and JS are minified (production build)
- [ ] Service Worker registers and caches correctly
- [ ] Offline mode works

---

# 40. Browser Compatibility

## 40.1 Supported Browsers

| Browser         | Minimum Version | Notes                          |
|-----------------|-----------------|--------------------------------|
| Chrome          | 90+             | Primary target                 |
| Firefox         | 90+             | Full support                   |
| Safari          | 15+             | Test backdrop-filter           |
| Edge            | 90+             | Chromium-based                 |
| Samsung Internet| 15+             | Android popular                |
| Opera           | 76+             | Chromium-based                 |

## 40.2 Feature Support Notes

| Feature              | Fallback Strategy                                     |
|----------------------|-------------------------------------------------------|
| CSS Custom Properties| Supported by all target browsers                      |
| `backdrop-filter`    | Provide solid background fallback for older Safari     |
| CSS Grid             | Supported by all target browsers                      |
| ES6 Modules          | Supported by all target browsers                      |
| Intersection Observer| Supported; polyfill for IE if needed                  |
| Service Worker       | Supported; graceful degradation without               |
| Web Audio API        | Supported; silent fallback                            |
| `prefers-reduced-motion` | Supported; fallback to animations on              |
| `clamp()`            | Supported by all target browsers                      |

## 40.3 Polyfills

No polyfills needed for the target browser versions. If supporting older browsers becomes necessary, add polyfills for:
- `IntersectionObserver`
- `CSS.supports`
- `smooth scroll behavior`

---

# 41. Future Roadmap

## Phase 1: MVP (Current — Months 0–2)

- [x] Complete homepage (14 sections, single scroll)
- [x] Complete quiz flow (difficulty → quiz → results)
- [x] All 17 question types
- [x] All 7 difficulty levels
- [x] Timer system
- [x] Gamification (XP, coins, levels, streaks)
- [x] Achievement system
- [x] Statistics dashboard
- [x] Local leaderboard (mock data + user)
- [x] Settings (theme, sound, quiz config)
- [x] Dark mode
- [x] PWA + offline mode
- [x] Sound effects
- [x] All animations
- [x] Full responsive design
- [x] Accessibility (WCAG AA)

## Phase 2: Social & Backend (Months 3–5)

- [ ] Firebase/Supabase backend integration
- [ ] User authentication (email, Google, GitHub)
- [ ] Cloud-synced progress
- [ ] Real leaderboard (global)
- [ ] Social sharing (share scores to Twitter, Facebook)
- [ ] Shareable result cards (generated images)
- [ ] User profiles with public stats
- [ ] Friend system (add friends, compare stats)

## Phase 3: Advanced Features (Months 5–8)

- [ ] Multi-language support (Hindi, Spanish, French)
- [ ] Classroom mode (teacher creates session, students join)
- [ ] Custom quiz builder (teachers create quizzes)
- [ ] Multiplayer real-time challenges (WebSocket)
- [ ] More question types (algebra, geometry basics)
- [ ] Story mode (progressive levels with narrative)
- [ ] Seasonal events and challenges

## Phase 4: Platform Expansion (Months 8–12)

- [ ] Native mobile app (React Native or Flutter)
- [ ] Premium subscription tier (advanced analytics, custom themes)
- [ ] API for third-party integrations
- [ ] Community features (forums, tips)
- [ ] AI-powered learning recommendations
- [ ] Accessibility enhancements (voice input, screen reader optimization)
- [ ] Analytics dashboard for teachers

---

# 42. Deployment Guide

## 42.1 Hosting Options

| Option            | Recommended | Notes                              |
|-------------------|-------------|------------------------------------|
| GitHub Pages      | ✅ MVP      | Free, easy, HTTPS                  |
| Netlify           | ✅ Best     | Free tier, automatic deploys, CDN  |
| Vercel            | ✅ Great    | Free tier, great performance       |
| Firebase Hosting  | Good        | Pairs well with Firebase backend   |
| AWS S3 + CloudFront| Enterprise | Scalable, production-grade         |

## 42.2 Build Process

Since NumericallyInclined is vanilla HTML/CSS/JS (no build tool required), the deployment process is:

1. **Copy all files** from `quiz-wiz-app/` to the hosting root
2. **Minify CSS and JS** for production using a build script:

```bash
# Example build script
#!/bin/bash

# Create dist directory
rm -rf dist
mkdir -p dist

# Copy HTML files
cp *.html dist/
cp manifest.json dist/
cp sw.js dist/
cp robots.txt dist/
cp sitemap.xml dist/

# Copy and minify CSS
mkdir -p dist/css
# Use a CSS minifier like csso or clean-css
npx csso css/main.css -o dist/css/main.css

# Copy and minify JS
mkdir -p dist/js
# Use a JS minifier like terser
npx terser js/app.js -o dist/js/app.js -c -m

# Copy assets
cp -r assets dist/

echo "Build complete! Deploy the 'dist' directory."
```

3. **Configure headers** for caching:

```
# Cache static assets for 1 year
/assets/*
  Cache-Control: public, max-age=31536000, immutable

# Cache CSS/JS for 1 week
/css/*
  Cache-Control: public, max-age=604800

/js/*
  Cache-Control: public, max-age=604800

# HTML: no cache (always fresh)
/*.html
  Cache-Control: no-cache
```

## 42.3 Environment Checklist

Before deploying to production:

- [ ] All `console.log` statements removed or gated behind debug flag
- [ ] CSS and JS minified
- [ ] Images optimized (WebP + fallbacks)
- [ ] Service Worker updated with new cache version
- [ ] Manifest.json icons all present
- [ ] favicon.ico accessible at root
- [ ] robots.txt configured
- [ ] sitemap.xml generated
- [ ] Open Graph image at correct URL
- [ ] HTTPS configured
- [ ] 404 page configured
- [ ] Lighthouse audit ≥ 95 in all categories

---

# 43. Git Workflow

## 43.1 Branch Strategy

| Branch        | Purpose                              | Deploys To    |
|---------------|--------------------------------------|---------------|
| `main`        | Production-ready code                | Production    |
| `develop`     | Integration branch for features      | Staging       |
| `feature/*`   | New feature development              | —             |
| `fix/*`       | Bug fixes                            | —             |
| `hotfix/*`    | Urgent production fixes              | Production    |

## 43.2 Commit Message Format

```
<type>(<scope>): <subject>

<body (optional)>
```

### Types

| Type       | Description                          |
|------------|--------------------------------------|
| `feat`     | New feature                          |
| `fix`      | Bug fix                              |
| `style`    | CSS/styling changes (no logic)       |
| `refactor` | Code refactoring (no feature/fix)    |
| `perf`     | Performance improvement              |
| `a11y`     | Accessibility improvement            |
| `docs`     | Documentation changes                |
| `test`     | Adding or updating tests             |
| `chore`    | Build process, tooling changes       |

### Examples

```
feat(quiz): add division question type
fix(timer): correct countdown display for decimals
style(hero): adjust floating symbol animation timing
refactor(storage): simplify localStorage wrapper
perf(images): convert PNGs to WebP format
a11y(quiz): add aria-live region for score updates
docs(readme): update difficulty ranges table
```

## 43.3 Pull Request Rules

- Every PR must have a descriptive title and body
- Include screenshots for visual changes
- Link to related issues
- Self-review before requesting review
- Squash merge to main/develop

---

# 44. Development Rules

## 44.1 General Rules

1. **Mobile-first development** — Start with mobile layout, enhance for larger screens.
2. **Test on real devices** — Use browser DevTools mobile emulation AND real devices.
3. **Commit often** — Small, focused commits. Don't bundle unrelated changes.
4. **Write self-documenting code** — Code should be readable without comments. Add comments only for "why", not "what".
5. **No dead code** — Remove unused code, don't comment it out.
6. **No TODOs in production** — Fix it now or create an issue.
7. **Performance budget** — Monitor bundle size. Don't add dependencies without justification.

## 44.2 Development Workflow

```
1. Read README.md (this document)
2. Set up local development server
3. Open browser DevTools (mobile view)
4. Build feature (mobile-first)
5. Test on multiple viewport sizes
6. Check accessibility (Lighthouse)
7. Check performance (Lighthouse)
8. Commit with proper message
9. Test on actual mobile device if possible
10. Push / create PR
```

## 44.3 Local Development Server

Use any simple HTTP server. Recommended:

```bash
# Using Python (already installed on Mac/Linux)
python3 -m http.server 8000

# Using Node.js
npx serve .

# Using VS Code
# Install "Live Server" extension
```

---

# 45. QA Checklist

## 45.1 Pre-Release QA Checklist

### Critical Path

- [ ] User can navigate from homepage to quiz and back
- [ ] Quiz generates correct questions for all 17 types
- [ ] Correct answers are always among the 4 options
- [ ] Score calculates correctly
- [ ] XP and coins persist after quiz completion
- [ ] Settings changes persist after page reload
- [ ] Dark mode renders correctly across all pages/sections
- [ ] Sound effects play at appropriate times
- [ ] Offline mode works after initial visit

### Visual Quality

- [ ] No broken layouts at any responsive breakpoint
- [ ] All text is readable (contrast, size, font rendering)
- [ ] All animations are smooth (no jank)
- [ ] No broken images or missing assets
- [ ] Consistent spacing and alignment
- [ ] Orange branding is consistent throughout

### Edge Cases

- [ ] Very long usernames truncate gracefully
- [ ] Score of 0 displays correctly
- [ ] Perfect score triggers confetti
- [ ] Timer at 0 skips question correctly
- [ ] Very fast answers (< 100ms) don't break anything
- [ ] Rapidly clicking answer options doesn't double-submit
- [ ] Browser back button doesn't break quiz state
- [ ] Page refresh during quiz doesn't crash the app
- [ ] localStorage full — handles gracefully
- [ ] Multiple tabs open simultaneously don't conflict

### Security

- [ ] No XSS vulnerabilities (user input is sanitized)
- [ ] No sensitive data in localStorage beyond app state
- [ ] No console errors in production
- [ ] CSP headers configured (if applicable)

---

# 46. Bug Tracking Strategy

## 46.1 Bug Severity Levels

| Severity    | Description                                             | Response Time  |
|-------------|---------------------------------------------------------|----------------|
| **P0** — Critical | App crashes, data loss, quiz doesn't work          | Fix immediately|
| **P1** — High     | Feature broken but workaround exists               | Fix within 24h |
| **P2** — Medium   | Visual glitch, minor functional issue              | Fix within 1 week |
| **P3** — Low      | Cosmetic issue, minor annoyance                    | Fix in next release |

## 46.2 Bug Report Format

```markdown
## Bug Report

**Title:** [Short descriptive title]

**Severity:** P0 / P1 / P2 / P3

**Environment:**
- Browser: Chrome 110 on macOS
- Viewport: 375×667 (iPhone SE)
- Theme: Light mode

**Steps to Reproduce:**
1. Navigate to homepage
2. Click "Start Quiz"
3. Select "Hard" difficulty
4. ...

**Expected Behavior:**
[What should happen]

**Actual Behavior:**
[What actually happens]

**Screenshot/Recording:**
[Attach if applicable]

**Console Errors:**
[Paste any console errors]
```

## 46.3 Known Issues Tracking

Maintain a `KNOWN_ISSUES.md` file in the project root listing any known bugs with their severity and planned fix timeline.

---

# 47. Acceptance Criteria

## 47.1 Homepage Acceptance Criteria

- **AC-HP-01:** Homepage loads in under 2.5 seconds on a 3G connection
- **AC-HP-02:** All 14 sections are visible when scrolling from top to bottom
- **AC-HP-03:** Navbar transitions from transparent (on hero) to white (scrolled) smoothly
- **AC-HP-04:** Hero section displays the quote, title, subtitle, and animated CTA button
- **AC-HP-05:** Floating math symbols animate continuously in the hero
- **AC-HP-06:** All scroll-triggered animations fire when elements enter viewport
- **AC-HP-07:** Testimonial carousel auto-scrolls and supports manual navigation
- **AC-HP-08:** FAQ accordion allows only one item open at a time
- **AC-HP-09:** The page is fully functional at 375px width (mobile)
- **AC-HP-10:** Lighthouse accessibility score ≥ 95

## 47.2 Quiz Flow Acceptance Criteria

- **AC-QZ-01:** User can select any of 7 difficulty levels
- **AC-QZ-02:** Countdown animation plays 3-2-1-GO before quiz starts
- **AC-QZ-03:** Questions display correctly for all 17 question types
- **AC-QZ-04:** Timer counts down accurately and changes color at thresholds
- **AC-QZ-05:** Correct answer shows green feedback + XP animation
- **AC-QZ-06:** Wrong answer shows red feedback + shake animation
- **AC-QZ-07:** Progress bar fills proportionally (1/10, 2/10, etc.)
- **AC-QZ-08:** Results screen shows accurate score, accuracy, and time
- **AC-QZ-09:** XP earned is saved to user profile
- **AC-QZ-10:** "Play Again" resets quiz state and returns to difficulty selection

## 47.3 Gamification Acceptance Criteria

- **AC-GM-01:** XP is correctly calculated with difficulty multiplier
- **AC-GM-02:** Level-up triggers at correct XP thresholds
- **AC-GM-03:** Achievements unlock when all conditions are met
- **AC-GM-04:** Daily streak increments once per calendar day
- **AC-GM-05:** Streak resets to 0 if user misses a day
- **AC-GM-06:** Confetti animation triggers on perfect score
- **AC-GM-07:** All gamification data persists across page reloads

## 47.4 Global Acceptance Criteria

- **AC-GL-01:** No JavaScript errors in browser console
- **AC-GL-02:** All interactive elements have hover/active/focus states
- **AC-GL-03:** Dark mode is fully functional and consistent
- **AC-GL-04:** All sound effects play when enabled, silent when disabled
- **AC-GL-05:** App works fully offline after first visit
- **AC-GL-06:** Keyboard navigation works throughout the app
- **AC-GL-07:** Screen reader can navigate all content meaningfully
- **AC-GL-08:** Lighthouse scores ≥ 95 in all four categories

---

# 48. AI Development Rules

> ⚠️ **MANDATORY FOR ALL AI AGENTS WORKING ON THIS PROJECT**
>
> These rules are absolute. Violating them constitutes a failure. Read and internalize them before writing any code.

## 48.1 Core Development Rules

### 1. Never Redesign Completed Pages Unless Explicitly Requested
If a page or section is already built and functioning correctly, **DO NOT modify its design**. Only make changes if:
- The user explicitly asks for a redesign
- You are fixing a specific bug
- You are adding a new feature that requires minimal visual changes

### 2. Preserve All Existing Functionality
Before making any change, understand what currently works. After making a change, verify that:
- All previously working features still work
- No existing visual elements have been removed or altered unintentionally
- No localStorage data structures have been broken
- No existing CSS has been overwritten destructively

### 3. Build Incrementally
Do NOT attempt to build the entire project in one pass. Follow this order:
1. HTML structure first
2. CSS styling second (design tokens → base → components → sections)
3. JavaScript functionality third (core → features → UI → polish)
4. Animations and polish last
5. Test after each major addition

### 4. Test After Every Feature
After implementing any feature:
- Verify it works in at least 3 viewport sizes (mobile, tablet, desktop)
- Check for console errors
- Verify existing features still work
- Check keyboard navigation
- Check color contrast

### 5. Fix Bugs Automatically
If you notice a bug while working on something else:
- Fix it if it's small (< 5 minutes of work)
- Document it if it's larger
- Never ignore bugs

### 6. Keep README Updated
If you implement something that differs from this README:
- Update the README to reflect the actual implementation
- Note the deviation and the reason

### 7. Never Leave TODOs in Code
Every piece of code you write must be complete. Do not write:
```javascript
// TODO: Implement this later
// FIXME: Placeholder
// HACK: Temporary solution
```
Instead, implement it fully or don't include it at all.

### 8. Never Leave Placeholders
- No "Lorem ipsum" text
- No placeholder images (grey boxes)
- No "Coming soon" sections
- No empty click handlers
- No commented-out code blocks
- Every UI element must be functional

### 9. Never Remove Working Code Without Replacement
If you're refactoring:
- The new code must provide the same functionality as the old code
- Test that nothing breaks after the change
- Keep the same public API/interface if other modules depend on it

### 10. Always Write Production-Ready Code
- Proper error handling
- Input validation
- Edge case handling
- Performance-conscious implementation
- Accessible markup
- Semantic HTML
- Clean, readable, documented code

## 48.2 Design & Branding Rules

### 11. Always Maintain Responsive Behavior
- Test at 375px, 768px, 1024px, 1280px, 1920px at minimum
- No horizontal scrolling at any breakpoint
- Text must be readable at all sizes
- Touch targets ≥ 44px on mobile

### 12. Maintain Consistent Orange-First Branding
- Primary brand color is ALWAYS `#FC8019`
- Use the complete color system defined in Section 9
- Every screen must feel visually connected to the brand
- When in doubt, lean toward warm orange tones
- Dark mode still uses orange as the primary accent

### 13. Prioritize Performance and Accessibility
- Lighthouse Performance ≥ 95
- Lighthouse Accessibility ≥ 95
- Always use semantic HTML
- Always provide alt text, aria labels
- Always respect `prefers-reduced-motion`
- Never use heavy libraries when vanilla JS suffices

## 48.3 Architecture Rules

### 14. Keep the Homepage as One Long Scrolling Landing Page
- The homepage (`index.html`) is a SINGLE HTML file
- All 14 sections exist in sequence on this one page
- Navigation between sections is via smooth scrolling
- Never split the homepage into multiple pages

### 15. Only the Quiz Experience Should Use Multiple Pages
- The quiz flow can use a separate page (`quiz.html`) or DOM-based page switching
- The quiz flow includes: Difficulty Selection → Instructions → Countdown → Quiz → Results
- These can be implemented as:
  - Separate HTML pages (simpler)
  - Single-page with JavaScript DOM manipulation (smoother)
  - Either approach is acceptable, but transitions must be smooth

### 16. Use Vanilla JavaScript Only
- No React, Vue, Angular, or any framework
- No jQuery
- No heavy utility libraries (lodash, moment.js)
- ES6+ features only (modules, classes, arrow functions, template literals)
- Exception: Lightweight, single-purpose libraries are acceptable if justified (e.g., a confetti library < 5KB)

### 17. Follow the Defined File Structure
- Use the exact folder structure defined in Section 33
- Do not reorganize without explicit instruction
- New files must fit logically within the existing structure

## 48.4 Data & Storage Rules

### 18. All User Data in localStorage
- No external APIs or databases for MVP
- Use the Storage utility with the `numericallyinclined_` prefix
- Always handle JSON parse/stringify errors
- Always handle storage quota exceeded errors
- Never store more than 5MB of data

### 19. Question Generation is Client-Side
- All questions are generated in JavaScript at quiz start time
- No question database or API calls needed
- Use the ranges and rules defined in Section 21
- Ensure randomness (don't repeat the same question in one quiz)

## 48.5 Quality Rules

### 20. Code Must Pass These Automated Checks
Before considering any feature "done":
- ✅ No console errors or warnings
- ✅ No broken layouts at any breakpoint
- ✅ Lighthouse Performance ≥ 90 (target 95)
- ✅ Lighthouse Accessibility ≥ 90 (target 95)
- ✅ All interactive elements have keyboard access
- ✅ All text meets WCAG AA contrast ratios
- ✅ PWA installable (if service worker implemented)

### 21. Use This README as the Single Source of Truth
- If the README says it, implement it
- If the README doesn't mention it, use professional judgement
- If you disagree with the README, implement it anyway and flag the concern
- Keep the README updated with any deviations

---

## Appendix A: Quick Reference — Color Tokens

```css
:root {
  --primary:          #FC8019;
  --primary-hover:    #E5700F;
  --primary-active:   #CC6400;
  --primary-light:    #FFA54D;
  --primary-lighter:  #FFD4A8;
  --primary-lightest: #FFF0E0;

  --secondary:        #FF9F43;
  --accent:           #FFB84D;

  --bg:               #FFFFFF;
  --surface:          #FFF8F1;
  --surface-hover:    #FFF0E0;

  --success:          #16A34A;
  --success-light:    #DCFCE7;
  --danger:           #DC2626;
  --danger-light:     #FEE2E2;
  --warning:          #F59E0B;
  --info:             #3B82F6;

  --text-primary:     #1A1A1A;
  --text-secondary:   #525252;
  --text-tertiary:    #737373;
  --text-disabled:    #A3A3A3;
  --text-inverse:     #FFFFFF;
  --text-link:        #FC8019;
}
```

## Appendix B: Quick Reference — Typography

```css
:root {
  --font-sans:      'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-display:   'Outfit', var(--font-sans);
  --font-mono:      'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
}
```

## Appendix C: Quick Reference — Breakpoints

```css
/* Mobile:    0 – 639px     (default) */
/* Tablet:    640px+        (sm) */
/* Laptop:    1024px+       (md) */
/* Desktop:   1280px+       (lg) */
/* Ultrawide: 1536px+       (xl) */
```

---

> **This document is version 1.0.0. It is the definitive source of truth for the NumericallyInclined project. All development must conform to this specification.**

---

*End of NumericallyInclined Master Specification*
# NumericallyInclined
