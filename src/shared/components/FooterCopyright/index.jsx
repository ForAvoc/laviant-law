import React from 'react';
// Styles
import s from './style.module.scss';

const FooterCopyright = () => (
  <div className={s.footerCoryright}>
    <div className={s.footerCoryright__leftSide}>
      <p className={s.footerCoryright__text}>Юридическая компания «ЛАВИАНТ»</p>
      <p className={s.footerCoryright__text}>код ЕДРПОУ 43156488</p>
    </div>
    <div className={s.footerCoryright__midSide}>
      <p className={s.footerCoryright__text}>Copiryight Laviant llc 2021</p>
      <p className={s.footerCoryright__text}>Все права защищены</p>
    </div>
  </div>
);

export default FooterCopyright;
