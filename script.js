document.addEventListener("DOMContentLoaded", function() {
    const storyForm = document.getElementById("storyForm");
    const storyList = document.getElementById("storyList");

    // Попытка загрузить сохраненные истории из локального хранилища
    const savedStories = JSON.parse(localStorage.getItem("stories")) || [];

    // Заполнение списка историй сохраненными данными
    for (const savedStory of savedStories) {
        const newStory = createStoryElement(savedStory.title, savedStory.author, savedStory.content);
        storyList.appendChild(newStory);
    }

    storyForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const content = document.getElementById("content").value;

        if (title && author && content) {
            const newStory = createStoryElement(title, author, content);
            storyList.appendChild(newStory);

            // Сохранение истории в локальное хранилище
            const newSavedStory = { title, author, content };
            savedStories.push(newSavedStory);
            localStorage.setItem("stories", JSON.stringify(savedStories));

            storyForm.reset();
        }
    });

    function createStoryElement(title, author, content) {
        const li = document.createElement("li");
        li.classList.add("story-item");

        const storyContent = `
            <h3>${title}</h3>
            <p><strong>Автор:</strong> ${author}</p>
            <p>${content}</p>
        `;

        li.innerHTML = storyContent;
        return li;
    }
});