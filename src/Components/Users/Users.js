import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {userService} from "../../Services";
import {actions} from "../../Redux";
import {User} from "../User/User";

const Users = () => {

    const state = useSelector(state => state.userReducer);
    console.log(state);
    const dispatch = useDispatch();

    useEffect(()=>{
        userService.getAllUsers().then(({data})=>{
            dispatch({type: actions.loadUsers, payload: data})
        });

    }, []);


    return (
        <div>
            {
                state.users.map(value => <User key={value.id} user={value}/>)
            }
        </div>
    );
};

export {Users};