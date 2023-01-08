import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ajouter , modifier } from './action'
export default function Q5() {
    const dispatch=useDispatch()
    const [data,setData]=useState({
        code :'',
        name:'',
        distrect :'',
        populationVille :'',
        Capital :false
    })
    const handelchange=(e)=>{
        const {name,value}=e.target
        setData((state)=>({
            ...state,
            [name] : value
        }))
    }
    console.log(data)
  return (
    <div className='container'>
        <h1>Ajouter  ou Modifier Ville</h1>
            <form onSubmit={e=>e.preventDefault()}>
            <div className="form-group">
                    <label for="exampleInputEmail1">code pays</label>
                    <input type="text" className="form-control" name='code' id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="code" onChange={handelchange}/>
                    
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">name</label>
                    <input type="text" className="form-control" name='name' id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name" onChange={handelchange}/>
                    
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">distrect</label>
                    <input type="text" className="form-control" name='distrect' id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="distrect" onChange={handelchange}/>
                    
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">populationVille</label>
                    <input type="text" className="form-control" name='populationVille' id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="populationVille" onChange={handelchange}/>
                    
                </div>
               
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" onChange={handelchange}/>
                    <label class="form-check-label" for="exampleCheck1">Capital?</label>
                </div>
                
                <button type="submit" onClick={()=>dispatch(ajouter(data))} className="btn btn-primary">ajouter</button>

                <button type="submit" onClick={()=>dispatch(modifier(data))} className="btn btn-primary ms-5">Modifier</button>
            </form>
    </div>
  )
}
