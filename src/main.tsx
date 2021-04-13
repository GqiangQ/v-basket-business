import React, { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import { HashRouter as Router } from 'react-router-dom'


ReactDOM.render(
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <App/>
    </Suspense>
  </Router>,
  document.getElementById('root')
);
