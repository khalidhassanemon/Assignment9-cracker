import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div className='header'>
            <nav className='first'>
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/cards'>Cards</Link>
            <Link to='/blogs'>Blogs</Link>
            <Link to='/statistics'>Statistics</Link>  
            </nav>
          
        </div>
    );
};

export default Header;