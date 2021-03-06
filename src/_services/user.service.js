import config from 'config';
import {authHeader} from '../_helpers';

export const userService = {
    login,
    logout,
    getAll,
    signup
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, password})
    };

    return fetch(`${config.apiUrl}/api/users/signin?password=` + password + `&username=` + username, requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('user', user);
            localStorage.setItem('username', username);
            return localStorage.getItem('user');
        });
}

function logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('username');
}

function signup(username, password, email) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            'username': username,
            'password': password,
            'email': email,
            "roles": [
                "ROLE_ADMIN"
            ]
        })
    };
    console.log('req body:' + requestOptions.body.toString());
    return fetch(`${config.apiUrl}/api/users/signup`, requestOptions).then(response => {
        console.log('response:' + response);
        console.log('status:' + response.status);
        return response.status;
    });
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text;
        if (response.status !== 200) {
            if (response.status === 401) {
                logout();
                location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        console.log('response.next' + data);
        return data;
    });
}

