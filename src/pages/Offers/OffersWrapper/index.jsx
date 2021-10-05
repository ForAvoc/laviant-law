import React from 'react';

// Styles
import s from './style.module.scss';
// Components
import Banner from '../../../shared/components/Banner';
import ServiceHeader from '../../../shared/components/ServiceHeader';

const OffersWrapper = ({children, foto, prices}) => (
  <div className={s.offersWrapper}>
    <div className={s.offersWrapper__wrapper}>
      <div className={s.offersWrapper__imgWraper}>
        {foto && <img className={s.offersWrapper__imgWraper__img} src={foto} alt="123123" />}
      </div>
      {prices && <ServiceHeader prices={prices} />}
      <div className={s.offersWrapper__content}>{children}</div>
      <div className={s.footer}>
        <Banner />
      </div>
    </div>
  </div>
);

export default OffersWrapper;
