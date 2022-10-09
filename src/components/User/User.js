import React from 'react';
import {useDispatch} from "react-redux";

import css from './User.module.css';
import {userActions} from "../../redux";

const User = ({user}) => {

    const dispatch = useDispatch();

    const id = user.id;

    return (
        <div className={css.User}>
            <h2>{user.id} -- {user.name}</h2>
            <h4>{user.username} -- {user.email}</h4>
            <button onClick={() => dispatch(userActions.setCurrentUser(user))}>Select without request</button>
            <button onClick={()=> dispatch(userActions.getById({id}))}>Select with request</button>
            <button onClick={()=> dispatch(userActions.deleteById(id))}>Delete user</button>
        </div>
    );
};

export {User};