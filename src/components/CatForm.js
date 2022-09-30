import React from 'react';
import {useForm} from "react-hook-form";

import Cat from "./Cat";


const CatForm = ({state, dispatch, Actions, deleteItem}) => {

    const {register, handleSubmit, reset} = useForm({
        mode: 'all'
    });


    const submitCat = async (data) =>{
        await dispatch({type: Actions.NEW_CAT, payload: data});
        reset();
    };


    return (
            <div>
            <form onSubmit={handleSubmit(submitCat)}>
                <h5>Add Cat</h5>
                <input type='text' placeholder={'Cat Name'}{...register('catName', {required: true})}/>
                <button>ADD CAT</button>
            </form>

            {
                state.cats.map(value => <Cat key={value.id} cat={value} deleteItem={deleteItem} Actions={Actions}/>)
            }
            </div>
    );
};

export default CatForm;