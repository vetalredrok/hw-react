import React from 'react';
import {useForm} from "react-hook-form";

import Dog from "./Dog";


const DogForm = ({state, dispatch, Actions, deleteItem}) => {

    const {register, handleSubmit, reset} = useForm({
        mode: 'all'
    });


    const submitDog = async (data) =>{
        await dispatch({type: Actions.NEW_DOG, payload: data});
        reset();
    };


    return (
            <div>
                <form onSubmit={handleSubmit(submitDog)}>
                    <h5>Add Dog</h5>
                    <input type='text' placeholder={'Dog Name'}{...register('dogName', {required: true})}/>
                    <button>ADD DOG</button>
                </form>
                {
                    state.dogs.map(value => <Dog key={value.id} dog={value} deleteItem={deleteItem} Actions={Actions}/>)
                }

            </div>
    );
};

export default DogForm;