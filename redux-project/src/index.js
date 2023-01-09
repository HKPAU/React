import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/root/App';
import {Provider} from "react-redux";
import configureStore from "./redux/reducers/configureStore";

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore();

root.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>
);
