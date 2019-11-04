import React from 'react';

import styles from './WhoPageComponent.module.scss';
import PageContainer from '../PageContainer/index';

const WhoPageComponent = () => {
    return (
        <React.Fragment>
            <PageContainer direction="column">
                <h1 className={styles.title}> who are we? </h1>

                <div className={styles.section}>
                    <p className={styles.article}>
                        In dignissim lacus id venenatis lobortis. Phasellus quis facilisis tortor. Praesent vehicula
                        venenatis lobortis. Curabitur blandit accumsan quam nec lobortis. Donec et nisl fringilla, nisl
                        fringilla, fringilla mauris viverra, pellentesque elit. Pellentesque efficitur auctor tristique
                    </p>
                    <p className={styles.article}>
                        Sed sit amet tristique ante, ut rhoncus libero. Pellentesque purus nisi, laoreet sed volutpat
                        quis, porta id dui. In consequat congue iaculis. Donec ut justo erat.
                    </p>
                    <p className={styles.article}>
                        Sed mollis tristique lectus id sodales. Vivamus fringilla, elit ut sodales convallis, tellus
                        purus posuere nisl, et tristique dolor nisi ac lorem. Morbi dictum cursus neque quis maximus.
                        Vestibulum non vulputate nisi. Maecenas fermentum elit eu mollis vestibulum.
                    </p>
                    <p className={styles.article}>
                        In varius, leo id laoreet imperdiet, magna neque lobortis ligula, ut venenatis diam metus vitae
                        sem. Praesent nec commodo diam. In cursus lorem ipsum, sit amet accumsan ligula cursus eget.Cras
                        at nisl faucibus, malesuada mi id, porta lectus. Orci varius natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculus mus. Aliquam cursus at odio et hendrerit. Praesent
                        tincidunt lorem id convallis aliquam.
                    </p>
                </div>
            </PageContainer>
        </React.Fragment>
    );
};

export default WhoPageComponent;
