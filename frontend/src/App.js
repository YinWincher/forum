import React, { Component } from 'react';
import './App.css';
import Header from './containters/Header';
import Main from './containters/Main'
import {NotFound} from "./compontents/NotFound";
import './paper.min.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import {Provider} from 'react-redux';
import DiscussionPage from './containters/DiscussionPage'
import store from './store';
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter
                    path="/" >

                <div className="App">
                   <Header></Header>
                   <Switch>
                       <Route path="/discussion" component={DiscussionPage}/>
                       <Route path="/" exact={true} component={Main}/>
                       <Route path="*" component={NotFound} />
                   </Switch>
               </div>
                </BrowserRouter>

            </Provider>
        );
    }
}

export default App;
