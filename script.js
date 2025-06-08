let counter = 0;
const counterDisplay = document.getElementById('counter');
const clickButton = document.getElementById('clickButton');
const clickSound = document.getElementById('clickSound');

clickButton.addEventListener('click', () => {
    counter++;
    counterDisplay.textContent = counter;
    clickSound.currentTime = 0;
    clickSound.play();
});
