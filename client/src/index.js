import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import 'antd/dist/antd.css'

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer  from './reducers';

//store 
const store = createStore(rootReducer, composeWithDevTools())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
      <Router>
        <App />
      </Router>
    {/* </React.StrictMode> */}
  </Provider>
  
);

