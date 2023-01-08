import { combineReducers } from "redux";
const initialState ={todo : null}
const dataReducer =(state = initialState,action)=>{
    switch(action.type){
        case 'ADD_DATA':
            return {...state,todo :action.payload}
        case 'DELET_DATA':
            return initialState
        default : return state
    }

}
const reducers =combineReducers({data : dataReducer})
export default reducers