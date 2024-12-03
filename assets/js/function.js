const startButton = document.getElementById('start-btn');
const balloonContainer = document.getElementById('balloon-container');
let paradeInterval;
let paradeTimeout;

function createBalloon() {
  const balloon = document.createElement('div');
  balloon.classList.add('balloon');

  // Add a random color to each balloon
  const randomColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
  balloon.style.backgroundColor = randomColor;

  // Position the balloon at a random horizontal position
  const randomX = Math.random() * window.innerWidth;
  balloon.style.left = `${randomX}px`;

  // Add the string to the balloon
  const string = document.createElement('div');
  string.classList.add('string');
  balloon.appendChild(string);

  balloonContainer.appendChild(balloon);

  // Remove the balloon once it has floated away
  setTimeout(() => {
    balloon.remove();
  }, 5000);
}

function startParade() {
  // Clear any previous parade
  clearInterval(paradeInterval);
  clearTimeout(paradeTimeout);

  // Create balloons at an interval
  paradeInterval = setInterval(createBalloon, 300);

  // Stop the parade after 10 seconds
  paradeTimeout = setTimeout(() => {
    clearInterval(paradeInterval);
  }, 10000);
}

// Attach event listener to the button
startButton.addEventListener('click', startParade);