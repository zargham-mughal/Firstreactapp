import React from 'react';
import headerstyle from './header.module.css'
const Header = () => {
    return (
        <header className={headerstyle.myheader}>
            <h1>My React Application</h1>
        </header>
    );
};

export default Header;