// api.js

const baseUrl = 'https://jsonplaceholder.typicode.com';

export const getPosts = () => {
    const url = `${baseUrl}/posts`;
    return fetch(url).then((response)=> response.json());
};

export const getPostById = (postId) => {
    const url = `${baseUrl}/posts/${postId}`;
    return fetch(url).then((response) => response.json());
};

export const getCommentsByPostId = (postId) => {
    const url = `${baseUrl}/posts/${postId}/comments`;
    return fetch(url).then((response) => response.json());
};

