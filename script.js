document.querySelector('.start-button').addEventListener('click', () => {
    const startMenu = document.getElementById('startMenu');
    startMenu.style.display = startMenu.style.display === 'block' ? 'none' : 'block';
});

document.querySelectorAll('.menu-content ul li').forEach(item => {
    item.addEventListener('click', () => {
        const appName = item.getAttribute('data-app');
        const appWindow = document.getElementById(appName);
        if (appWindow) {
            appWindow.style.display = 'block';
        }
        document.getElementById('startMenu').style.display = 'none';
    });
});

document.querySelectorAll('.title-bar-controls button[aria-label="閉じる"]').forEach(button => {
    button.addEventListener('click', (e) => {
        e.target.closest('.window').style.display = 'none';
    });
});
