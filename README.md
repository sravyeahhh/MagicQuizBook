# MagicQuizBook

An interactive 3D "magical book" built with HTML, CSS, and JavaScript that quizzes users on fun facts. The book floats in a glowing aura, and each time you click it, a "page" tears off, displaying a random statement. The user must guess if it's **Real** or **Fake**, and a live scoreboard tracks correct answers.

## Table of Contents

1. [Demo](#demo)
2. [Installation](#installation)
3. [Technologies](#technologies)
4. [Project Structure](#project-structure)
5. [How It Works](#how-it-works)
6. [License](#license)

---

## Demo

If you'd like to see a live version, check out the deployed site on Netlify/GitHub Pages/Vercel (example link):

[Magical Book Quiz Live Demo](https://example-url-here.com)

---

## Installation

1. **Clone or Download** this repository:
   ```bash
   git clone https://github.com/YourUsername/MagicQuizBook.git
   ```
2. **Open the folder** in your code editor.
---

## Technologies

- **HTML5**: Structure for the page/book.
- **CSS3**: 3D transforms, keyframe animations, glowing effect, overall layout.
- **Vanilla JavaScript**:
  - **Async** API calls (`fetch`) to get random fun facts from [uselessfacts.jsph.pl](https://uselessfacts.jsph.pl/).
  - DOM manipulation to show/hide quiz pages.
  - Simple logic for real vs. fake statements.

---

## Project Structure

```
Magical-Book-Quiz/
├── index.html       # Main entry point
├── styles.css       # All the CSS (3D transforms, glow, scoreboard, etc.)
├── script.js        # JS logic (fetching facts, quiz logic, scoreboard)
└── README.md        # This readme file
```
---

## How It Works

1. **3D Book**: The left and right pages are tilted using `transform: rotateY()`, with a `perspective` set on the parent container.
2. **Floating Glow**: A `div.glow` uses `radial-gradient` plus keyframe animations (`pulseGlow`) to scale and fade in/out for a mystical effect.
3. **Click to Show Page**: Each click on the book triggers a function that:
   - **Fetches** a real fun fact from the API.
   - Randomly decides if it should remain **real** or be turned **fake**.
   - Creates a `.page` element in the DOM with two buttons: **Real** or **Fake**.
   - Animates the page upward and fades in.
4. **Scoring**:
   - If the user’s guess matches the statement’s reality, `score++`.
   - `totalQuestions++` always increments.
   - The scoreboard text (`Score: X/Y`) updates.
5. **Cleanup**: After guessing, the page is removed, ready for the next question.
---

## License

[MIT License](LICENSE) (Add your license of choice). Feel free to modify and use this project as you see fit.

