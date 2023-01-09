import React from 'react';
import { Route,Routes,Link } from 'react-router-dom';
import Q3v1 from './Q3v1';
import Q4V1 from './Q4V1';
import Q5V1 from './Q5V1';
const Menuv1 = () => {
    return (
        <div>
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
                        <Link className="nav-link active" aria-current="page" to="/Q4V1">Q4</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/Q5V1">Q5</Link>
                      </li>
                      
                    </ul>
                  </div>
                </div>
          </nav>
            </div>
          
                <Routes>
                    <Route path='/:datei' element={<Q3v1/>}></Route>
                    <Route path='/Q4V1' element={<Q4V1/>}></Route>
                    <Route path='/Q5V1' element={<Q5V1/>}></Route>
                </Routes>
            
        </div>
        </div>
    );
}

export default Menuv1;
