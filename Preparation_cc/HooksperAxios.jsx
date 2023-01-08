import React,{useState,useEffect} from 'react';
import axios from 'axios';
const useAxios =(url)=>{
    const [data,setData]=useState([])
     useEffect(()=>{(
        async function(){
            const statment = await axios.get(url)
            const repons = await statment.data
            setData(repons)
        }
    )()},[data]) 
    return [data]
}
const HooksperAxios = () => {
    const [dataAxios]=useAxios('https://jsonplaceholder.typicode.com/users')
    console.log(dataAxios)
    return (
        <div>
             {dataAxios.map((us,key)=><h1 key={key}>{us.name}</h1>)}
        </div>
    );
}

export default HooksperAxios;
