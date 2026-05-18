const rollBtn = document.getElementById('roll-btn');
const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const resultText = document.getElementById('result');

// Map dice values to their exact CSS 3D rotation angles
const rotationMap = {
    1: { x: 0, y: 0 },
    6: { x: 0, y: 180 },
    3: { x: 0, y: -90 },
    4: { x: 0, y: 90 },
    2: { x: -90, y: 0 },
    5: { x: 90, y: 0 }
};

function rollDice() {
    // Disable button during the roll animation
    rollBtn.disabled = true;
    resultText.innerText = "Rolling...";

    // Generate random number between 1 and 6 for both dice
    const val1 = Math.floor(Math.random() * 6) + 1;
    const val2 = Math.floor(Math.random() * 6) + 1;

    // Add extra full rotations (360 * 3) to make the spin look realistic
    const extraTurnsX1 = (Math.floor(Math.random() * 3) + 3) * 360;
    const extraTurnsY1 = (Math.floor(Math.random() * 3) + 3) * 360;
    const extraTurnsX2 = (Math.floor(Math.random() * 3) + 3) * 360;
    const extraTurnsY2 = (Math.floor(Math.random() * 3) + 3) * 360;

    const targetX1 = rotationMap[val1].x + extraTurnsX1;
    const targetY1 = rotationMap[val1].y + extraTurnsY1;
    const targetX2 = rotationMap[val2].x + extraTurnsX2;
    const targetY2 = rotationMap[val2].y + extraTurnsY2;

    // Apply the 3D transform animations
    dice1.style.transform = `rotateX(${targetX1}deg) rotateY(${targetY1}deg)`;
    dice2.style.transform = `rotateX(${targetX2}deg) rotateY(${targetY2}deg)`;

    // Wait for animation to finish (1.5 seconds) before showing result
    setTimeout(() => {
        const total = val1 + val2;
        resultText.innerText = `Result: ${total} (${val1} + ${val2})`;
        rollBtn.disabled = false;
    }, 1500);
}

rollBtn.addEventListener('click', rollDice);
