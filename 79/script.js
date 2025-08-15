const chakra = document.querySelector('.chakra');
let rotation = 0;

// Create 24 spokes for the Ashoka Chakra
for (let i = 0; i < 24; i++) {
    const spoke = document.createElement('div');
    spoke.className = 'spoke';
    spoke.style.transform = `rotate(${i * 15}deg)`;
    chakra.appendChild(spoke);
}

function rotateChakra() {
    rotation += 1;
    chakra.style.transform = `rotate(${rotation}deg)`;
    requestAnimationFrame(rotateChakra);
}

rotateChakra();
