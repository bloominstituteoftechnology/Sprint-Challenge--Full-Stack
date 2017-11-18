import React from 'react';
import { NavLink} from 'react-router-dom';

import '../Css/NavBar.css';

const NavBar = () => {
    return (
        <div>
            <header>  
                <NavLink to="/"><button>Home</button></NavLink>
                <NavLink to="/createAcct" activeClassName='activeLink' ><button>Create</button></NavLink>
                <NavLink to="/updateAcct" activeClassName='activeLink' ><button>Update</button></NavLink>
                <NavLink to="/listAccts" activeClassName='activeLink' ><button>All</button></NavLink>
                <NavLink to="/listAcct" activeClassName='activeLink' ><button>Find</button></NavLink>
            </header>
        </div>
    )
}

export default NavBar