import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {ajouteruser,supperimer,modifier} from './userSlice'
import Forms from './Form'
import User from './User'
export default function ListeUsers() {
    const users = useSelector((state)=>state.users.liste)
    const dispatch= useDispatch()
    console.log(users)
    function ajout(user){
        dispatch(ajouteruser(user))
      }
    function update(user){
        dispatch(modifier(user))
        console.log(users)
      } 
      
      function delet(id){
        dispatch(supperimer(id))
        console.log(users)
      } 
    
  return (
    <div  className='container'>
         {users.map((listeData,key)=> <User key={key} nom={listeData.nom} prenom={listeData.prenom} email={listeData.email}/>)} 
         <br />
         <Forms ajouter={ajout}  updat={update}   delet={delet} /> 
    </div>
  )
}
