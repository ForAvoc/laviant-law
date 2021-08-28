import React from 'react';
import {Switch, Redirect, Route, useLocation} from 'react-router-dom';
import ROUTERS from './core/_consts/routes';
import s from './App.module.scss';
import SideBar from './shared/components/SideBar';
import HomePage from './pages/HomePage';
import Header from './shared/components/Header';
import CallbackModal from './shared/components/CallbackModal';
import RegisterBusiness from './pages/RegisterBusiness';
import ScrollToTop from './shared/components/ScrollToTop';

function App() {
  const location = useLocation();

  return (
    <div className={s.app}>
      <Header />
      <div className={s.app__body}>
        <SideBar />
        <div className={s.app__content}>
          <ScrollToTop />
          <Switch location={location}>
            <Route exact path={ROUTERS.HOME} component={HomePage} />
            <Route exact path={ROUTERS.PUBLICATIONS} component={RegisterBusiness} />
            <Route exact path={ROUTERS.REGISTER_BUSINESS} component={RegisterBusiness} />
            <Redirect exact path="/" to={ROUTERS.HOME} />
          </Switch>
        </div>
      </div>
      <CallbackModal />
    </div>
  );
}

export default App;
