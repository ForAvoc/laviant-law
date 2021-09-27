import React from 'react';
// Componets
// Redux
import {connect} from 'react-redux';
// Material UI
import {IconButton, Tooltip, makeStyles} from '@material-ui/core';
import SmsIcon from '@material-ui/icons/Sms';
import TelegramIcon from '@material-ui/icons/Telegram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import CloseIcon from '@material-ui/icons/Close';
// Styles
import cx from 'classnames';
import {selectorGetSocialBubleState} from '../../../store/socialBuble-service/selector';

import {ReactComponent as ViberIcon} from '../../media/Viber.svg';
import s from './style.module.scss';

const useStyles = makeStyles(() => ({
  openButton: {
    backgroundColor: '#1f464d',
    color: 'white',
    '&:hover': {
      color: '#8766e4',
    },
  },
  openIcon: {
    fontSize: '30px',
  },
  openButtonActive: {
    color: '#8766e4',
    backgroundColor: '#dddddd',
  },

  button: {
    zIndex: '2',
    opacity: '0',
    position: 'absolute',
    bottom: '0',
    right: '-18px',
    transition: 'all .5s',
    color: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    visibility: 'hidden',
    backgroundColor: 'rgba(221, 221, 221,80%)',
    padding: '5px',
    '&:hover': {
      backgroundColor: '#dddddd',
    },
  },
  icon: {
    fontSize: '30px',
    height: '30px',
    width: '30px',
    color: 'red',
    fill: 'gray',
    '&:hover': {
      color: '#8766e4',
      fill: '#8766e4',
    },
  },
  active: {
    opacity: '1',
    visibility: 'visible',
  },
  email: {
    bottom: '315px',
    transition: 'bottom .5s ease .25s, opacity .5s ease .25s',
  },
  whatsapp: {
    bottom: '270px',
    transition: 'bottom .5s ease .5s, opacity .5s ease .5s',
  },
  telegram: {
    bottom: '225px',
    transition: 'bottom .5s ease .75s, opacity .5s ease .75s',
  },
  viber: {
    bottom: '180px',
    transition: 'bottom .5s ease 1s, opacity .5s ease 1s',
  },
  instagram: {
    bottom: '135px',
    transition: 'bottom .5s ease 1.25s, opacity .5s ease 1.25s',
  },
  facebook: {
    bottom: '90px',
    transition: 'bottom .5s ease 1.5s, opacity .5s ease 1.5s',
  },
  youtube: {
    bottom: '45px',
    transition: 'bottom .5s ease 1.75s, opacity .5s ease 1.75s',
  },

  close: {
    bottom: '5px',
    right: '-16px',
    transition: 'bottom .5s ease 2s, opacity .5s ease 2s',
    color: 'gray',
    backgroundColor: 'transparent',
    '&:hover': {
      color: '#e65f5f',
    },
  },
}));

const SocialBulbe = ({socialBubleState}) => {
  const [active, setActive] = React.useState(false);
  const classes = useStyles();
  const array = [
    {title: 'E-mail', className: classes.email, href: 'mailto:laviant.law.firm@gmail.com', Icon: EmailIcon},
    {title: 'Telegram', className: classes.telegram, href: 'tg://resolve?domain=VICIOne', Icon: TelegramIcon},
    {
      title: 'Whatsapp',
      className: classes.whatsapp,
      href: 'https://wa.me/380635314330',
      targetBlank: true,
      Icon: WhatsAppIcon,
    },
    {title: 'Viber', className: classes.viber, href: 'mailto:laviant.law.firm@gmail.com', Icon: ViberIcon},
    {
      title: 'Instagram',
      className: classes.instagram,
      href: 'https://www.instagram.com/laviant.law.firm/',
      targetBlank: true,
      Icon: InstagramIcon,
    },
    {title: 'Facebook', className: classes.facebook, href: 'mailto:laviant.law.firm@gmail.com', Icon: FacebookIcon},
    {
      title: 'Youtube',
      className: classes.youtube,
      href: 'https://www.youtube.com/channel/UCpPg2FBXE2MfKXPnBRivODA',
      targetBlank: true,
      Icon: YouTubeIcon,
    },
  ];

  return (
    <div className={cx(s.wrapper, {[s.active]: socialBubleState})}>
      <IconButton
        className={cx(classes.openButton, {[classes.openButtonActive]: active})}
        onClick={() => setActive((prev) => !prev)}
      >
        <SmsIcon className={classes.openIcon} />
      </IconButton>

      <div className={s.row}>
        {array.map(({onClick, title, href, targetBlank, className, Icon}) => (
          <Tooltip key={title} title={title} placement="left">
            <IconButton
              onClick={() => onClick}
              target={targetBlank ? '_blank' : null}
              href={href}
              className={cx(classes.button, {[classes.active]: active, [className]: active})}
            >
              <Icon className={classes.icon} />
            </IconButton>
          </Tooltip>
        ))}
        <IconButton
          onClick={() => setActive(false)}
          className={cx(classes.button, {[classes.active]: active, [classes.close]: active})}
        >
          <CloseIcon />
        </IconButton>
      </div>
      <div className={cx({[s.BudleBg]: active})} />
    </div>
  );
};

const mapStateToProps = (store) => ({
  socialBubleState: selectorGetSocialBubleState(store),
});

const connector = connect(mapStateToProps, null);

export default connector(SocialBulbe);
