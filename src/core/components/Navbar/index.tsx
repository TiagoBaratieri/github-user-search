import React from 'react';
import {Link} from 'react-router-dom';
import './styles.css';

const Navbar = () =>(
    <nav className="main-nav text-nav">
        <div >
           <Link to="/">
             <h4>Bootcamp DevSuperior</h4>
           </Link>  
           </div>
    </nav>
);

export default Navbar;