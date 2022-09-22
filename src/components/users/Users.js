import React, {useEffect, useState} from 'react';

import css from './Users.module.css'
import {userService} from "../../services";
import {UserForm} from "../userForm/UserForm";
import {User} from "../user/User";
import {Comments} from "../comments/Comments";
import {CommentForm} from "../commentForm/CommentForm";

const Users = () => {


    const [users, setUsers] = useState([]);

    const [comments, setComments] = useState([])



    useEffect(() => {
        userService.getAllUsers().then(({data})=>{
            setUsers([...data]);
            console.log(data);
        })
    },[]);

    return (
        <div>
            <div className={css.father}>
                <p>Add User</p>
                <UserForm setUsers={setUsers}/>
                <p>Add Comment</p>
                <CommentForm setComments={setComments}/>
            </div>

            <div className={css.commentsUsers}>
            <div className={css.users}>
            <p>USERS</p>
            {
                users.map(value => <User key={value.id} user={value}/>)
            }
            </div>
               <div className={css.comments}>
             <Comments setComments={setComments} comments={comments}/>
               </div>

            </div>
        </div>
    );
};

export {Users};