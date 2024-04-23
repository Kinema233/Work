// Оголошення масиву для зберігання історії перекладів
let translationHistory = [];

// Функція для додавання нового перекладу до історії
function addTranslationToHistory(translationText) {
    let currentDate = new Date();
    let translation = {
        text: translationText,
        date: currentDate.toLocaleString()
    };
    translationHistory.push(translation);
}

// Функція для відображення історії перекладу або повідомлення "Зареєструйтесь"
function displayTranslationHistory() {
    let historyContainer = document.getElementById("translation-history-container");
    
    if (userIsLoggedIn() && translationHistory.length > 0) {
        // Очищення контейнера перед відображенням нової історії
        historyContainer.innerHTML = "";
        // Проходження по кожному перекладу в історії
        translationHistory.forEach(function(translation, index) {
            // Створення елемента для відображення перекладу
            let translationElement = document.createElement("div");
            translationElement.textContent = `${index + 1}. ${translation.text} - ${translation.date}`;
            // Додавання елемента до контейнера
            historyContainer.appendChild(translationElement);
        });
    } else {
        // Якщо користувач не зареєстрований або історія перекладів пуста, відображаємо повідомлення "Зареєструйтесь"
        historyContainer.innerHTML = "<div class='registration-message'>Зареєструйтесь, щоб побачити історію перекладів</div>";
    }
}


// Функція для перевірки, чи користувач зареєстрований (припустимо, що у вас є функція userIsLoggedIn())
function userIsLoggedIn() {
    return true;
}

// Виклик функції для відображення історії перекладу або повідомлення "Зареєструйтесь" (необов'язково)
displayTranslationHistory();
