





















import * as api from "./api.js"

const endpoints = {
    'getAllBooks': '/data/books?sortBy=_createdOn%20desc',
    'getBookById': '/data/books/',
    'getMyBooks': (userId) => `/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
    'addBooks': '/data/books',
    'editBook': '/data/books/',
    'deleteBook': '/data/books/',
}

export async function getAllBooks() {
    return api.get(endpoints.getAllBooks);
}

export async function getMyBooks(userId) {
    return api.get(endpoints.getMyBooks(userId));
}

export async function getById(id) {
    return api.get(endpoints.getBookById + id);
}

export async function addBooks(bookData) {
    return api.post(endpoints.addBooks, bookData);
}

export async function editBook(id, bookData) {
    return api.put(endpoints.editBook + id, bookData);
}

export async function deleteBookById(id) {
    return api.delete(endpoints.deleteBook + id);
}

export async function likeABook(bookId) {
    return api.post(endpoints.likeABook, bookId);
}

export async function getBookLikes(bookId) {
    return api.get(endpoints.getBookLikes(bookId));
}

export async function isBookLiked(bookId, userId) {
    return api.get(endpoints.isLiked(bookId, userId));
}