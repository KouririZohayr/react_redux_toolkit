
const initialValues=[{
    id : 1 , nom : 'kouriri',prenom :'zohayr',email :'kouririzouhair88@gmail.com'
},{
    id : 2 , nom : 'kouriri',prenom :'aiman',email :'kouririaiman@gmail.com'
}]
const insitialId= initialValues.linght
const listusers =(state=initialValues , action)=>{
    switch(action.type){
        case 'LIST_USER' :
            return state
        case 'ADD_USER' :
            const newuser ={
                id: insitialId+1, 
                nom : action.payload.nom,
                prenom :action.payload.prenom,
                email: action.payload.email 
            }
           return[...state,newuser]
        case 'MODI_USER' : 
            const newstate=state.filter((us)=>us.id !== action.payload.id)
            newstate.push(action.payload)
            return state=newstate
        case 'SUPP_USER' :
            return state.filter((us)=>us.id == parseInt(action.payload))
       default : return state
    }
}
export default listusers

