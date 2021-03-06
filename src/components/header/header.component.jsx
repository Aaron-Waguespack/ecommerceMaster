import React from 'react';
import {Link} from 'react-router-dom';
import EcommLogo from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utilites.jsx';

import './header.styles.scss';

const Header = ({currentUser}) => {
    console.log("current", currentUser)
    return(
    <div className='header'>
        <Link className ='logo-container' to='/'>
           <img src={EcommLogo} alt="Ecommerce Logo"/>
        </Link>
        <div className="options-container">
            <Link className='option' to="/">HOME</Link>
            <Link className='option' to="/shop">SHOP</Link>
            {
                currentUser ?
                    (<div className='option' onClick={()=> auth.signOut()}>
                        SIGN OUT
                    </div>)
                    :
                    (<Link className='option' to='/signin'>
                        SIGN IN
                    </Link>)
            }
        </div>
   </div>
    )
};

export default Header;