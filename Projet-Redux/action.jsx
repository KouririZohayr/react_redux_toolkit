export const Adduser =(user)=>{
    return {
        type: 'ADD_USER',
        payload : user
    }
}
export const Suppuser =(id)=>{
    return {
        type: 'SUPP_USER',
        payload : id
    }
}
export const Modifuser =(usermd)=>{
    return {
        type: 'MODI_USER',
        payload : usermd
    }
}
export const Listeuser =()=>{
    return {
        type: 'LIST_USER'
    }
}