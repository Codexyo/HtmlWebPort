const themeSelect = document.getElementById("theme-select");

themeSelect.onchange = () => {
    document.body.className = themeSelect.value;
};