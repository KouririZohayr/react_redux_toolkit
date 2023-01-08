import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import  {deletData,addData} from './red/action'
const App = () => {
    const dispatch = useDispatch()
    const todo = useSelector(state=>state.data.todo);
    const handelDeletData=()=>dispatch(deletData())
    const handelAddData=()=>dispatch(addData())
    return (
        <div>
            <button onClick={handelAddData}  >ADD_DATA </button>
            <button onClick={handelDeletData}  >DELETE </button>
            {todo && <div>{JSON.stringify(todo)}</div>}
        </div>
    );
}

export default App;
