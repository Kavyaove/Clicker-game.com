let score = 0;
const colors = ['#ff5733', '#33ff57', '#3357ff', '#ff33e6', '#33e6ff'];

function createBalloon() {
  const balloon = document.createElement('div');
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  balloon.style.backgroundColor = randomColor;

  balloon.classList.add('balloon');
  balloon.addEventListener('click', () => {
    incrementScore();
    balloon.remove();
  });

  const gameArea = document.getElementById('gameArea');
  gameArea.appendChild(balloon);

  const xPos = Math.random() * (window.innerWidth - 100);
  balloon.style.left = xPos + 'px';
}

function incrementScore() {
  score++;
  document.getElementById('score').textContent = score;
}

function startGame() {
  setInterval(createBalloon, 1000);
}

function restartGame() {
  const gameArea = document.getElementById('gameArea');
  gameArea.innerHTML = '';
  score = 0;
  document.getElementById('score').textContent = score;
  startGame();
}

startGame();
