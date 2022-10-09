import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {userActions} from "../../redux";
import {User} from "../User/User";
import css from './Users.module.css';

const Users = () => {

    const dispatch = useDispatch();

    const selector = useSelector(state => state.userReducer);

    const {users, currentUser, loading, error, oneUser} = selector;

    useEffect(() => {
        dispatch(userActions.getAllUsers());
        console.log(users);
    }, [])

    return (
        <div className={css.Users}>
            <div className={css.UsersBlock}>
                {
                    loading && <h3>Loading process....</h3>
                }
                {
                    error && <h3>Error dropped!</h3>
                }
                {
                    users.map(user => <User key={user.id} user={user}/>)
                }
            </div>
            <div className={css.CurrentUser}>
                <div className={css.User}>
                    User without request:<br/>
                    {
                        currentUser && currentUser.id + '--' + currentUser.name
                    }
                </div>
                <div className={css.User}>
                    User with request:<br/>
                    {
                        oneUser && oneUser.id + '--' + oneUser.name
                    }
                </div>

            </div>
        </div>
    );
};

export {Users};