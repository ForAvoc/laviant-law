/* eslint-disable no-unused-vars */
import React, {useLayoutEffect, useState} from 'react';
import {Switch, Redirect, Route, useLocation} from 'react-router-dom';
import ROUTERS from './core/_consts/routes';
import s from './App.module.scss';
import Header from './shared/components/Header';
import SideBar from './shared/components/SideBar';
import HomePage from './pages/HomePage';

function App() {
  const [isSideBarTemporary, setIsSideBarTemporary] = useState(false);
  const [isSideBarOpened, setIsSideBarOpened] = useState(false);
  const [isSideBarVertical, setIsSideBarVertical] = useState(false);

  const location = useLocation();

  useLayoutEffect(() => {
    if (window.innerWidth < 1300) {
      setIsSideBarTemporary(true);
    } else {
      setIsSideBarTemporary(false);
    }
    if (window.innerWidth < 721) {
      setIsSideBarVertical(true);
    } else {
      setIsSideBarVertical(false);
    }
    window.addEventListener('resize', (e) => {
      if (e.currentTarget.innerWidth < 1300) {
        setIsSideBarTemporary(true);
      } else {
        setIsSideBarTemporary(false);
      }
      if (e.currentTarget.innerWidth < 721) {
        setIsSideBarVertical(true);
      } else {
        setIsSideBarVertical(false);
      }
    });
  }, []);
  return (
    <div className={s.app}>
      <Header isSideBarOpened={isSideBarOpened} setIsSideBarOpened={setIsSideBarOpened} />
      <div className={s.app__body}>
        <SideBar
          isOpened={isSideBarOpened}
          setIsSideBarOpened={setIsSideBarOpened}
          isTemporary={isSideBarTemporary}
          isVertical={isSideBarVertical}
        />
        <div className={s.app__content}>
          <Switch location={location}>
            <Route exact path={ROUTERS.HOME} component={HomePage} />
            <Redirect exact path="/" to={ROUTERS.HOME} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;

// <MainPageLayout
//           isSideBarOpened={isSideBarOpened}
//           setIsSideBarOpened={setIsSideBarOpened}
//           isSideBarTemporary={isSideBarTemporary}
//           setIsSideBarTemporary={setIsSideBarTemporary}
//           isSideBarVertical={isSideBarVertical}
//         >
//           <div>Content</div>
//         </MainPageLayout>
