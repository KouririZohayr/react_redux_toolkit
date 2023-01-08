import React from 'react';
import { Route,Routes,Link } from 'react-router-dom';
import Q3 from './Q3';
import Q4 from './Q4';
import Q5 from './Q5';
const Menu = () => {
    return (
      
        <div>
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                  <Link className="navbar-brand" to="/">Q3</Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/Q4">Q4</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/Q5">Q5</Link>
                      </li>
                      
                    </ul>
                  </div>
                </div>
          </nav>
            </div>
          
                <Routes>
                    <Route path='/:datei' element={<Q3/>}></Route>
                    <Route path='/Q4' element={<Q4/>}></Route>
                    <Route path='/Q5' element={<Q5/>}></Route>
                </Routes>
            
        </div>
        
    );
}

export default Menu;
