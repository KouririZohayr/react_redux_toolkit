import {useState,useEffect} from 'react';
const useCounter=(initialValue=0,step=1)=>{

    const [count,setcount]=useState(initialValue)
    function increment(){
        setcount(count+step)
    }
    useEffect(()=>{const interval = setInterval(() => {
         increment()
       }, 2000);
       return () => clearInterval(interval);  
     },[count])  
    return [count,increment]
}
const HooksPerCounter = () => {
    const [count,increment]=useCounter()
    return (
        <div className='container'>
           {count} 
           <br />
           <button className='btn btn-primary' onClick={increment}>za2id</button>
        </div>
    );
}

export default HooksPerCounter;
