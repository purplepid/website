import React from 'react';

// import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <React.Fragment>
            <div>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
            </div>
        </React.Fragment>
    );
};

export default Footer;
