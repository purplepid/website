import React from 'react';

import styles from './WhoPageComponent.module.scss';

const WhoPageComponent = ({ data }) => {
    return (
        <React.Fragment>
            <div className={styles.pageContainer}>
                <h1 className={styles.title}> {data.title} </h1>

                <div className={styles.section}>
                    <p className={styles.article}>{data.sections[0].articles[0].text}</p>

                    <p className={styles.article}>{data.sections[0].articles[1].text}</p>

                    <p className={styles.article}>{data.sections[0].articles[2].text}</p>

                    <p className={styles.article}>{data.sections[0].articles[3].text}</p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default WhoPageComponent;
