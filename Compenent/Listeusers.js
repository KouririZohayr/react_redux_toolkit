const initialValue=[]
const Listeuser =(state=[] , action)=>{
    switch(action.type){
        case 'LISTE_USERS':
            let data =[]
            data=  fetch('https://jsonplaceholder.typicode.com/users').then((response) =>response.json()).
            then((responseData) =>responseData)
           
            return data
        default : return initialValue
    } 
}
export default Listeuser