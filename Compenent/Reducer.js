const initialValue ={
    state : 0
}
const counterReducer = (state = initialValue.state ,action ) =>{
    switch(action.type){
        case 'INCREMENT':
            return  state + action.payload || 1;
        case 'DECREMENT': 
            return state - 1;
        default : return state;
    }
}
export default counterReducer