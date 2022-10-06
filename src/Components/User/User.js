import React from 'react';
import {Link} from "react-router-dom";

const User = ({user}) => {
    return (
        <div>
            <h4>{user.id} - {user.name}</h4>
            <button><Link to={user.id.toString()}>Details</Link></button>

        </div>
    );
};

export {User};