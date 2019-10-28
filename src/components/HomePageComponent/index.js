import React from 'react';

import Styles from './HomePageComponent.module.scss';

const HomePageComponent = () => {
    return (
        <React.Fragment>
            <div className={Styles.pageContainer}>
                <div className={Styles.title}>Here goes nothing!</div>

                <div className={Styles.article}>
                    <div className={Styles.articleTitle}>In need of competence?</div>
                    <div className={Styles.articleText}>
                        Some kind of salespitch for our consultants and why companies should choose us. And below a nice
                        looking button. Maybe some more details abou the company?
                    </div>
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
                    <div className={Styles.articleTitle}>One of us?</div>
                    <div className={Styles.articleText}>
                        Not sure what we will write here. But probably a small intro text about us. Also we should
                        probably have some cool finish of this question an Apply button close by.
                    </div>
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

export default HomePageComponent;
