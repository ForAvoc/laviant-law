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
import ContactFooter from './shared/components/ContactFooter';
import SocialBuble from './shared/components/SocialBuble';
import Publications from './pages/Publications';
import FooterCopyright from './shared/components/FooterCopyright';
import AnchorOnTop from './shared/components/AnchorOnTop';
import Article from './pages/Publications/Article';
import FourGroupsOfTaxation from './pages/Publications/PublicationsPages/FourGroupsOfTaxation';
import MakingChangesBENOwner from './pages/Publications/PublicationsPages/MakingChangesBENOwner';
import TOVRegistration from './pages/Publications/PublicationsPages/TOVRegistration';
import TaxEResidency from './pages/Publications/PublicationsPages/TaxEResidency';
import SecurityLicense from './pages/Publications/PublicationsPages/SecurityLicense';
import BusinessRegistration from './pages/Publications/PublicationsPages/BusinessRegistration';
import CountriesForITBusiness from './pages/Publications/PublicationsPages/CountriesForITBusiness';
import JurisdictionsForBusiness from './pages/Publications/PublicationsPages/JurisdictionsForBusiness';

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
            <Route exact path={ROUTERS.PUBLICATIONS} component={Publications} />
            <Route exact path={ROUTERS.REGISTER_BUSINESS} component={RegisterBusiness} />
            <Route exact path={ROUTERS.ARTICLE} component={Article} />
            <Route exact path={ROUTERS.FOUR_GROUPS_OF_TAXATION} component={FourGroupsOfTaxation} />
            <Route exact path={ROUTERS.MAKING_CHANGES_BEN_OWNER} component={MakingChangesBENOwner} />
            <Route exact path={ROUTERS.TOV_REGISTRATION} component={TOVRegistration} />
            <Route exact path={ROUTERS.TAX_E_RESIDENCY} component={TaxEResidency} />
            <Route exact path={ROUTERS.SECURITY_LICENSE} component={SecurityLicense} />
            <Route exact path={ROUTERS.BUSINESS_REGISTRATION} component={BusinessRegistration} />
            <Route exact path={ROUTERS.COUNTRES_FOR_IT_BUSINESS} component={CountriesForITBusiness} />
            <Route exact path={ROUTERS.JURISDICTIONS_FOR_BUSINESS} component={JurisdictionsForBusiness} />

            <Redirect exact path="/" to={ROUTERS.HOME} />
          </Switch>
        </div>
      </div>
      <CallbackModal />
      <ContactFooter />
      <FooterCopyright />
      <SocialBuble />
      <AnchorOnTop />
    </div>
  );
}

export default App;
