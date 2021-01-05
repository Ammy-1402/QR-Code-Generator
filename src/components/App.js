import React from 'react';
import { Route, Router } from 'react-router-dom'
import history from '../js/history';
import Home from './Home';

const App = () => {
    return (
        <div>
            <Router history={history}>
                <Route to="/home" component={Home} />
            </Router>
        </div>
    );
}

export default App;