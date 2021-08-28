/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import {Link} from 'react-router-dom';
// Material UI
import {Button, makeStyles, IconButton} from '@material-ui/core';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import MenuIcon from '@material-ui/icons/Menu';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MapIcon from '@material-ui/icons/Map';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
// Redux
import {connect} from 'react-redux';
import {actionSetSidebarState} from '../../../store/sidebar-service/actions';
import {actionSetModalState} from '../../../store/modal-service/actions';
// Components
import {ReactComponent as LogoIcon} from '../../media/Logo.svg';

import CustomButton from '../CustomButton';
// Styles
import s from './style.module.scss';
import ROUTERS from '../../../core/_consts/routes';

const useStyles = makeStyles(() => ({
  button: {
    padding: '15px 20px',
    marginLeft: '75px',
    borderRadius: '0px',
    fontSize: '12px',
    fontWeight: 700,
    backgroundColor: '#8B00FF',
    border: '1px solid #8B00FF',
    color: 'white',
    '&:hover': {
      backgroundColor: 'white',
      color: 'black',
    },
    '@media (max-width: 1280px)': {
      marginLeft: '40px',
    },
    '@media (max-width: 900px)': {
      display: 'none',
    },
  },
  minifiedButtonHeader: {
    display: 'none',
    '&:hover': {
      backgroundColor: 'white',
      color: '#8B00FF',
    },
    '@media (max-width: 900px)': {
      display: 'flex',
      alignItems: 'center',
    },
    '@media (max-width: 748px)': {
      marginLeft: '0px',
    },
  },
  phoneEnabledIcon: {
    color: 'inherited',
  },
  burger: {
    display: 'none',
    '@media (max-width: 1280px)': {
      display: 'flex',
      alignItems: 'center',
    },
  },
  buttonWrapper: {
    overflow: 'hidden',
  },
}));

const Header = ({setSidebarState, setModalState}) => {
  const classes = useStyles();
  return (
    <div className={s.header}>
      <div className={s.header__left}>
        <IconButton className={classes.burger} onClick={() => setSidebarState(true)}>
          <MenuIcon />
        </IconButton>
        <Link to={ROUTERS.HOME} className={s.header__logo}>
          <LogoIcon className={s.header__logo__img} />
        </Link>
        <div className={s.header__adress}>
          <span>
            <LocationOnIcon />
            Г. Киев Проспект Победы,
          </span>
          <span className={s.header__adress__secondSpan}> дом 30, офис 17 </span>

          <a target="_blank" href="https://goo.gl/maps/k7tAUf4oGVZen9fB7" rel="noreferrer">
            <MapIcon />
            Открыть на карте
          </a>
        </div>
      </div>
      <div className={s.header__right}>
        <div className={s.header__contacts}>
          <a href="tel:+380939430469">
            <PhoneInTalkIcon />
            <span>+380 63 531-43-30</span>
          </a>
          <a href="tel:+380939430469">
            <PhoneInTalkIcon />
            <span>+380 63 258-20-09</span>
          </a>
          <a href="mailto:laviant.law.firm@gmail.com">
            <MailOutlineIcon />
            <span>laviant.law.firm@gmail.com</span>
          </a>
        </div>

        <Button className={classes.button} onClick={() => setModalState(true)}>
          Заказать звонок
        </Button>
        <CustomButton
          Icon={PhoneEnabledIcon}
          classNameBtn={classes.minifiedButtonHeader}
          onClick={() => setModalState(true)}
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  setSidebarState: actionSetSidebarState,
  setModalState: actionSetModalState,
};

const connector = connect(null, mapDispatchToProps);

export default connector(Header);
