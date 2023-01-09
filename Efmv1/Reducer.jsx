import { combineReducers } from "redux"
import axios from "axios"

const insialVlues=[{
    code:122,
    name :'maroc',
    contienent : 'afrique',
    surfacearea : 710.850,
    image :'/maroc.jpg',
    indipier :1956,
    population : 40000000,
    viles :[
        {
            name : 'safi',
            distrect : 'marrakech-safi',
            populationVille :300000,
            capital : false
        }
    ]
},{
    code:133,
    name :'usa',
    contienent : 'sud-america',
    surfacearea : 9.834,
    image :'/maroc.jpg',
    indipier :1668,
    population : 480000000,
    viles :[
        {
            name : 'washenton',
            distrect : 'california',
            populationVille :3300000,
            capital : true
        }
    ]
}]
const pays=(state=insialVlues,action)=>{
    switch(action.type){
        case 'AFFICHER_INFO' :
            return state
      
        case "AJOUTE_VILLE" :
             let reg={
                name : action.payload.name ,
            distrect :  action.payload.distrect,
            populationVille: action.payload.populationVille ,
            capital : true

             }
             let v1=state.filter(pay=>pay.code===parseInt(action.payload.code))
           
             let ville=v1[0].viles
             console.log(ville)
             ville.push(reg)
             v1.viles.push(ville)

             let villes=state.filter(payee=>payee.code==!action.payload.code).push(v1)

             
             
             return state = villes

         case "MODIFIER_VILE":
            console.log(action.payload.name)
                let rege={
                    name : action.payload.name ,
                distrect :  action.payload.distrect,
                populationVille: action.payload.populationVille ,
                capital : true
        }
        let v2 = state.filter(pay=>pay.code===parseInt(action.payload.code))
        let vi=v2[0].viles
        console.log(vi)
        let vil= vi.filter(p=>p.name===rege.name)
        vil[0].populationVille= action.payload.populationVille
            console.log(vil)
        
        case 'DATA_API':
            async function ap(){
                const reponse = await axios.get('https://jsonplaceholder.typicode.com/users')
                const data = await reponse.data
                return data

            }
            let data = ap()
            console.log(data)
            return state
       
        default :
             return state
    } }


const reducers = combineReducers(
    {
        etat : pays
    }
)
export default reducers
/* https://jsonplaceholder.typicode.com/users */