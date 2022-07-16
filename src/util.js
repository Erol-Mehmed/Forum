





















import { deleteBookById } from "./api/data.js";

export function getUserData() {
    return JSON.parse(localStorage.getItem('user'));
}

export function setUserData(data) {
    localStorage.setItem('user', JSON.stringify(data));
}

export function clearUserData() {
    localStorage.removeItem('user');
}

export async function deleteUser() {
    // const confirmation = confirm('Are you sure about that?');
    // if (confirmation) {
    //     const userId = 'sss';
    //     await deleteUserById(userId);
       
    // }
}