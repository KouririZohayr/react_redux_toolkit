import React from 'react';
import CardV1 from './Cardv1';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
const Q3v1 = () => {
    const {datei}=useParams()
    console.log(datei)
    const pays=useSelector(state=>state.etat)
    return (
        <div>
            { pays.filter(pay=>pay.indipier===parseInt(datei)).map((listeVille,key)=> <CardV1  key={key} code={listeVille.code} name={listeVille.name} contienent={listeVille.contienent} 
                    surfacearea={listeVille.surfacearea} image={listeVille.image} indipier={listeVille.indipier} population={listeVille.population} viles={listeVille.viles}/>  )
            }
              
        </div>
    );
}

export default Q3v1;
