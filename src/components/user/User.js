import React from 'react';

const User = (props) => {

    const {user} = props;

    return (
        <div>
            <h2>{user.id} - {user.name}{user.surname}</h2>
            <h3>{user.email}</h3>
        </div>
    );
};

export {User};