import React, {useEffect, useState} from 'react';

import {placeholderService} from "../../services";
import {Todo} from "../todo/Todo";

const Todos = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        placeholderService.getTodos().then(({data})=>{
            setTodos([...data]);
        })
    }, [])


    return (
        <div>
            {
                todos.map(value => <Todo key={value.id} todo={value}/>)
            }
        </div>
    );
};

export {Todos};