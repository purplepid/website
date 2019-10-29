import React from 'react';

import Styles from './WhoPageComponent.module.scss';

const WhoPageComponent = ({ data }) => {
    return (
        <React.Fragment>
            <div className={Styles.pageContainer}>
                <div className={Styles.title}> {data.title} </div>

                <div className={Styles.section}>
                    <div className={Styles.article}>{data.sections[0].articles[0].text}</div>

                    <div className={Styles.article}>{data.sections[0].articles[1].text}</div>

                    <div className={Styles.article}>{data.sections[0].articles[2].text}</div>

                    <div className={Styles.article}>{data.sections[0].articles[3].text}</div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default WhoPageComponent;
