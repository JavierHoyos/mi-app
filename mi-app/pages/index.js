// pages/index.js


import React from 'react';
import React, {useEffect, useState} from 'react';
import { getPosts } from '../api';

const HomePage = () => {
    const [post, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then((data) => {
            setPosts(data);
        });
    });


return (
    <div>
        <h1>Lista de Posts</h1>
        <ul>
            {posts.map((post) => {
                <li key={post.id}>
                    <a href={`/post/${post.id}`}>{post.title}</a> - {post.body} by {post.userId}
                </li>
            })}
        </ul>

        <p>
            <link href="/about">
                <a>Acerca de mis sueños en Auco</a>
            </link>
        </p>
    </div>
);
};

export async function getServerSideProps() {
    const response = await fetch('URL-API');
    const posts = await response.json();


    return {
        props: {
            posts,
        },
    };
}

export default HomePage;