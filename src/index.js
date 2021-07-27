import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/store"
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
    <a href="https://github.com/Atryom-Bohaturou/Quote-machine">Repository of this project</a>
  </Provider>,
  document.getElementById('root')
);

