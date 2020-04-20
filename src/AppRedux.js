import React from 'react';
import {createStore} from 'redux';

import {Provider } from 'react-redux';
import App from './App';
import Index from './components/Index'
import reducer from './Reducer';


const store = createStore(reducer);

export default () => {
    return (
        <Provider store={store}>
            <App/>
            <br/>
            <Index/>
        </Provider>
    )
}