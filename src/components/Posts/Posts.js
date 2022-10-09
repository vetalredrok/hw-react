import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {postActions} from "../../redux";
import css from './Posts.module.css'
import {Post} from "../Post/Post";

const Posts = () => {

    const dispatch = useDispatch();

    const selector = useSelector(state => state.postReducer);

    const {posts, currentPost, loading, error, onePost} = selector;

    useEffect(() => {
        dispatch(postActions.getAllPosts());
        console.log(posts);
    }, [])

    return (
        <div className={css.Posts}>
            <div className={css.PostsBlock}>
                {
                    loading && <h3>Loading process....</h3>
                }
                {
                    error && <h3>Error dropped!</h3>
                }
                {
                    posts.map(post => <Post key={post.id} post={post}/>)
                }
            </div>
            <div className={css.CurrentPost}>
                <div className={css.Post}>
                    User without request:<br/>
                    {
                        currentPost && currentPost.id + '--' + currentPost.title
                    }
                </div>
                <div className={css.Post}>
                    User with request:<br/>
                    {
                        onePost && onePost.id + '--' + onePost.title
                    }
                </div>

            </div>
        </div>
    );
};

export {Posts};