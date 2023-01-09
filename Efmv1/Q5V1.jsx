import React from 'react';
import{useState}from "react"
import { ajouter,modifier } from '../Efmv1/Action';
import { useDispatch } from 'react-redux';
const Q5V1 = () => {
    const [data,setdata]=useState({code:'', name: '',distrect:'',populationVille:'' ,capital:false})
 const handelchange =(e)=>{
    const {name,value}=e.target
    setdata((state)=>(
        {...state,
        [name] : value}
    ))
 }
  const dispatch=useDispatch()
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
                        <input name='capital' type="checkbox" class="form-check-input" id="exampleCheck1" onChange={handelchange}/>
                        <label class="form-check-label" for="exampleCheck1">Capital?</label>
                    </div>
                    
                    <button type="submit" onClick={()=>dispatch(ajouter(data))} className="btn btn-primary">ajouter</button>
    
                    <button type="submit" onClick={()=>dispatch(modifier(data))} className="btn btn-primary ms-5">Modifier</button>
                </form>
        </div>
      )
}

export default Q5V1;
