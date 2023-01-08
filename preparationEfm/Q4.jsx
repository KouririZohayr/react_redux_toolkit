import React from 'react';
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
const Q4 = () => {
    const dates=useSelector(state=>state.listPays)
    console.log(dates)
    
    return (
        <div>
            <ul className="list-group list-group-flush">
                {
                    dates.map((date,key)=>{let datei =`/${date.indipier}`;
                        return <NavLink to={datei} key={key} className="list-group-item">date indépandance {date.indipier}</NavLink>
                    })
                }   
            </ul>  
        </div>
    );
}

export default Q4;
