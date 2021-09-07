// MAIN IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// REDUX IMPORTS
import { Provider } from "react-redux";
import store from "./store/store";

// COMPONENTS IMPORTS Components Imports
import App from './main/App';

// MAIN
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
