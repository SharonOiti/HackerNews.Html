document.addEventListener('DOMContentLoaded', async () => {
    const token = localStorage.getItem('userToken');
    if (token) {
        // If there's a token, try to log in the user automatically
        try {
            const response = await axios.get(`${API_URL}/users/me`, { headers: { Authorization: `Bearer ${token}` } });
            currentUser = new User(response.data.username, null, token);
            document.getElementById('nav-user-profile').innerText = currentUser.username;
            document.getElementById('nav-logout').classList.remove('hidden');
            document.getElementById('nav-login').classList.add('hidden');
        } catch (err) {
            console.error("Failed to log in automatically:", err);
            localStorage.removeItem('userToken'); // Clear invalid token
        }
    }

    // Load and display stories
    await displayStories();

    // Set up other UI components as needed
});
 