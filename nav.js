document.getElementById('submit-story-link').onclick = function () {
    const form = document.getElementById('new-story-form');
    form.style.display = (form.style.display === 'none') ? 'block' : 'none';
};

document.getElementById('new-story-form').onsubmit = async function (event) {
    event.preventDefault();
    const title = document.getElementById('story-title').value;
    const author = document.getElementById('story-author').value;
    const url = document.getElementById('story-url').value;

    const newStory = await StoryList.addStory(currentUser, { title, author, url });
    displayStories();
};

document.getElementById('logout-button').onclick = function () {
    logout();
    displayStories();
};
