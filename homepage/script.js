const themeSelect = document.getElementById('theme-select');


function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'minimal';
    applyTheme(savedTheme);
    themeSelect.value = savedTheme;
}


function applyTheme(theme) {
    document.body.classList.remove('light-theme', 'dark-theme');

    if (theme === 'light') {
        document.body.classList.add('light-theme');
    } else if (theme === 'dark') {
        document.body.classList.add('dark-theme');
    }


    localStorage.setItem('theme', theme);
}

themeSelect.addEventListener('change', (e) => {
    applyTheme(e.target.value);
});


document.addEventListener('DOMContentLoaded', loadTheme);