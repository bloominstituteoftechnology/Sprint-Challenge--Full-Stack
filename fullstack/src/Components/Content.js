import React from 'react';
import { Route } from 'react-router-dom'

import CreateAcct from './CreateAcct';
import UpdateAcct from './UpdateAcct';
import HomePage from './HomePage';
import ListAcct from './ListAcct';
import ListAccts from './ListAccts';

const ContentBox = () => {
    return (
        <div>
            <Route exact path='/' component={HomePage} />
            <Route path='/CreateAcct' component={CreateAcct} />
            <Route path='/UpdateAcct' component={UpdateAcct} />
            <Route path='/ListAcct' component={ListAcct} />
            <Route path='/ListAccts' component={ListAccts} />
        </div>
    )
}

export default ContentBox