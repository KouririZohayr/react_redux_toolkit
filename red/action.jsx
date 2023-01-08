export const deletData =()=>{
    return({
        type : 'DELET_DATA'
    })
}
export const addData =()=>{
    //thunk
    return async (dispatch, getState)=>{
        //Récupérer les resultats d'une API : action asynchrone
        const reponse = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await reponse.json()
        //envoi de l'ction en cas d'asyncrhonisme 
        dispatch({type : 'ADD_DAATA',
    payload : data})
    }
}