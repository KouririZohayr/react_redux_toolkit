import {useState,useEffect} from 'react'
function useApi(url){
    const [data , setdata]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{const interval = setInterval(() => {
        (async function(){
            const reponse = await fetch(url)
            const repeonseData=await reponse.json()
            reponse.ok?setdata(repeonseData):alert(JSON.stringify(repeonseData))
            setLoading(false)
        })() }, 4000);
        return () => clearInterval(interval);
    },[])
    return [data,loading]
}
const HooksPer = () => {
    const [data,load]=useApi('https://jsonplaceholder.typicode.com/users')
    return (
        <div>
           {load && <div className="spinner-border" ms-5 role="status"></div>}
            <ol>
                {data.map((res,key)=><li key={key}>{res.name}</li>)}
            </ol>
        </div>
    );
}
export default HooksPer;