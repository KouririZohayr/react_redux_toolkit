import React,{useState,useEffect} from 'react';
const useApi=(url)=>{
    const [data,setData]=useState([])
    useEffect(()=>{
        (async function(){
            const statement =await fetch(url)
            const reponse = await statement.json()
            statement.ok?setData(reponse):alert(JSON.stringify(reponse))
        })()
        
    },[data])
    return [data]
}
const HooksperApiFetch = () => {
    const [dataApi]=useApi('https://jsonplaceholder.typicode.com/users')
    return (
        <div>
             {dataApi.map((us,key)=><h1 key={key}>{us.name}</h1>)}
        </div>
    );
}

export default HooksperApiFetch;
//https://jsonplaceholder.typicode.com/users