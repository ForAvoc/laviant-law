// Components
import {LazyLoadImage} from 'react-lazy-load-image-component';
import DocumentImage from '../../../shared/media/mainPageSlider/third.jpg';
import Banner from '../../../shared/components/Banner';
import ServiceHeader from '../../../shared/components/ServiceHeader';
import 'react-lazy-load-image-component/src/effects/blur.css';

import s from './style.module.scss';

const OffersWrapper = ({children, foto, prices}) => (
  <div className={s.offersWrapper}>
    <div className={s.offersWrapper__wrapper}>
      <LazyLoadImage
        height="300px"
        width="100%"
        placeholderSrc={DocumentImage}
        effect="blur"
        className={s.offersWrapper__imgWraper__img}
        src={foto}
        alt=""
      />
      {prices && <ServiceHeader prices={prices} />}
      <div className={s.offersWrapper__content}>{children}</div>
      <div className={s.footer}>
        <Banner />
      </div>
    </div>
  </div>
);

export default OffersWrapper;
