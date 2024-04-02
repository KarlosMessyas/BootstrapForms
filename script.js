const buttonTheme = document.querySelector('.theme');
buttonTheme.addEventListener("click", () => {
    const html = document.querySelector('html');
    const currentTheme = html.getAttribute('data-bs-theme');
    if (currentTheme === 'dark') {
        html.setAttribute('data-bs-theme', 'light');
    } else {
        html.setAttribute('data-bs-theme', 'dark');
    }
});