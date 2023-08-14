// Дождаться полной загрузки страницы перед началом выполнения скрипта
document.addEventListener("DOMContentLoaded", function() {
    // Получить ссылки на элементы формы и списка историй
    const storyForm = document.getElementById("storyForm");
    const storyList = document.getElementById("storyList");

    // Обработчик события отправки формы
    storyForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Предотвратить стандартное действие отправки формы

        // Получить значения полей формы
        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const content = document.getElementById("content").value;

        // Проверить, что все поля формы заполнены
        if (title && author && content) {
            // Создать новый элемент истории и добавить его в список
            const newStory = createStoryElement(title, author, content);
            storyList.appendChild(newStory);
            storyForm.reset(); // Сбросить значения формы
        }
    });

    // Функция для создания элемента истории
    function createStoryElement(title, author, content) {
        const li = document.createElement("li"); // Создать элемент списка
        li.classList.add("story-item"); // Добавить класс для стилизации

        // Создать HTML-разметку для истории
        const storyContent = `
            <h3>${title}</h3>
            <p><strong>Автор:</strong> ${author}</p>
            <p>${content}</p>
        `;

        li.innerHTML = storyContent; // Вставить разметку в элемент списка
        return li; // Вернуть созданный элемент
    }
});