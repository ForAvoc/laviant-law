import React from 'react';
import {Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {connect} from 'react-redux';
import s from './Banner.module.scss';
import {actionSetModalState} from '../../../store/modal-service/actions';
import CustomButton from '../CustomButton';

const useStyles = makeStyles(() => ({
  button: {
    padding: '15px 20px',
  },
  firstText: {
    fontSize: '25px',
    '@media (max-width: 550px)': {
      fontSize: '18px',
    },
  },
  secondText: {
    fontSize: '17px',
    marginTop: '15px',
    '@media (max-width: 550px)': {
      fontSize: '14px',
    },
  },
}));

const Banner = ({setModalState}) => {
  const classes = useStyles();

  return (
    <div className={s.callback}>
      <div className={s.callback__text}>
        <Typography className={classes.firstText}>У Вас есть вопросы или Вы готовы договориться о встрече?</Typography>
        <Typography className={classes.secondText}>
          Вы можете заказать обратный звонок или связаться с нами любым удобным Вам способом
        </Typography>
      </div>
      <div className={s.callback__btn}>
        <CustomButton onClick={() => setModalState(true)} classNameBtn={classes.button} text="Заказать звонок" />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  setModalState: actionSetModalState,
};

const connector = connect(null, mapDispatchToProps);
export default connector(Banner);
