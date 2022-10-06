import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {userService} from "../../Services";
import {actions} from "../../Redux";
import {Comment} from "../Comment/Comment";

const Comments = () => {

    const state = useSelector(state => state.commentsReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        userService.getAllComments().then(({data})=>{
            dispatch({type: actions.loadComments, payload: data})
        });
    }, []);

    return (
        <div>
            {
                state.comments.map(value=> <Comment key={value.id} comment={value}/>)
            }

        </div>
    );
};

export {Comments};