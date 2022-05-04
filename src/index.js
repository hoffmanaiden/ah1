import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles.css"
import { BrowserRouter } from "react-router-dom";
import {Amplify} from 'aws-amplify'
import awsExports from './aws-exports'

Amplify.configure(awsExports)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter forceRefresh={true}>
      <App />
    </BrowserRouter>
  </React.StrictMode>, document.getElementById('root')
);