const rollBtn = document.getElementById('roll-btn');
const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const wrapper1 = document.getElementById('wrapper1');
const wrapper2 = document.getElementById('wrapper2');
const resultText = document.getElementById('result');

// Base target angles for the specific side to land flat facing the user
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

    wrapper1.classList.remove('drop-bounce');
    wrapper2.classList.remove('drop-bounce');
    
    // Force CSS reflow to reset animations cleanly
    void wrapper1.offsetWidth; 
    void wrapper2.offsetWidth;

    const val1 = Math.floor(Math.random() * 6) + 1;
    const val2 = Math.floor(Math.random() * 6) + 1;

    // Generates completely unique random spins every single throw
    const extraTurnsX1 = (Math.floor(Math.random() * 3) + 3) * 360;
    const extraTurnsY1 = (Math.floor(Math.random() * 3) + 3) * 360;
    const extraTurnsX2 = (Math.floor(Math.random() * 3) + 3) * 360;
    const extraTurnsY2 = (Math.floor(Math.random() * 3) + 3) * 360;

    const targetX1 = rotationMap[val1].x + extraTurnsX1;
    const targetY1 = rotationMap[val1].y + extraTurnsY1;
    const targetX2 = rotationMap[val2].x + extraTurnsX2;
    const targetY2 = rotationMap[val2].y + extraTurnsY2;

    // Apply the falling and bouncing effects to the wrappers
    wrapper1.classList.add('drop-bounce');
    wrapper2.classList.add('drop-bounce');

    // Apply the fast spin rotations directly to the cubes
    dice1.style.transform = `rotateX(${targetX1}deg) rotateY(${targetY1}deg)`;
    dice2.style.transform = `rotateX(${targetX2}deg) rotateY(${targetY2}deg)`;

    setTimeout(() => {
        const total = val1 + val2;
        resultText.innerText = `Result: ${total} (${val1} + ${val2})`;
        rollBtn.disabled = false;
    }, 1600);
}

rollBtn.addEventListener('click', rollDice);
