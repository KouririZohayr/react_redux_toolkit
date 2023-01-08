const loggedReducer=(state =false ,action)=>{
    switch(action.type){
        case 'SING_IN': 
            return !state  ||  action.payload ;
        default: return state
    }
}
export default loggedReducer;