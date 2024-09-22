const changeThemeButton = document.getElementById('change-theme-btn');
changeThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});
