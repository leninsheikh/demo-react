import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers} from 'redux';
import reducer from './store/reducer'
import { Provider } from 'react-redux';
import { reducer as formReducer } from 'redux-form';

//store initializing
const rootReducer = combineReducers({
    testReducer: reducer,
    form: formReducer
})
const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}> < App / ></Provider> , document.getElementById('root'));
serviceWorker.unregister();
