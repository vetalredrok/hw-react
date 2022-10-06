import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import {actions} from "../../Redux";
import {OneUserInform} from "../OneUserInform/OneUserInform";
import {userService} from "../../Services";

const OneUser = () => {

    const state = useSelector(state => state.userReducer);

    const dispatch = useDispatch();

    const {id} = useParams();

    useEffect(() => {
        dispatch({type: actions.chooseUser, payload: +id})
    }, [id]);

    useEffect(() => {
        console.log(id);

        if (!state.user){
            userService.getUserById(id).then(({data})=>{
                dispatch({type: actions.loadUserById, payload: data})
            });
            console.log('LOADED')
        }
    }, [])




    return (
        <div>
            {
                state.user && <OneUserInform user={state.user}/>
            }

        </div>
    );
};

export {OneUser};