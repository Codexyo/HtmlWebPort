const themeSelect = document.getElementById('theme-select');

function applyTheme(theme) {
    document.body.classList.remove('light-theme', 'dark-theme');
    if (theme === 'light') document.body.classList.add('light-theme');
    if (theme === 'dark')  document.body.classList.add('dark-theme');
    localStorage.setItem('portfolio-theme', theme);
    themeSelect.value = theme;
}

const savedTheme = localStorage.getItem('portfolio-theme') || 'minimal';
applyTheme(savedTheme);

themeSelect.addEventListener('change', (e) => applyTheme(e.target.value));

function sayHello() {
    alert('Hello, everyone!');
}

function showSharingan() {
    const eye = document.getElementById('eyeContainer');
    eye.style.display = 'flex';
    setTimeout(() => { eye.style.display = 'none'; }, 2500);
}

function showInput() {
    const text = document.getElementById('userInput').value;
    document.getElementById('output').innerText = text;
}

const hoverText = document.getElementById('hoverText');
hoverText.addEventListener('mouseover', () => hoverText.classList.add('hovered'));
hoverText.addEventListener('mouseout',  () => hoverText.classList.remove('hovered'));
