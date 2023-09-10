import React from 'react';
import Post from '../../components/posts';


const PostDetailPage = ({ Post }) => {
    return (
        <div>
            <h1>Detalle del Post</h1>
            <Post post={Post}/>
            {/* Aquí se pueden mostrar los comentarios  */}
        </div>
    );
};

export async function getServerSideProps ({ params }) {
    const response = await fetch('URL_API/${params.id}');
    const post = await response.json();


    return {
        props: {
            post,
        },
    };
}



export default PostDetailPage;