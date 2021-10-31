import {Switch, Route} from 'react-router-dom';
import {CircularProgress} from '@material-ui/core';
import {lazy, Suspense} from 'react';
import ROUTERS from './core/_consts/routes';
import s from './App.module.scss';
import HomePage from './pages/HomePage';
import Header from './shared/components/Header';
import SideBar from './shared/components/SideBar';
import ScrollToTop from './shared/components/ScrollToTop';
import ContactFooter from './shared/components/ContactFooter';
import SocialBuble from './shared/components/SocialBuble';
import AnchorOnTop from './shared/components/AnchorOnTop';

const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
const ITLaw = lazy(() => import('./pages/Offers/ITLaw'));
const ChangeEdr = lazy(() => import('./pages/Offers/ChangeEdr'));
const CompanyLiquidation = lazy(() => import('./pages/Offers/CompanyLiquidation'));
const BusinessSupport = lazy(() => import('./pages/Offers/BusinessSupport'));
const RegisterBusinessAbroad = lazy(() => import('./pages/Offers/RegisterBusinessAbroad'));
const MigrationLaw = lazy(() => import('./pages/Offers/MigrationLaw'));
const RegisterTradeMark = lazy(() => import('./pages/Offers/RegisterTradeMark'));
const GetLicense = lazy(() => import('./pages/Offers/GetLicense'));
const BuyCompany = lazy(() => import('./pages/Offers/BuyCompany'));
const TaxationOOO = lazy(() => import('./pages/Publications/PublicationsPages/TaxationOOO'));
const JurisdictionsForBusiness = lazy(() => import('./pages/Publications/PublicationsPages/JurisdictionsForBusiness'));
const CountriesForITBusiness = lazy(() => import('./pages/Publications/PublicationsPages/CountriesForITBusiness'));
const BusinessRegistration = lazy(() => import('./pages/Publications/PublicationsPages/BusinessRegistration'));
const SecurityLicense = lazy(() => import('./pages/Publications/PublicationsPages/SecurityLicense'));
const TaxEResidency = lazy(() => import('./pages/Publications/PublicationsPages/TaxEResidency'));
const TOVRegistration = lazy(() => import('./pages/Publications/PublicationsPages/TOVRegistration'));
const MakingChangesBENOwner = lazy(() => import('./pages/Publications/PublicationsPages/MakingChangesBENOwner'));
const FourGroupsOfTaxation = lazy(() => import('./pages/Publications/PublicationsPages/FourGroupsOfTaxation'));
const Article = lazy(() => import('./pages/Publications/Article'));
const Publications = lazy(() => import('./pages/Publications'));
const RegisterBusiness = lazy(() => import('./pages/Offers/RegisterBusiness'));
const CallbackModal = lazy(() => import('./shared/components/CallbackModal'));

function App() {
  return (
    <div className={s.app}>
      <Suspense fallback={<CircularProgress />}>
        <Header />
        <div className={s.app__body}>
          <SideBar />
          <div className={s.app__content}>
            <ScrollToTop />
            <Switch>
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
              <Route path={ROUTERS.NOT_FOUND} component={NotFound} />
            </Switch>
          </div>
        </div>
        <CallbackModal />
        <ContactFooter />
        <SocialBuble />
        <AnchorOnTop />
      </Suspense>
    </div>
  );
}

export default App;
