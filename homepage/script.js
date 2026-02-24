const themeSelect = document.getElementById('theme-select');

function applyTheme(theme) {
    document.body.classList.remove('light-theme', 'dark-theme');
    if (theme === 'light') document.body.classList.add('light-theme');
    if (theme === 'dark')  document.body.classList.add('dark-theme');
    localStorage.setItem('portfolio-theme', theme);
}

function loadTheme() {
    const saved = localStorage.getItem('portfolio-theme') || 'minimal';
    applyTheme(saved);
    themeSelect.value = saved;
}

themeSelect.addEventListener('change', (e) => applyTheme(e.target.value));
document.addEventListener('DOMContentLoaded', loadTheme);
