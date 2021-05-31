import React from 'react';
import Headerlogo from './HeaderLogo'
import Breaking from './BreakingNewsHeader';
import HeaderTop from './HeaderTop'

export const Header = () => {
    return (
        <header>
            <HeaderTop />
            <Breaking />
            <Headerlogo />
        </header>
    )
}

export default Header;

