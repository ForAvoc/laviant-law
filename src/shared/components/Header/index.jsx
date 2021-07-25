import React from 'react';
// Material UI
import {Button, Link, makeStyles, IconButton} from '@material-ui/core';
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
// Styles
import s from './Header.module.scss';

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
  minifiedButton: {
    display: 'none',
    padding: '10px 5px',
    marginLeft: '40px',
    borderRadius: '0px',
    fontSize: '12px',
    fontWeight: 700,
    backgroundColor: '#8B00FF',
    border: '1px solid #8B00FF',
    color: 'white',
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
}));

const Header = ({setSidebarState, setModalState}) => {
  const classes = useStyles();
  return (
    <div className={s.header}>
      <div className={s.header__left}>
        <IconButton className={classes.burger} onClick={() => setSidebarState(true)}>
          <MenuIcon />
        </IconButton>
        <LogoIcon className={s.header__logo} />
        <div className={s.header__adress}>
          <LocationOnIcon />
          <span>Г. Киев ул. Пушкина 12/2</span>
          <Link target="_blank" href="https://goo.gl/maps/n9fPLCoy6nxFpwSQ8">
            <MapIcon />
            Открыть на карте
          </Link>
        </div>
      </div>
      <div className={s.header__right}>
        <div className={s.header__contacts}>
          <Link href="tel:+380939430469">
            <PhoneInTalkIcon />
            <span>+380 93 943-04-69</span>
          </Link>
          <Link href="tel:+380939430469">
            <PhoneInTalkIcon />
            <span>+380-63 258-20-09</span>
          </Link>
          <Link href="mailto:alenyata@gmail.com">
            <MailOutlineIcon />
            <span>laviantlaw@gmail.com</span>
          </Link>
        </div>
        <Button className={classes.button} onClick={() => setModalState(true)}>
          Заказать звонок
        </Button>
        <Button className={classes.minifiedButton}>
          <PhoneEnabledIcon className={classes.phoneEnabledIcon} />
        </Button>
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
