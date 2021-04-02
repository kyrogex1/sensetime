import React from 'react';

import { HashRouter, Route } from 'react-router-dom';

import Header from './Header';
import Tree from './Tree';
import Table from './Table';
import ApiCaller from './ApiCaller'

export default props => {

    return (
        <div>
            <HashRouter>
                <Header />
                <Route path="/" exact component={Tree} />
                <Route path="/table" component={Table} />
                <Route path="/apiCaller" component={ApiCaller} />
            </HashRouter>
        </div>
    )
}

