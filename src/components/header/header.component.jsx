import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/18763726-crown.svg'
const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
        </div>
    </div>
);

export default Header;