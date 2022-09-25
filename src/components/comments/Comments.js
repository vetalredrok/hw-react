import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {placeholderService} from "../../services";
import {Comment} from "../comment/Comment";

const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        placeholderService.getComments().then(({data})=>{
           setComments([...data]);
        });
    }, []);


    return (
        <div>
            <Outlet/>
            <hr/>
            {
                comments.map(value => <Comment key={value.id} comment={value}/>)
            }
        </div>
    );
};

export {Comments};