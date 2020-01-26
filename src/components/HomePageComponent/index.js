import React from "react";

import CustomButton from "../Button/index";
import PageContainer from "../PageContainer/index";
import styles from "./HomePageComponent.module.scss";

const HomePageComponent = () => {
    return (
        <React.Fragment>
            <PageContainer direction="column">
                <h1 className={styles.title}>
                    Creating value through competence.
                </h1>

                <div className={styles.article}>
                    <h2 className={styles.articleTitle}>Our Mission</h2>
                    <p className={styles.articleText}>
                        We are dedicated to challenge and help mid and large
                        sized companies to advance in their digital product
                        development.
                    </p>
                    <p className={styles.articleText}>
                        With more than 15 years of experience in
                        building scalable and edge-cutting products we are able
                        to deliver bespoke user experience and technology
                    </p>
                    <div className={styles.articleActions}>
                        <CustomButton color="#771BFF" background="#ffffff">
                            read more
                        </CustomButton>
                        <CustomButton color="#ffffff" background="#FC3F7F">
                            contact us
                        </CustomButton>
                    </div>
                </div>

                <div className={styles.article}>
                    <h2 className={styles.articleTitle}>One of us?</h2>
                    <p className={styles.articleText}>
                        Is there an alternative???
                    </p>
                    <div className={styles.articleActions}>
                        <CustomButton color="#ffffff" background="#FC3F7F">
                            apply
                        </CustomButton>
                    </div>
                </div>
            </PageContainer>
        </React.Fragment>
    );
};

export default HomePageComponent;
