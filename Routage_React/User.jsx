import React from 'react'
import { useParams } from 'react-router-dom'
export default function Userr() {
    const {iduser}=useParams()
    let initialState=[{id : 1 , nom : 'kouriri',prenom :'zohayr',email :'kouririzouhair88@gmail.com'}
    ,{ id : 2 , nom : 'kouriri',prenom :'aiman',email :'kouririaiman@gmail.com'}]
  return (
    <div>
        
        {initialState.filter(us=>us.id==iduser).map(us=><div>
            <h1>id {us.id}</h1>
            <h1>nom {us.nom}</h1>
            <h2>prenom {us.prenom}</h2>
            <h2>email {us.email}</h2>
        </div>)}
        
    </div>

  )
}
