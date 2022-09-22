import React from 'react';

const Comment = (props) => {
    const {comment} = props
    return (
        <div>
            <h5>postId: {comment.postId} - {comment.id}</h5>
            <p>{comment.name}</p>
            <p>{comment.email}</p>
        </div>
    );
};

export {Comment};