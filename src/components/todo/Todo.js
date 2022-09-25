import React from 'react';

function Todo(props) {

    const {todo} = props;


    return (
        <div>
            <h5>userId: {todo.userId} - id: {todo.id}</h5>
            <p>title: {todo.title}</p>
            <p>status: {todo.completed}</p>
            <hr/>
        </div>
    );
}

export {Todo};