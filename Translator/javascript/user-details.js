// Аватар
// Показати/приховати вікно з інформацією про користувача та кнопку вихід з аккаунту при кліку на аватар
document.querySelector('.avatar').addEventListener('click', function() {
    var userDetails = document.querySelector('.user-details');
    if (userDetails.style.display === 'none' || userDetails.style.display === '') {
        userDetails.style.display = 'block';
        // Перевірка, чи користувач зареєстрований
        if (userIsLoggedIn()) {
            // Якщо користувач зареєстрований, відображаємо профіль
            showUserProfile();
        } else {
            // Якщо користувач не зареєстрований, відображаємо повідомлення "Зареєструйтесь"
            document.getElementById('user-name').innerText = 'Зареєструйтесь';
            // Приховуємо електронну пошту
            document.getElementById('user-email').style.display = 'none';
            // І приховуємо кнопку вийти з аккаунту
            document.querySelector('.user-details button').style.display = 'none';
        }
    } else {
        userDetails.style.display = 'none';
    }
});

// Перевірка, чи користувач зареєстрований
function userIsLoggedIn() {
    return false; 
}

// Показати профіль користувача
function showUserProfile() {
    // Відображення профілю з даними користувача
    document.getElementById('user-name').innerText = 'Ім\'я користувача';
    // Приховати електронну пошту
    document.getElementById('user-email').style.display = 'none';
    // І показати кнопку вийти з аккаунту
    document.querySelector('.user-details button').style.display = 'block';
}

// Кнопка вихід з аккаунту
var logoutButton = document.createElement('button');
logoutButton.textContent = 'Вийти з аккаунту';
logoutButton.addEventListener('click', function() {
    console.log('Ви вийшли з аккаунту.');
});

// Кнопка вихід під ім'я та електронну пошту користувача
document.querySelector('.user-details').appendChild(logoutButton);

