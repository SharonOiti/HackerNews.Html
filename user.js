let currentUser = null;

async function login(username, password) {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    currentUser = new User(username, password, response.data.token);
    localStorage.setItem('userToken', currentUser.loginToken);
}

function logout() {
    currentUser = null;
    localStorage.removeItem('userToken');
}
