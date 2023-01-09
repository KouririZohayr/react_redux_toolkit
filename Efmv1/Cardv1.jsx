const CardV1 = ({key ,image,name,contienent,population,code,surfacearea,indipier,viles}) => {
    return (
        <div>
                    <div >
          
          <div className="card"  style={{ 'width' : '18rem'}} >
              <img className="card-img-top" src={image} alt="Card image cap"/>
                  <div className="card-body">
                  <h5 className="card-title">{code}</h5>
                      <h5 className="card-title">{name}</h5>
                      <p className="card-text">{contienent}</p>
                  </div>
                  <ul className="list-group list-group-flush">
                      <li className="list-group-item">surafce {surfacearea}</li>
                      <li className="list-group-item">indipier {indipier}</li>
                      <li className="list-group-item">population {population}</li>
                  </ul>
                  <ul className=' list-group list-group-flush'>
                      {
                          viles.map((v,i)=>
                              <div>  
                                  <li  className="list-group-item"> name {v.name}</li>
                                  <li  className="list-group-item"> distrect {v.distrect}</li>
                                  <li  className="list-group-item"> populationVille {v.populationVille}</li>
                                  <li  className="list-group-item"> capital {v.capital && 'Capital'}</li>
                              </div>
                          )
                      }                                          
                  </ul>
                  
              </div>
                      </div>
        </div>
    );
}

export default CardV1;
