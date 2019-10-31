import React from 'react';

import CustomButton from '../Button/index';
import PageContainer from '../PageContainer/index';
import styles from './HomePageComponent.module.scss';

const HomePageComponent = () => {
    return (
        <React.Fragment>
            <PageContainer direction="column">
                <h1 className={styles.title}>Here goes nothing!</h1>

                <div className={styles.article}>
                    <h2 className={styles.articleTitle}>In need of competence?</h2>
                    <p className={styles.articleText}>
                        Some kind of salespitch for our consultants and why companies should choose us. And below a nice
                        looking button. Maybe some more details abou the company?
                    </p>
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
                    <h2 className={styles.articleTitle}>One of us?</h2>
                    <p className={styles.articleText}>
                        Not sure what we will write here. But probably a small intro text about us. Also we should
                        probably have some cool finish of this question an Apply button close by.
                    </p>
                    <div className={styles.articleActions}>
                        <CustomButton className="buttonRed" component="button">
                            apply
                        </CustomButton>
                    </div>
                </div>
            </PageContainer>
        </React.Fragment>
    );
};

export default HomePageComponent;
