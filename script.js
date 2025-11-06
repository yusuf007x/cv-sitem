// DOM yüklendiğinde çalış
document.addEventListener('DOMContentLoaded', () => {

    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // 1. Tarayıcı hafızasındaki (localStorage) temayı kontrol et
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.dataset.theme = savedTheme;
        // Buton metnini güncelle
        if (savedTheme === 'dark') {
            themeToggle.textContent = 'Aydınlık Mod';
        } else {
            themeToggle.textContent = 'Karanlık Mod';
        }
    } else {
        // Kayıtlı tema yoksa varsayılan olarak 'light' ata
        body.dataset.theme = 'light';
        themeToggle.textContent = 'Karanlık Mod';
    }

    // 2. Butona tıklanma olayını dinle
    themeToggle.addEventListener('click', () => {
        // Mevcut temanın tersini ayarla
        if (body.dataset.theme === 'light') {
            body.dataset.theme = 'dark';
            themeToggle.textContent = 'Aydınlık Mod';
            // Seçimi hafızaya kaydet
            localStorage.setItem('theme', 'dark');
        } else {
            body.dataset.theme = 'light';
            themeToggle.textContent = 'Karanlık Mod';
            // Seçimi hafızaya kaydet
            localStorage.setItem('theme', 'light');
        }
    });

});