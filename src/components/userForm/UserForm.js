import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {userValidator} from "../../validators";
import {userService} from "../../services";

const UserForm = (props) => {

    const {setUsers} = props;

    const {register, handleSubmit, reset, formState:{errors, isValid}, setValue} = useForm({
        resolver: joiResolver(userValidator),
        mode: 'all'
    });

    useEffect(()=>{
        setValue('name', 'name');
        setValue('surname', 'surname');
        setValue('email', 'email');
    }, [])

    const submit = async (user) => {
        const {data} = await userService.createUser(user);
        setUsers(value => [...value, data]);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type='text' placeholder={'name'} {...register('name')}/>
            {errors.name && <div>{errors.name.message}</div>}
            <input type='text' placeholder={'surname'} {...register('surname')}/>
            {errors.surname && <div>{errors.surname.message}</div>}
            <input type='text' placeholder={'email'} {...register('email')}/>
            {errors.email && <div>{errors.email.message}</div>}
            <button disabled={!isValid}>Create</button>
        </form>
    );
};

export {UserForm};