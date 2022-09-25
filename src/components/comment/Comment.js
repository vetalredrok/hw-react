import React from 'react';
import {Link} from "react-router-dom";

function Comment(props) {

    const {comment} = props;

    return (
        <div>
            <Link to={'posts/'+comment.postId}>
            <h5>postId dependence: {comment.postId} - comment's id: {comment.id}</h5>
            <p>name comment: {comment.name}</p>
            <p>author's email: {comment.email}</p>
            </Link>
            <hr/>
        </div>
    );
}

export {Comment};