import React from 'react';
// Componets

// Material UI
import {IconButton, makeStyles} from '@material-ui/core';
import SmsIcon from '@material-ui/icons/Sms';
import TelegramIcon from '@material-ui/icons/Telegram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import CloseIcon from '@material-ui/icons/Close';
// Styles
import cx from 'classnames';
import {ReactComponent as ViberIcon} from '../../media/viber.svg';
import s from './style.module.scss';

const useStyles = makeStyles(() => ({
  openButton: {
    backgroundColor: '#1f464d',
    color: 'white',
    '&:hover': {
      color: '#8B00FF',
    },
  },
  openIcon: {
    fontSize: '40px',
  },
  openButtonActive: {
    color: '#8B00FF',
    backgroundColor: '#dddddd',
  },
  button: {
    opacity: '0',
    position: 'absolute',
    bottom: '0',
    right: '-22px',
    transition: 'all .5s',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    visibility: 'hidden',
    '&:hover': {
      backgroundColor: 'red',
    },
  },
  icon: {
    fontSize: '25px',
    height: '25px',
    width: '25px',

    fill: 'white',
  },
  active: {
    opacity: '1',
    visibility: 'visible',
  },
  email: {
    bottom: '335px',
    transition: 'all .5s .25s',
    backgroundColor: '#1f464d',
    '&:hover': {
      backgroundColor: '#1f464d',
    },
  },
  whatsapp: {
    bottom: '280px',
    transition: 'all .5s .5s',
    backgroundColor: '#95dc77',
    '&:hover': {
      backgroundColor: '#95dc77',
    },
  },
  telegram: {
    bottom: '225px',
    transition: 'all .5s .75s',
    backgroundColor: '#62aded',
    '&:hover': {
      backgroundColor: '#62aded',
    },
  },
  facebook: {
    bottom: '170px',
    transition: 'all .5s 1s',
    backgroundColor: '#1877f2',
    '&:hover': {
      backgroundColor: '#1877f2',
    },
  },
  viber: {
    bottom: '115px',
    transition: 'all .5s 1.25s',
    backgroundColor: '#7360f2',
    '&:hover': {
      backgroundColor: '#7360f2',
    },
  },
  youtube: {
    bottom: '60px',
    transition: 'all .5s 1.5s',
    backgroundColor: '#ed1b24',
    '&:hover': {
      backgroundColor: '#ed1b24',
    },
  },

  close: {
    bottom: '5px',
    transition: 'all .5s 1.75s',
    color: 'gray',
  },
}));

const SocialBulbe = () => {
  const [active, setActive] = React.useState(false);
  const classes = useStyles();
  return (
    <div className={s.wrapper}>
      <IconButton
        className={cx(classes.openButton, {[classes.openButtonActive]: active})}
        onClick={() => setActive((prev) => !prev)}
      >
        <SmsIcon className={classes.openIcon} />
      </IconButton>

      <div className={s.row}>
        <IconButton
          href="mailto:laviant.law.firm@gmail.com"
          className={cx(classes.button, {[classes.active]: active, [classes.email]: active})}
        >
          <EmailIcon className={classes.icon} />
        </IconButton>

        <IconButton
          target="_blank"
          href="https://wa.me/380635314330 "
          className={cx(classes.button, {[classes.active]: active, [classes.whatsapp]: active})}
        >
          <WhatsAppIcon className={classes.icon} />
        </IconButton>

        <IconButton
          href="tg://resolve?domain=VICIOne"
          className={cx(classes.button, {[classes.active]: active, [classes.telegram]: active})}
        >
          <TelegramIcon className={classes.icon} />
        </IconButton>

        <IconButton
          target="_blank"
          href="https://ru-ru.facebook.com/zuck"
          className={cx(classes.button, {[classes.active]: active, [classes.facebook]: active})}
        >
          <FacebookIcon className={classes.icon} />
        </IconButton>
        <IconButton className={cx(classes.button, {[classes.active]: active, [classes.viber]: active})}>
          <ViberIcon className={classes.icon} />
        </IconButton>
        <IconButton className={cx(classes.button, {[classes.active]: active, [classes.youtube]: active})}>
          <YouTubeIcon className={classes.icon} />
        </IconButton>
        <IconButton
          onClick={() => setActive(false)}
          className={cx(classes.button, {[classes.active]: active, [classes.close]: active})}
        >
          <CloseIcon />
        </IconButton>
      </div>
    </div>
  );
};
export default SocialBulbe;
