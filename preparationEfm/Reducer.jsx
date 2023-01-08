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
const pays =(state=insialVlues , action)=>{
    switch (action.type){
        case 'AFFICHER_INFO' :
            return state 
        case 'AJOUTER_PAY':
                const vilesp =
                    {
                        name : action.payload.name,
                        distrect : action.payload.distrect,
                        populationVille :action.payload.populationVille,
                        capital : action.payload.capital
                    }
                let villefiltre=state.filter(ville=>ville.code===parseInt(action.payload.code))
                let villes=villefiltre[0].viles
                villes.push(vilesp)
            
            return  state.filter(ville=>ville.code==!action.payload.code)[0].viles.push(villes)
        case 'MODIFIER_VILLE':
                const vilesMm =
                {
                    name : action.payload.name,
                    distrect : action.payload.distrect,
                    populationVille :action.payload.populationVille,
                    capital : action.payload.capital
                }  
                let villeModifier =state.filter(ville=>ville.code===parseInt(action.payload.code))
                let villesMf=villeModifier[0].viles
                console.log(villesMf)
                let filtervil=villesMf.filter(vil=>vil.name===vilesMm.name)
                filtervil[0].populationVille=action.payload.populationVille
            return state.filter(ville=>ville.code==!action.payload.code)[0].viles.push(filtervil)

        default :
        return state
    }
}
export default pays