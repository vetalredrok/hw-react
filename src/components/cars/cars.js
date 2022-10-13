import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {carActions} from "../../redux/slices";
import {Car} from "../car/car";

const Cars = () => {

    const {cars} = useSelector(state => state.cars);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carActions.getAll());
    }, [])
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};