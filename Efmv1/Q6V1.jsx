import React from 'react';
import { useDispatch } from 'react-redux';
import { dataApi } from './Action';
const Q6V1 = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <button  onClick={()=>dispatch(dataApi())}> data api </button>
        </div>
    );
}

export default Q6V1;
