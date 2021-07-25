import React from 'react';
// Material UI
import {makeStyles} from '@material-ui/core';

// Styles
import s from './style.module.scss';

const useStyles = makeStyles(() => ({
  ourBenefitsIcon: {
    height: '120px',
    width: '250px',
    fill: 'gray',
  },
}));

const ourBenefits = ({Icon, heading, description}) => {
  const classes = useStyles();
  return (
    <div className={s.ourBenefits}>
      <Icon className={classes.ourBenefitsIcon} />
      <div className={s.ourBenefits__text}>
        <h3 className={s.ourBenefits__text__heading}>{heading}</h3>
        <p className={s.ourBenefits__text__description}>
          {description}
          Помогаем создать успешный бизнес: регистрируем ООО и предпринимателей (ФЛП), подбираем систему
          налогообложения, предлагаем эффективные организационные формы.
        </p>
      </div>
    </div>
  );
};
export default ourBenefits;
