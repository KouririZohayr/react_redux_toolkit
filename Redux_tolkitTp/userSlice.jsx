import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState={
    liste :[{id : 1 , nom : 'kouriri',prenom :'zohayr',email :'kouririzouhair88@gmail.com'}
,{ id : 2 , nom : 'kouriri',prenom :'aiman',email :'kouririaiman@gmail.com'}]}
export const userSlice =createSlice({
    name : 'users',
    initialState,
    reducers :{
        ajouteruser :{reducer(state,action){
            const newuser={
                id :nanoid(),
                nom :action.payload.nom,
                prenom :action.payload.prenom,
                email :action.payload.email,
            }
            state.liste.push(newuser)}},
        supperimer:{reducer(state,action){state.liste=state.liste.filter(us=>us.id!=parseInt(action.payload))}},
        modifier : {reducer(state,action){const newitems=state.liste.filter(us=>us.id!= parseInt(action.payload.id))
            
            newitems.push(action.payload)
            state.liste=newitems
        }}
    }

})
export const {ajouteruser,supperimer,modifier} = userSlice.actions
export default userSlice.reducer

