import React from 'react';

const Post = ({ post }) => {
    return (
        <div className="border p-4 my-4">
            <h2 className='text-xl font-bold'>{post.title}</h2>
            <p className='text-gray-600'>{post.body}</p>
            <p className='text-blue-500'>Escrito por: {post.userId}</p>
        </div>
    );
};

export default Post;