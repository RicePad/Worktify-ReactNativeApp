import React from 'react';
import ReactDOM from 'react-dom';

//Redux Store setup
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducers from './reducers';


const store = createStore(reducers);

ReactDOM.render(
 <h1>Hello World</h1>, document.getElementById('root')
 );