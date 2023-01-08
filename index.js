import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createStore } from 'redux'
import reducer from './Projet-Redux/reducer'; 
import {Provider} from 'react-redux'/* 
import Store from './Redux_tolkitTp/Store' */
import {BrowserRouter } from 'react-router-dom'
import store from './red/stor';
//STORE -> GLOBALIZED STATE
//ACTION INCREMENT
/* const increment =()=>{
  return {
    type : 'INCREMENT'
  }
}
const decrement =()=>{
  return { 
    type : 'DECREMENT'
  }
} */

//REDUCER
/* const counter=(state =0,action)=>{
  switch (action.type) {
    case 'INCREMENT':
        return state + 1;
    case 'DECREMENT':
      return state - 1;
      default :
      return state 
  }
  
}
let store = createStore(counter)  */

//display it in the console
/* store.subscribe(()=>console.log(store.getState())); */

//DISPATCH
/* store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(decrement())

 const store = createStore(
   reducer )
*/



/////////////////////////////////////

/* const store = createStore(reducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) */
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <BrowserRouter >
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>
);



