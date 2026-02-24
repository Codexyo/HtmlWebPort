const themeSelect = document.getElementById('theme-select');

function applyTheme(theme) {
    document.body.className = theme;
    localStorage.setItem('portfolio-theme', theme);
    themeSelect.value = theme;
}

// Map 'minimal' -> '' for classic resume (uses empty string class)
function toClassicClass(theme) {
    if (theme === 'light') return 'light-theme';
    if (theme === 'dark')  return 'dark-theme';
    return '';
}

function loadTheme() {
    const saved  = localStorage.getItem('portfolio-theme') || 'minimal';
    const mapped = toClassicClass(saved);
    document.body.className = mapped;
    themeSelect.value = mapped;
}

loadTheme();

themeSelect.addEventListener('change', (e) => {
    document.body.className = e.target.value;
    // Map back to canonical name for storage
    const canonical = e.target.value === 'light-theme' ? 'light'
                    : e.target.value === 'dark-theme'  ? 'dark'
                    : 'minimal';
    localStorage.setItem('portfolio-theme', canonical);
});
