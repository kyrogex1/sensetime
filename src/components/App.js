import React from 'react';

import { HashRouter, Route } from 'react-router-dom';

import Header from './Header';
import Tree from './Tree';
import Table from './Table';
import ApiCaller from './ApiCaller'

const App = props => {

    return (
        <div>
            <HashRouter>
                <Header />
                <Route path="/" exact component={Table} />
                <Route path="/tree" component={Tree} />
                <Route path="/apiCaller" component={ApiCaller} />
            </HashRouter>
        </div>
    )
}

export default App
