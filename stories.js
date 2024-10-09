document.getElementById('nav-submit-story').onclick = function () {
    const form = document.getElementById('submit-form');
    form.classList.toggle('hidden');
};

document.getElementById('submit-form').onsubmit = async function (event) {
    event.preventDefault();
    const title = document.getElementById('create-title').value;
    const author = document.getElementById('create-author').value;
    const url = document.getElementById('create-url').value;

    const newStory = await StoryList.addStory(currentUser, { title, author, url });
    displayStories();
};

document.getElementById('nav-login').onclick = function () {
    const loginForm = document.getElementById('login-form');
    loginForm.classList.toggle('hidden');
};

document.getElementById('login-form').onsubmit = async function (event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    await login(username, password);
    displayStories();
};
