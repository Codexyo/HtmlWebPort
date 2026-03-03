const themeSelect = document.getElementById('theme-select');

function applyTheme(theme) {
    document.body.className = theme;
    localStorage.setItem('portfolio-theme', theme);
    themeSelect.value = theme;
}

const saved = localStorage.getItem('portfolio-theme') || 'minimal';
applyTheme(saved);

themeSelect.addEventListener('change', (e) => applyTheme(e.target.value));
