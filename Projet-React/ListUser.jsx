import React, { useState } from 'react'
import User from './User'
import AddUser from './AddUser'
export default function ListeUsers() {
    const [users,setUsers]=useState([
        {id : 1 , nom : 'kouriri',prenom :'zohayr',email :'kouririzouhair88@gmail.com'}
        ,{ id : 2 , nom : 'kouriri',prenom :'aiman',email :'kouririaiman@gmail.com'}
    ])
      function ajout(user){
        setUsers(state=>([...state,user]))
      }
    function update(user){
        const newData=users.filter(us=>(us.id!=user.id))
        newData.push(user)
        setUsers(newData)
      } 
      
      function delet(id){
        setUsers(users.filter(us=>(us.id!=id)))
      } 
    
  return (
    <div  className='container'>
         {users.map((listeData,key)=> <User key={key} nom={listeData.nom} prenom={listeData.prenom} email={listeData.email}/>)} 
         <br />
         <AddUser ajouter={ajout}  updat={update}   delet={delet} /> 
    </div>
  )
}
