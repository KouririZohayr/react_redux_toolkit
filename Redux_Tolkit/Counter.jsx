import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { decrement,increment,incrementParValue } from './CounterSlice'
export default function Counter(){
    const count = useSelector(state=>state.counter.count)
    const dispatch = useDispatch()
    return (
        <>
         <h1>{count}</h1>
         <button onClick={()=>dispatch(increment())}>+</button>
         <button onClick={()=>dispatch(decrement())}>-</button>
         <button onClick={()=>dispatch(incrementParValue(5))}>+5</button>
        
        </>
    )
}