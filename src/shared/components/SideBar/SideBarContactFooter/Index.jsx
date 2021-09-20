import React from 'react';
// Componets

// Material UI
import {makeStyles, Link} from '@material-ui/core';
// Styles
import cx from 'classnames';
import s from './style.module.scss';

const useStyles = makeStyles(() => ({
  item: {
    color: '#4c555c',
    textDecoration: 'none',
    transition: 'all .3s',
    marginBottom: '5px',

    '&:hover': {
      color: '#8B00FF',
      textDecoration: 'none',
    },
  },
  adress: {
    fontSize: '17px',
    marginBottom: '10px',
    display: 'flex',
    flexDirection: 'column',
  },
  phoneLink: {
    fontSize: '20px',
    fontWeight: '400',
    letterSpacing: '1.2px',
  },
  mailLink: {
    fontSize: '14px',
  },
  span: {
    fontSize: '11px',
    marginLeft: '-5px',
    marginTop: '5px',
  },
}));

const SideBarContactFooter = () => {
  const classes = useStyles();

  return (
    <div className={s.contact__wrapper}>
      <Link target="_blank" href="https://goo.gl/maps/n9fPLCoy6nxFpwSQ8" className={cx(classes.item, classes.adress)}>
        <span>Киев Проспект Победы,</span>
        <span> дом 30, офис 17</span>
      </Link>
      <span className={classes.span}>Контактные номера телефонов</span>
      <Link href="tel:+380635314330" className={cx(classes.item, classes.phoneLink)}>
        +380 63 531-43-30
      </Link>
      <Link href="tel:+380970655657" className={cx(classes.item, classes.phoneLink)}>
        +380 97 065-56-57
      </Link>
      <span className={classes.span}>Почта для сзязи с нами</span>
      <Link href="mailto:laviant.law.firm@gmail.com" className={cx(classes.item, classes.mailLink)}>
        laviant.law.firm@gmail.com
      </Link>
    </div>
  );
};

export default SideBarContactFooter;
