import React from 'react';

import { Link } from 'gatsby';
import Style from './Nav.module.scss';

const Nav = () => {
    return (
        <React.Fragment>
            <div className={Style.navContent}>
                <Link to="who-we-are">who are we?</Link>
                <Link to="contact">contact</Link>
            </div>
        </React.Fragment>
    );
};

export default Nav;
