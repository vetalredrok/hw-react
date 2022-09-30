import React from 'react';

const Cat = ({cat, deleteItem, Actions}) => {
    return (
        <div style={{display: 'flex'}}>
            <h5>{cat.catName}</h5>
            <button onClick={()=>deleteItem(cat.id, Actions.DELETE_CAT)}>DELETE</button>
        </div>
    );
};

export default Cat;