import React from 'react';
import PropTypes from 'prop-types';

import CustomButton from '../Button/index';
import styles from './HomePageComponent.module.scss';

const HomePageComponent = ({ data }) => {
    return (
        <React.Fragment>
            <div className={styles.pageContainer}>
                <h1 className={styles.title}> {data.title} </h1>

                <div className={styles.article}>
                    <h2 className={styles.articleTitle}> {data.articles[0].title}</h2>
                    <p className={styles.articleText}>{data.articles[0].text}</p>
                    <div className={styles.articleActions}>
                        <CustomButton className="buttonWhite" component="button">
                            read more
                        </CustomButton>
                        <CustomButton className="buttonRed" component="button">
                            contact us
                        </CustomButton>
                    </div>
                </div>

                <div className={styles.article}>
                    <h2 className={styles.articleTitle}>{data.articles[1].title}</h2>
                    <p className={styles.articleText}>{data.articles[1].text}</p>
                    <div className={styles.articleActions}>
                        <CustomButton className="buttonRed" component="button">
                            apply
                        </CustomButton>
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
