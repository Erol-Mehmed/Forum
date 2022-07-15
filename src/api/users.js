





















import { clearUserData, setUserData } from '../util.js';
import { get, post } from './api.js';

const endpoints = {
    'login': '/users/login',
    'register': '/users/register',
    'logout': '/users/logout',
}

export async function login(email, password) {
    const user = await post(endpoints.login, { email, password });

    setUserData(user);
}

export async function registerToServer(username, email, password) {
    const user = await post(endpoints.register, { username, email, password });

    setUserData(user);
}

export async function logout() {
    get(endpoints.logout);
    clearUserData();
}