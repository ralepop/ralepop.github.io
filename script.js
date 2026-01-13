const bgContainer = document.getElementById('bg-animation');
const flakeCount = 30; 

for (let i = 0; i < flakeCount; i++) {
    const flake = document.createElement('div');
    flake.classList.add('rale-flake');
    flake.innerText = 'rale';
    const leftPos = Math.random() * 100; 
    const duration = Math.random() * 5 + 5; 
    const delay = Math.random() * 5; 
    flake.style.left = leftPos + 'vw';
    flake.style.animation = `rale-fall ${duration}s linear infinite, rale-spin ${duration * 1.5}s ease-in-out infinite`;
    flake.style.animationDelay = `-${delay}s`; 
    bgContainer.appendChild(flake);
}

const cursor = document.getElementById('custom-cursor');
window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursor.style.transform = `translate(-50%, -50%) rotate(${(e.clientX + e.clientY) % 360}deg)`;
});

const input = document.getElementById('cmd-input');
const output = document.getElementById('terminal-output');
const contactSection = document.getElementById('contact-section');

input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const command = input.value.trim().toLowerCase();
        output.innerHTML += `<div><span class="prompt">user@rale:~$</span> ${input.value}</div>`;

        if (command === 'help') {
            output.innerHTML += `<div style="color:#777">Commands: about, contact, whois, matrix, clear</div>`;
        } else if (command === 'about') {
            output.innerHTML += `<div style="color:#777">Born in Belgrade.</div>`;
        } else if (command === 'whois') {
            output.innerHTML += `<div style="color:#777">Name: Rastko Popović</div>`;
        } else if (command === 'contact') {
            output.innerHTML += `<div style="color:#777">Look below.</div>`;
            contactSection.classList.remove('hidden');
        } else if (command === 'clear') {
            output.innerHTML = "Type 'help' to see available commands.";
            contactSection.classList.add('hidden');
        } else if (command === 'matrix') {
            document.body.style.color = "#00ff00";
            document.querySelectorAll('.rale-flake').forEach(f => f.style.color = "#00ff00");
        } else if (command !== "") {
            output.innerHTML += `<div style="color:#777">Unknown command: ${command}</div>`;
        }
        
        input.value = '';
        window.scrollTo(0, document.body.scrollHeight);
    }
});