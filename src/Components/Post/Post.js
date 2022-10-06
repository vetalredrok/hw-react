import React from 'react';
import {Link} from "react-router-dom";

const Post = ({post}) => {

    return (
        <div>
            <p>{post.id} - {post.title} </p>
            <button><Link to={post.id.toString()}>Details</Link></button>
        </div>
    );
};

export {Post};