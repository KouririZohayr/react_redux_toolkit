export const afficherpays = ()=>{
    return{
        type : 'AFFICHER_INFO'
    }
   
}
export const ajouter =(ville)=>{
    return {
        type : 'AJOUTER_PAY',
        payload : ville
    }
} 
export const modifier =(ville)=>{
    return {
        type : 'MODIFIER_VILLE',
        payload : ville
    }
}


