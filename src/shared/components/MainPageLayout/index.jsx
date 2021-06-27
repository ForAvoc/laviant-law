import React from 'react';
import s from './style.module.scss';
import Header from '../Header';
import SideBar from '../SideBar';

const MainPageLayout = ({children}) => (
  <div className={s['main-page-layout']}>
    <Header />
    <div className={s['main-page-layout__body']}>
      <SideBar />
      <div className={s['main-page-layout__content']}>{children}</div>
    </div>
  </div>
);

export default MainPageLayout;
