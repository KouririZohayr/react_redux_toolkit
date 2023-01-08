import React from 'react'

export default function User({id , nom,prenom,email}) {
  return (
    <div key={id}>
        name <h1>{nom}</h1>
        prenom <h3>{prenom}</h3>
        email <h3>{email}</h3>
    </div>
  )
}
