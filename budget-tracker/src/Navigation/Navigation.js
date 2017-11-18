import React from 'react';
import ReactDOM from 'react-dom';

import {
  Route,
  Link,
} from 'react-router-dom';

import '../App.css';

const Navigation = () => {
  return (
    <div>
      <Link className="linkStyle" exact to="/">Home</Link>
      <Link className="linkStyle" to="/users">Accounts</Link>
      <Link className="linkStyle" to="/budget">Budget Lists</Link>
    </div>
  )
};

export const Home = () => <h1>Home</h1>;

export default Navigation;