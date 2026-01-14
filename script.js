const bgContainer = document.getElementById('bg-animation');
const flakeCount = 60;

for (let i = 0; i < flakeCount; i++) {
    const flake = document.createElement('div');
    flake.classList.add('rale-flake');
    flake.innerText = 'rale';
    
    const leftPos = Math.random() * 100;
    const duration = Math.random() * 8 + 7;
    const delay = Math.random() * 15;
    const size = Math.random() * 12 + 8;
    const opacity = Math.random() * 0.4 + 0.2;

    flake.style.left = leftPos + 'vw';
    flake.style.fontSize = size + 'px';
    flake.style.opacity = opacity;
    
    flake.style.animation = `rale-fall-spin ${duration}s linear infinite`;
    flake.style.animationDelay = `-${delay}s`; 

    bgContainer.appendChild(flake);
}