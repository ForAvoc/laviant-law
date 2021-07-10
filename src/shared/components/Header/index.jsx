/* eslint-disable prettier/prettier */
/* eslint-disable dot-notation */
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

// import ClearAllIcon from '@material-ui/icons/ClearAll';
// import CloseIcon from '@material-ui/icons/Close';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import TelegramIcon from '@material-ui/icons/Telegram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PhoneIcon from '@material-ui/icons/Phone';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MapIcon from '@material-ui/icons/Map';
import cx from 'classnames';
import s from './style.module.scss';

// git test
const langArr= [{text:'Укр',color:'inherit'},{text:'Рус',color:'inherit'},{text:'Eng',color:'secondary'}]
  
const useStyles = makeStyles(() => ({
  root: {
    minWidth:'35px',
  },
  separator:{
    margin:'2px'
  }

}));

const Header = () => {
  const classes = useStyles();

  const [isSelectedLang,setIsSelectedLang] = React.useState(0)

  const handleClick=(index)=>{
    setIsSelectedLang(index);
    
  }
  return (
    <div className={s.header}>
      <div className={s['header__leftSide']}>
        <div className={s['leftSide__firstCol']}>
          <img
            className={s['leftSide__logo']}
            src="data:image/png;base64,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"
            alt="logo"
          />
          <Breadcrumbs classes={{separator: classes.separator}} className={s['leftSide__changeLang']}>
            {langArr.map((item,index)=>(
                <Button
                  classes={{root:classes.root,colorInherit:s["color__langText"],textPrimary:s["color__selectedLang"]}} 
                  disabled={isSelectedLang === index}
                  color={isSelectedLang === index? "primary":'inherit'}
                  onClick={()=>handleClick(index)}
                  
                  >
                  {item.text}
                </Button>
              ))
            }
          </Breadcrumbs>
        </div>
        <div className={s['leftSide__adress']}>
            <LocationOnIcon/>
            <span>Г. Киев ул. Пушкина 12/2</span>
          <Link 
            // component='button'
            target='_blank'
            href='https://goo.gl/maps/n9fPLCoy6nxFpwSQ8'>
              <MapIcon/>
            Открыть на карте
            </Link>
          {/* <IconButton className={s.header__burger} onClick={() => setIsSideBarOpened((prev) => !prev)}>
            {isSideBarOpened ? <CloseIcon /> : <ClearAllIcon />}
          </IconButton> */}
        </div>
      </div>
      <div className={s['header__rightSide']}>
        <div className={s['rightSide__contacts']}>
          <Link href="tel:+380939430469">
            <PhoneInTalkIcon/>
            <span>+380 93 943-04-69</span>
          </Link>
          <Link href="tel:+380939430469">
            <PhoneInTalkIcon/>
            <span>+380-63 258-20-09</span>
          </Link>
          <Link href="mailto:alenyata@gmail.com">
            <MailOutlineIcon/>
            <span>laviantlaw@gmail.com</span>
          </Link>
        </div>
        <div className={s['rightSide__social']}>
          <Link href="tg://resolve?domain=VICIOne" className={s.socialItem}>
            <IconButton
              classes={{colorPrimary: cx(s.color,s['color__telegram'],s['socialItem__icon'])}}
              color="primary"
            >
              <TelegramIcon fontSize="large" />
            </IconButton>
          </Link>
          <Link href="tg://resolve?domain=VICIOne" className={s.socialItem}>
            <IconButton
              classes={{colorPrimary: cx(s.color,s['color__whatsapp'],s['socialItem__icon'])}}
              color="primary"
            >
              <WhatsAppIcon fontSize="large" />
            </IconButton>
          </Link>
          <Link href="tg://resolve?domain=VICIOne" className={s.socialItem}>
            <IconButton
              classes={{colorPrimary: cx(s.color,s['color__viber'],s['socialItem__icon'])}}
              color="primary"
            >
              <PhoneIcon fontSize="large" />
            </IconButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
