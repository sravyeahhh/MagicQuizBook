
let score = 0;    
let totalQuestions = 0;

// Called when user guesses real or fake
function handleGuess(isGuessReal) {
  // If user guessed 'Real' and the fact was actually real, or
  // if user guessed 'Fake' and the fact was actually fake => correct guess
  const wasCorrect = (isGuessReal === currentFactIsReal);

  if (wasCorrect) {
    score++;
  }
  totalQuestions++;

  updateScoreboard();
  removeCurrentPage();
}

function updateScoreboard() {
  const sb = document.getElementById('scoreboard');
  sb.textContent = `Score: ${score}/${totalQuestions}`;
}

// We'll store info about the current question
let currentPage = null;
let currentFactIsReal = null;

// Remove the displayed page from DOM after guess
function removeCurrentPage() {
  if (currentPage) {
    currentPage.remove();
    currentPage = null;
    currentFactIsReal = null;
  }
}

// On book click => show new quiz question
document.getElementById('book').addEventListener('click', showQuizPage);

// Grab a random real fact from the API
async function getRealFact() {
  try {
    const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
    const data = await response.json();
    return data.text;
  } catch (error) {
    console.error('Error fetching fact:', error);
    return 'Fun fact unavailable, try again!';
  }
}

// Generate a random fake version of a fact
function makeFakeFact(realFact) {
  // A simple approach: append something random or invert something
  // For a real project, you might do more advanced transformations
  return realFact + ' ... (Actually, this part is made up!)';
}

async function showQuizPage() {
  // If there's already a page displayed, do nothing
  // Or remove the old page before creating a new one
  removeCurrentPage();

  const factText = await getRealFact();

  // 50% chance to show real or fake
  const showReal = Math.random() < 0.5;
  currentFactIsReal = showReal;

  const displayedText = showReal ? factText : makeFakeFact(factText);

  // Create page element
  const page = document.createElement('div');
  page.classList.add('page');

  // Add quiz text & buttons
  page.innerHTML = `
    <p>${displayedText}</p>
    <div class="quiz-buttons">
      <button class="quiz-btn" id="btn-real">Real</button>
      <button class="quiz-btn" id="btn-fake">Fake</button>
    </div>
  `;

  document.body.appendChild(page);
  currentPage = page;

  // Animate it to appear on screen
  setTimeout(() => {
    page.style.opacity = '1';
    page.style.transform = 'translate(-50%, -50%)';
  }, 100);

  // Handle the button clicks
  const btnReal = document.getElementById('btn-real');
  const btnFake = document.getElementById('btn-fake');

  btnReal.addEventListener('click', e => {
    // so we don’t trigger the book click
    e.stopPropagation(); 
    handleGuess(true);
  });
  btnFake.addEventListener('click', e => {
    e.stopPropagation();
    handleGuess(false);
  });
}
