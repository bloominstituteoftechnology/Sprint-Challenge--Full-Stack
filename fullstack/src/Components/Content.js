import React from 'react';
import { Route } from 'react-router-dom'

import CreateAcct from './CreateAcct';
import UpdateAcct from './UpdateAcct';
import HomePage from './HomePage';
import AcctList from './AcctList';
import AcctLists from './AcctLists';

const ContentBox = () => {
    return (
        <div>
            <Route exact path='/' component={HomePage} />
            <Route path='/CreateAcct' component={CreateAcct} />
            <Route path='/UpdateAcct' component={UpdateAcct} />
            <Route path='/AcctList' component={AcctList} />
            <Route path='/AcctLists' component={AcctLists} />
        </div>
    )
}

export default ContentBox