export const increment =(num)=>{
    return {
        type: 'INCREMENT',
        payload : num
    }
}
export const decrement =()=>{
    return {
        type: 'DECREMENT'
    }
}
export const loggedReducer =(val)=>{
    return {
        type: 'SING_IN',
        payload : val
    }
}
export const listeData =()=>{
    return {
        type : 'LISTE_USERS'
    }
}