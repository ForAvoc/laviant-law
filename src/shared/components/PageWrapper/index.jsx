// TODO: serviceHeaderPrices or alternatives
/* eslint-disable no-unused-vars */
import s from './PageWrapper.module.scss';
import BreadCrumbs from '../BreadCrumbs';
// import ServiceHeader from '../ServiceHeader';

const PageWrapper = ({children, pageTitle, breadCrumbsRoutes, serviceHeaderPrices}) => (
  <div className={s.pageWrapper}>
    <BreadCrumbs routes={breadCrumbsRoutes} />
    <p className={s.pageWrapper__title}>{pageTitle.toUpperCase()}</p>
    {/* <ServiceHeader prices={serviceHeaderPrices} /> */}
    <div className={s.pageWrapper__content}>{children}</div>
  </div>
);

export default PageWrapper;
