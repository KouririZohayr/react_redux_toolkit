import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
const Q4V1 = () => {
    const andep=useSelector(state=>state.etat)
    return (
        <div>
             <ul className="list-group list-group-flush">
                {
                    andep.map((date)=>{let datei =`/${date.indipier}`;
                        return <NavLink to={datei}  className="list-group-item">date indépandance {date.indipier}</NavLink>
                    })
                }   
            </ul>  
        </div>
    );
}

export default Q4V1;
