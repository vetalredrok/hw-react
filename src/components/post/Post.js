import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {placeholderService} from "../../services";

function Post() {

    const {id} = useParams();
    console.log(id);

    const [post, setPost] = useState({});

    useEffect(() => {
        placeholderService.getPost(id).then(({data}) =>{
            setPost({...data});
        })
    }, [id])

    return (
        <div>
            <h5>userId author Post: {post.userId} - id Post:{post.id}</h5>
            <p>{post.title}</p>
            <p>{post.body}</p>
        </div>
    );
}

export {Post};