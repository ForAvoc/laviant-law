import React from 'react';
import {Switch, Redirect, Route, useLocation} from 'react-router-dom';
import ROUTERS from './core/_consts/routes';
import s from './App.module.scss';
import SideBar from './shared/components/SideBar';
import HomePage from './pages/HomePage';
import Header from './shared/components/Header';
import CallbackModal from './shared/components/CallbackModal';
import RegisterBusiness from './pages/Offers/RegisterBusiness';
import ScrollToTop from './shared/components/ScrollToTop';
import ContactFooter from './shared/components/ContactFooter';
import SocialBuble from './shared/components/SocialBuble';
import Publications from './pages/Publications';
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
import TaxationOOO from './pages/Publications/PublicationsPages/TaxationOOO';
import BuyCompany from './pages/Offers/BuyCompany';
import GetLicense from './pages/Offers/GetLicense';
import RegisterTradeMark from './pages/Offers/RegisterTradeMark';
import MigrationLaw from './pages/Offers/MigrationLaw';
import RegisterBusinessAbroad from './pages/Offers/RegisterBusinessAbroad';
import BusinessSupport from './pages/Offers/BusinessSupport';
import CompanyLiquidation from './pages/Offers/CompanyLiquidation';
import ChangeEdr from './pages/Offers/ChangeEdr';
import ITLaw from './pages/Offers/ITLaw';

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
            <Route exact path={ROUTERS.TAXATION_OOO} component={TaxationOOO} />
            <Route exact path={ROUTERS.BUY_COMPANY} component={BuyCompany} />
            <Route exact path={ROUTERS.GET_LICENSE} component={GetLicense} />
            <Route exact path={ROUTERS.REGISTER_TRADEMARK} component={RegisterTradeMark} />
            <Route exact path={ROUTERS.MIGRATION_LAW} component={MigrationLaw} />
            <Route exact path={ROUTERS.REGITER_BUSINESS_ABROAD} component={RegisterBusinessAbroad} />
            <Route exact path={ROUTERS.BUSINESS_SUPPORT} component={BusinessSupport} />
            <Route exact path={ROUTERS.COMPANY_LIQUIDATION} component={CompanyLiquidation} />
            <Route exact path={ROUTERS.CHANGE_EDR} component={ChangeEdr} />
            <Route exact path={ROUTERS.IT_LAW} component={ITLaw} />
            <Redirect exact path="/" to={ROUTERS.HOME} />
          </Switch>
        </div>
      </div>
      <CallbackModal />
      <ContactFooter />
      <SocialBuble />
      <AnchorOnTop />
    </div>
  );
}

export default App;
