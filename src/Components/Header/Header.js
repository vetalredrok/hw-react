import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";

const Header = () => {


    const navigate = useNavigate();

    return (
        <div style={{display:'flex', justifyContent: 'space-around' , gap:'50px'}}>
            <NavLink to={'/users'}>Users</NavLink>
            <NavLink to={'/posts'}>Posts</NavLink>
            <NavLink to={'/comments'}>Comments</NavLink>
        </div>
    );
};

export {Header};