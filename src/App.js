import React, { Component } from 'react';
import './App.css';
import Header from './containters/Header';
import {Provider} from 'react-redux';
import store from './store';
class App extends Component {
    render() {
        return (
            <Provider store={store}>
               <div className="App">
                   <Header></Header>
               </div>
            </Provider>
        );
    }
}

export default App;
