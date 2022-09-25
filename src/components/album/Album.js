import React from 'react';

function Album(props) {

    const {album} = props;

    return (
        <div>
            <h5>userId: {album.userId} - id: {album.id}</h5>
            <p>title: {album.title}</p>
        </div>
    );
}

export {Album};