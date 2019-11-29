import React from "react";

import styles from "./WhoPageComponent.module.scss";
import PageContainer from "../PageContainer/index";

const WhoPageComponent = () => {
    return (
        <React.Fragment>
            <PageContainer direction="column">
                <h1 className={styles.title}> who are we? </h1>

                <div className={styles.section}>
                    <p className={styles.article}>
                        Marc and Igor knew each other since 2013 when they
                        worked together in one of Schibsted’s internal ventures.
                        Todo: What is Marc good at? Todo: What is Igor good at?
                    </p>
                    <p className={styles.article}>
                        Fast forward to 2019, after working in a separate
                        companies and roles for about 6 years, they sat down
                        over lunch and while discussing their current endeavours
                        and work, they came to the conclusion that there is much
                        more to be done when it comes to delivering the right
                        competence and solutions to companies in the Stockholm
                        tech ecosystem.
                    </p>
                    <p className={styles.article}>
                        Together, we realized we can identify, develop and
                        deliver right people and products to our potential
                        clients.
                    </p>
                    <p className={styles.article}>
                        So far, we have helped several customers in Banking,
                        Retail, Media, Gaming and public sector to deliver
                        better experience and more effective solutions to their
                        end-users.
                    </p>
                </div>
            </PageContainer>
        </React.Fragment>
    );
};

export default WhoPageComponent;
