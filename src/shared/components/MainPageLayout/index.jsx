import React from 'react';
import s from './style.module.scss';
import Header from '../Header';
import SideBar from '../SideBar';

const MainPageLayout = ({children, setIsSideBarOpened, isSideBarOpened, isSideBarTemporary, isSideBarVertical}) => (
  <div className={s['main-page-layout']}>
    <Header isSideBarOpened={isSideBarOpened} setIsSideBarOpened={setIsSideBarOpened} />
    <div className={s['main-page-layout__body']}>
      <SideBar
        isOpened={isSideBarOpened}
        setIsSideBarOpened={setIsSideBarOpened}
        isTemporary={isSideBarTemporary}
        isVertical={isSideBarVertical}
      />
      <div className={s['main-page-layout__content']}>{children}</div>
    </div>
  </div>
);

export default MainPageLayout;
