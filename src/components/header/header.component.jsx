import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg'

import './header.styles.scss';
import '../../assets/logo.scss'

const Header = () => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo i' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                Hunt Resources
            </Link>
            <Link className='option' to='/contact'>
                Contact
            </Link>
        </div>
        
    </div>
)

export default Header;