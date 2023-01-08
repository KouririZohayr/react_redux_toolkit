import React from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
    let initialState=[{id : 1 , nom : 'kouriri',prenom :'zohayr',email :'kouririzouhair88@gmail.com'}
    ,{ id : 2 , nom : 'kouriri',prenom :'aiman',email :'kouririaiman@gmail.com'}]

    return (
        <div className='container'>
            {initialState.map(us=><div >
                <Link to={`/Userr/${us.id}`}><h1>id {us.id}</h1></Link>
                
            <h1>nom {us.nom}</h1>
            <h2>prenom {us.prenom}</h2>
            <h2>email {us.email}</h2>
            </div>)}
           
        </div>
    );
}

export default Users;
