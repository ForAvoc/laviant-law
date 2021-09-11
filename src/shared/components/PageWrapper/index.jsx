import {Typography} from '@material-ui/core';
import s from './PageWrapper.module.scss';
import BreadCrumbs from '../BreadCrumbs';

const PageWrapper = ({children, pageTitle, breadCrumbsRoutes}) => (
  <div className={s.pageWrapper}>
    <BreadCrumbs routes={breadCrumbsRoutes} />
    <p className={s.pageWrapper__title}>{pageTitle.toUpperCase()}</p>
    <div className={s.pageWrapper__content}>{children}</div>
  </div>
);

export default PageWrapper;
