export const afficher=()=>{
    return{
        type : 'AFFICHER_INFO'
    }
}
export const ajouter =(ville)=>{
   return{ 
    type : "AJOUTE_VILLE"
        , payload :ville
}

}
export const modifier =(data)=>{
    return {
        type : "MODIFIER_VILE",payload : data
    }
}
export const dataApi =()=>{
    return{
        type : 'DATA_API',
        
    }
}