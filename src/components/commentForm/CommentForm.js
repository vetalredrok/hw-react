import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {commentValidator} from "../../validators";
import {userService} from "../../services";

const CommentForm = (props) => {

    const {setComments} = props;

    const {register, handleSubmit, reset, formState:{errors, isValid}, setValue} = useForm({
        resolver: joiResolver(commentValidator),
        mode: 'all'
    });

    useEffect(()=>{
        setValue('name', 'name');
        setValue('email', 'email');
        setValue('body', 'body')
    }, [])

    const commentSubmit = async (comment) => {
        const {data} = await userService.createComment(comment);
        setComments(value => [...value, data]);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(commentSubmit)}>
            <input type='text' placeholder={'name'} {...register('name')}/>
            {errors.name && <div>{errors.name.message}</div>}
            <input type='text' placeholder={'email'}{...register('email')}/>
            {errors.email && <div>{errors.email.message}</div>}
            <input type='text' placeholder={'body'}{...register('body')}/>
            {errors.body && <div>{errors.body.message}</div>}
            <button disabled={!isValid}>Create Comment</button>

        </form>
    );
};

export {CommentForm};