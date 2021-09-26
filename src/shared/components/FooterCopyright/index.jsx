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
    {/* <div className={s.footerCoryright__rightSide}>
      <p className={s.footerCoryright__text}>График работы:</p>
      <p className={s.footerCoryright__text}>Пн-пт 09:00 - 19:00 </p>
      <p className={s.footerCoryright__text}>Сб - 09:00 - 15:00 Вс - выходной</p>
    </div> */}
  </div>
);

export default FooterCopyright;
