import React, {Component} from 'react';
import '../App.css';
import InteractiveTableApp from "./InteractiveTableApp";

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from '../reducers/columns';
const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Provider store={store}>
                    {() => {
                        return <InteractiveTableApp />;
                    }}
                </Provider>
            </div>
        );
    }
}

