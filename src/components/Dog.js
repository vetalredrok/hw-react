import React from 'react';

const Dog = ({dog, Actions, deleteItem}) => {
    return (
        <div style={{display: 'flex'}}>
            <h5>{dog.dogName}</h5>
            <button onClick={()=>deleteItem(dog.id, Actions.DELETE_DOG)}>DELETE</button>
        </div>
    );
};

export default Dog;