import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/logo.svg'

import './header.styles.scss';
import '../../assets/logo.scss'

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                Download Resources
            </Link>
            <Link className='option' to='/shop'>
                Contact
            </Link>
            {
                currentUser ? 
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> 
                : 
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
        </div>
        
    </div>
)

export default Header;