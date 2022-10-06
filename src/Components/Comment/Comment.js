import React from 'react';

const Comment = ({comment}) => {
    return (
        <div>
            <h5>{comment.id}</h5>
            <p>{comment.body}</p>
        </div>
    );
};

export {Comment};