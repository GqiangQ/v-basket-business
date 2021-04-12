import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import { HashRouter as Router } from 'react-router-dom'


ReactDOM.render(
  <StrictMode> 
    <Router>
        <App/>
    </Router>
  </StrictMode>,
  document.getElementById('root')
);
