import React from 'react';
import PropTypes from 'prop-types';

import Styles from './HomePageComponent.module.scss';

const HomePageComponent = ({ data }) => {
    return (
        <React.Fragment>
            <div className={Styles.pageContainer}>
                <div className={Styles.title}> {data.title} </div>

                <div className={Styles.article}>
                    <div className={Styles.articleTitle}> {data.articles[0].title}</div>
                    <div className={Styles.articleText}>{data.articles[0].text}</div>
                    <div className={Styles.articleActions}>
                        <button className="buttonWhite" type="button">
                            READ MORE
                        </button>
                        <button className="buttonRed" type="button">
                            {' '}
                            CONTACT US
                        </button>
                    </div>
                </div>

                <div className={Styles.article}>
                    <div className={Styles.articleTitle}>{data.articles[1].title}</div>
                    <div className={Styles.articleText}>{data.articles[1].text}</div>
                    <div className={Styles.articleActions}>
                        <button className="buttonRed" type="button">
                            APPLY{' '}
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

HomePageComponent.defaultProps = {
    title: ''
};

HomePageComponent.propTypes = {
    title: PropTypes.string
};

export default HomePageComponent;
