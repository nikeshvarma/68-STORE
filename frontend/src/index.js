import React from 'react';
import "./style/index.scss";
import axios from 'axios';
import {PersistGate} from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist'
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './service/serviceWorkerRegistration';
import reportWebVitals from './service/reportWebVitals';
import {Provider} from "react-redux";
import store from "./redux/store";

export const domainName = 'http://192.168.43.167:8000';

function getCSRFToken() {
    let cookies = {}
    const csrftoken = document.cookie.split(';')
    for (let i = 0; i < csrftoken.length; i++) {
        let temp = csrftoken[i].split('=')
        cookies[temp[0]] = temp[1]
    }
    return cookies['csrftoken']
}

let persistor = persistStore(store)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App/>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


//change for production with domain name of server
axios.defaults.baseURL = 'http://192.168.43.167:8000';

axios.defaults.headers.common = {
    "X-CSRFToken": getCSRFToken()
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
