import React from 'react';
import {Link} from 'react-router-dom';
import EcommLogo from '../../assets/crown.svg';

import './header.styles.scss';

const Header = () => (

    <div className='header'>
        <Link className ='logo-container' to='/'>
           <img src={EcommLogo} alt="Ecommerce Logo"/>
        </Link>
        <div className="options-container">
            <Link className='option' to="/">HOME</Link>
            <Link className='option' to="/shop">SHOP</Link>
            <Link className='option' to="/contacts">CONTACTS</Link>
        </div>
   </div>
);

export default Header;