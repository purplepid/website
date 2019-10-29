import React from 'react';

import Styles from './WhoPageComponent.module.scss';

const WhoPageComponent = () => {
    return (
        <React.Fragment>
            <div className={Styles.pageContainer}>
                <div className={Styles.title}> who are we? </div>

                <div className={Styles.section}>
                    <div className={Styles.article}>
                        {' '}
                        In dignissim lacus id venenatis lobortis. Phasellus quis facilisis tortor. Praesent vehicula
                        venenatis lobortis. Curabitur blandit accumsan quam nec lobortis. Donec et nisl fringilla,
                        fringilla mauris viverra, pellentesque elit. Pellentesque efficitur auctor tristique.{' '}
                    </div>

                    <div className={Styles.article}>
                        {' '}
                        Sed sit amet tristique ante, ut rhoncus libero. Pellentesque purus nisi, laoreet sed volutpat
                        quis, porta id dui. In consequat congue iaculis. Donec ut justo erat.{' '}
                    </div>

                    <div className={Styles.article}>
                        {' '}
                        Sed mollis tristique lectus id sodales. Vivamus fringilla, elit ut sodales convallis, tellus
                        purus posuere nisl, et tristique dolor nisi ac lorem. Morbi dictum cursus neque quis maximus.
                        Vestibulum non vulputate nisi. Maecenas fermentum elit eu mollis vestibulum.{' '}
                    </div>

                    <div className={Styles.article}>
                        {' '}
                        In varius, leo id laoreet imperdiet, magna neque lobortis ligula, ut venenatis diam metus vitae
                        sem. Praesent nec commodo diam. In cursus lorem ipsum, sit amet accumsan ligula cursus eget.
                        Cras at nisl faucibus, malesuada mi id, porta lectus. Orci varius natoque penatibus et magnis
                        dis parturient montes, nascetur ridiculus mus. Aliquam cursus at odio et hendrerit. Praesent
                        tincidunt lorem id convallis aliquam.{' '}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default WhoPageComponent;
