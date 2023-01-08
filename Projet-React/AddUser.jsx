import { useState } from "react"

export default function AddUser({ajouter,updat,delet}){
    const [formData , setForm] = useState({ id : parseInt,nom : "" ,prenom : "" , email : "" })
    const handle = (e)=> {
        const {name,value} = e.target
        setForm(prev => ({...prev , [name] : value}))}
    const ajout=()=>{ajouter(formData)}
    const updatedata=()=>{updat(formData)}
    const deletuser =()=>{delet(formData.id)}
    return(
        <>
            <h2>ajout d un nouveau utilsateur</h2>

            <form action="" onSubmit={ (e)=> e.preventDefault()}>
                <label htmlFor="nom">id</label>
                <input type="text" name="id" id='id'  onChange={handle} /> <br />
                <label htmlFor="nom">Nom</label>
                <input type="text" name="nom" id='nom'  onChange={handle} /> <br />

                <label htmlFor="prenom">Prénom</label>
                <input type="text" name="prenom"  onChange={handle}   /> <br />

                <label htmlFor="email">email</label>
                <input type="email" name="email"  onChange={handle}   /> <br />

               <button onClick={ajout}> ajouter </button>
               <button onClick={updatedata}> updat </button>
               <button onClick={deletuser}> delet </button>
            </form>
        </>
    )
}