import React from 'react';
import {useDispatch} from "react-redux";

import {postActions} from "../../redux";
import css from './Post.module.css';

const Post = ({post}) => {

    const dispatch = useDispatch();

    const id = post.id;

    return (
        <div className={css.Post}>
            <h2>{post.id} -- {post.title}</h2>
            <button onClick={()=>dispatch(postActions.setCurrentPost(post))}>Select without request</button>
            <button onClick={()=>dispatch(postActions.getById({id}))}>Select with request</button>
            <button onClick={()=> dispatch(postActions.deleteById(id))}>Delete post</button>
        </div>
    );
};

export {Post};