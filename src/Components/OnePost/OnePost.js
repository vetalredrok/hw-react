import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import {actions} from "../../Redux";
import {OnePostInform} from "../OnePostInform/OnePostInform";

const OnePost = () => {

    const state = useSelector(state => state.postReducer);

    const dispatch = useDispatch();

    const {id} = useParams();

    useEffect(() => {
        dispatch({type: actions.choosePost, payload: +id})
    }, [id])


    return (
        <div>
            {
             state.post && <OnePostInform post={state.post}/>
            }
        </div>
    );
};

export {OnePost};