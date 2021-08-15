import React from 'react';
import Home from './Home';
import history from '../history';
import {
    Router,
    Route
} from "react-router-dom";
import Main from './Main';

export default function App() {
    return (
        <Router history={history}>
            <div style={{ padding: '10px', fontFamily: 'Roboto, sans-serif' }}>
                <Route exact path='/'><Main /></Route>
                <Route exact path='/section/:section/part/:part'><Home /></Route>
            </div>
        </Router>

    )
}
