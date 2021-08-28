import React from 'react';

// Material UI
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import {Link} from '@material-ui/core';
// Styles
import s from './style.module.scss';

const ContactFooter = () => (
  <div className={s.contactFooter}>
    <PhoneInTalkIcon className={s.contactFooter__icon} />
    <Link href="tel:+380939430469" className={s.contactFooter__link}>
      +380 63 258-20-09
    </Link>
  </div>
);

export default ContactFooter;
