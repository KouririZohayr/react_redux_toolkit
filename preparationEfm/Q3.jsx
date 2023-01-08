import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import { useParams } from 'react-router-dom'

export default function Q3() {
  const {datei}=useParams()
  console.log(datei)
  const listeVilles = useSelector(state =>state.listPays)

  return (
    <div className='container'>
      {
        listeVilles.filter(pays=>  pays.indipier==datei ).map((listeVille,index)=> <Card  key={index} code={listeVille.code} name={listeVille.name} contienent={listeVille.contienent} 
        surfacearea={listeVille.surfacearea} image={listeVille.image} indipier={listeVille.indipier} population={listeVille.population} viles={listeVille.viles}/> 

        )
      }
      
        
    </div>
  )
}
