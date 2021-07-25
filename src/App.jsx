import React, {useLayoutEffect, useState} from 'react';
import {Switch, Redirect, Route, useLocation} from 'react-router-dom';
import ROUTERS from './core/_consts/routes';
import s from './App.module.scss';
import SideBar from './shared/components/SideBar';
import HomePage from './pages/HomePage';
import Header from './shared/components/Header';
import CallbackModal from './shared/components/CallbackModal';

function App() {
  const [isSideBarTemporary, setIsSideBarTemporary] = useState(false);
  const [isSideBarVertical, setIsSideBarVertical] = useState(false);

  const location = useLocation();

  // TODO: replace this logic to custom hook (or find another approach)
  useLayoutEffect(() => {
    if (window.innerWidth < 1280) {
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
      if (e.currentTarget.innerWidth < 1280) {
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
      <Header />
      <div className={s.app__body}>
        <SideBar isTemporary={isSideBarTemporary} isVertical={isSideBarVertical} />
        <div className={s.app__content}>
          <Switch location={location}>
            <Route exact path={ROUTERS.HOME} component={HomePage} />
            <Redirect exact path="/" to={ROUTERS.HOME} />
          </Switch>
        </div>
      </div>
      <CallbackModal />
    </div>
  );
}

export default App;
