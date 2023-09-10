const postId = 1;
const url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });