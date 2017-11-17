import React from 'react';
import { NavLink} from 'react-router-dom';

import '../Css/NavBar.css';

const NavBar = () => {
    return (
        <div>
            <header>  
                <NavLink to="/"> Home </NavLink>
                <NavLink to="/createAcct" activeClassName='activeLink' >Create  </NavLink>
                <NavLink to="/updateAcct" activeClassName='activeLink' >Update   </NavLink>
                <NavLink to="/listAccts" activeClassName='activeLink' >All   </NavLink>
                <NavLink to="/listAcct" activeClassName='activeLink' >Find  </NavLink>
            </header>
        </div>
    )
}

export default NavBar