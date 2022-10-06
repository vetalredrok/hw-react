import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {userService} from "../../Services";
import {actions} from "../../Redux";
import {Post} from "../Post/Post";

const Posts = () => {

    const state = useSelector(state=> state.postReducer);
    console.log(state);

    const dispatch = useDispatch();

    useEffect(() => {
        userService.getAllPosts().then(({data})=>{
            dispatch({type: actions.loadPosts, payload: data})
        });
    }, []);

    return (
        <div>
            {
                state.posts.map(value => <Post key={value.id} post={value}/>)
            }
        </div>
    );
};

export {Posts};