import React from 'react';
import {Link} from 'react-router-dom';
import './styles.scss';

const Navbar = () => (
    <nav>
        <div className="bg-primary main-nav">
            <Link to ="/" className="nav-logo-text">
                 <h4> Bootcamp DevSuperior</h4>
            </Link>
        </div>
    </nav>

);

export default Navbar;