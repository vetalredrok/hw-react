import React, {useReducer} from 'react';

import CatForm from "./CatForm";
import DogForm from "./DogForm";


const Actions = {
    NEW_CAT: 'add-new-cat',
    NEW_DOG: 'add-new-dog',
    DELETE_CAT: 'delete-item-cat',
    DELETE_DOG: 'delete-item-dog'
};

const init = (initialValue) =>{
    return {
        cats: initialValue,
        dogs: initialValue
    }
};

const reducer = (state, action) => {
    switch (action.type){
        case Actions.NEW_CAT:
            return {...state, cats: [newCat(action.payload), ...state.cats]};
        case Actions.NEW_DOG:
            return {...state, dogs: [newDog(action.payload), ...state.dogs]};
        case Actions.DELETE_CAT:
            const cats = [...state.cats];
            const index = cats.findIndex(value => value.id === action.payload);
            cats.splice(index,1)
            return {...state, cats};
        case Actions.DELETE_DOG:
            const dogs = [...state.dogs];
            const index1 = dogs.findIndex(value => value.id === action.payload);
            dogs.splice(index1, 1)
            return {...state, dogs};
        default:
            return {...state};
    }
};

function newCat(name){
    return {...name, id: Date.now()}
}

function newDog(name){
    return{...name, id: Date.now()}
}


const CatAndDog = () => {

    const [state, dispatch] = useReducer(reducer, [], init);

    const deleteItem = (id, actionType) =>{
        dispatch({type: actionType, payload: id})
    };


    console.log(state);

    return (
        <div style={{display:'flex', justifyContent:'center', gap:'20px'}}>

            <CatForm state={state} dispatch={dispatch} Actions={Actions} deleteItem={deleteItem}/>

            <DogForm state={state} dispatch={dispatch} Actions={Actions} deleteItem={deleteItem}/>

        </div>

    );
};

export default CatAndDog;