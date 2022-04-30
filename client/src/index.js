/**
 * ********************************************************
 *
 * @module  index.js
 * @author  astaiglesia
 * @date    2022
 * @description The React application's entry point to the DOM.
 * ReactDOM hangs our app onto #root 
 *
 * ********************************************************
 */
// ---libraries
import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';

// ---assets
import './assets/stylesheets/styles.css';
// import store from './app/store';

// ---components
import App from './App';

render(<App/>, document.getElementById('root'));

// main application wrapped with redux store provider and BrowserRouter [v6 router]
// render( 
//   <BrowserRouter>
//     <Provider store={store}>
//       <App/>
//     </Provider>
//   </BrowserRouter>,
//   document.getElementById('root')
// );