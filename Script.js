const rollBtn = document.getElementById('roll-btn');
const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const wrapper1 = document.getElementById('wrapper1');
const wrapper2 = document.getElementById('wrapper2');
const resultText = document.getElementById('result');

// Map traditional dice numbers to exact 3D orientation configurations
const rotationMap = {
    1: { x: 0, y: 0 },
    6: { x: 0, y: 180 },
    3: { x: 0, y: -90 },
    4: { x: 0, y: 90 },
    2: { x: -90, y: 0 },
    5: { x: 90, y: 0 }
};

function rollDice() {
    rollBtn.disabled = true;
    resultText.innerText = "Rolling...";

    // Remove existing animation classes to reset state
    wrapper1.classList.remove('drop-bounce');
    wrapper2.classList.remove('drop-bounce');
    
    // Trigger layout recalculation to ensure the animation reset registers
    void wrapper1.offsetWidth; 
    void wrapper2.offsetWidth;

    // Generate outcome
    const val1 = Math.floor(Math.random() * 6) + 1;
    const val2 = Math.floor(Math.random() * 6) + 1;

    // Calculate a massive spin twist while falling down
    const extraTurnsX1 = (Math.floor(Math.random() * 4) + 4) * 360;
    const extraTurnsY1 = (Math.floor(Math.random() * 4) + 4) * 360;
    const extraTurnsX2 = (Math.floor(Math.random() * 4) + 4) * 360;
    const extraTurnsY2 = (Math.floor(Math.random() * 4) + 4) * 360;

    const targetX1 = rotationMap[val1].x + extraTurnsX1;
    const targetY1 = rotationMap[val1].y + extraTurnsY1;
    const targetX2 = rotationMap[val2].x + extraTurnsX2;
    const targetY2 = rotationMap[val2].y + extraTurnsY2;

    // Apply drop mechanics and 3D rotational values simultaneously
    wrapper1.classList.add('drop-bounce');
    wrapper2.classList.add('drop-bounce');

    dice1.style.transform = `rotateX(${targetX1}deg) rotateY(${targetY1}deg)`;
    dice2.style.transform = `rotateX(${targetX2}deg) rotateY(${targetY2}deg)`;

    // Settle timing matches the CSS transition window
    setTimeout(() => {
        const total = val1 + val2;
        resultText.innerText = `Result: ${total} (${val1} + ${val2})`;
        rollBtn.disabled = false;
    }, 1600);
}

rollBtn.addEventListener('click', rollDice);
