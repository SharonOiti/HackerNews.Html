const API_URL = "https://hack-or-snooze-v3-api.herokuapp.com";

class Story {
    constructor({ title, author, url, id }) {
        this.title = title;
        this.author = author;
        this.url = url;
        this.id = id;
    }
}

class StoryList {
    static async addStory(user, storyData) {
        const response = await axios.post(`${API_URL}/stories`, {
            token: user.loginToken,
            story: storyData,
        });
        return new Story(response.data.story);
    }

    static async getStories() {
        const response = await axios.get(`${API_URL}/stories`);
        return response.data.stories.map(story => new Story(story));
    }
}

class User {
    constructor(username, password, token) {
        this.username = username;
        this.password = password;
        this.loginToken = token;
    }
}
