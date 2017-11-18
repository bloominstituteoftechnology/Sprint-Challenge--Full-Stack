import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
    return (
        <ul className="nav">
            <li><Link to='/'>The list of accounts</Link></li>|
            <li><Link to='/create'>Create an account</Link></li>|
            <li><Link to='/edit'>Edit an account</Link></li>
        </ul>
    );
};

export default Navigation;