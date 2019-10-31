import React from 'react';

// eslint-disable-next-line no-unused-vars
import styles from './NotFoundPageComponent.module.scss';
import PageContainer from '../PageContainer/index';

const NotFoundComponent = () => (
    <React.Fragment>
        <PageContainer direction="column">
            <h1>You just hit a route that doesn&#39;t exist :(</h1>
            <p> feels bad man</p>
        </PageContainer>
    </React.Fragment>
);

export default NotFoundComponent;
