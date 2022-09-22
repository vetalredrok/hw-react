import React, {useEffect} from 'react';

import {userService} from "../../services";
import {Comment} from "../comment/Comment";

const Comments = (props) => {
    const{setComments, comments} = props;

    useEffect(() => {
        userService.getAllComments().then(({data})=> {
            setComments([...data]);
            console.log(data);
        })
    }, [])

    return (
        <div>
            {
                comments.map(value => <Comment key={value.id} comment={value}/>)
            }
        </div>
    );
};

export {Comments};