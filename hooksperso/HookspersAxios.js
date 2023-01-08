import {useState,useEffect} from 'react';
import axios from 'axios';
const useApiAxios =(url)=>{
    const [dataapi, setDataapi]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(
        ()=>{(
            async function(){
                const reponse = await axios.get(url)
                const data = await reponse.data
                setDataapi(data)
                setLoading(false)
            }
        )()
    },[]
    )
    return [dataapi,loading]
}
const HookspersAxios = () => {
    const [data,load]=useApiAxios('https://jsonplaceholder.typicode.com/users')
    console.log(data)
    return (
        <div>
        {load && <div className="spinner-border" ms-5 role="status"></div>}
         <ol>
             {data.map((res,key)=><li key={key}>{res.name}</li>)}
         </ol>
     </div>
    );
}

export default HookspersAxios;
