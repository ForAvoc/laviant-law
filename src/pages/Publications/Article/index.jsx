import React from 'react';
// Material UI
import {makeStyles, Typography} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import cx from 'classnames';
// Redux
import {connect} from 'react-redux';
import {actionSetModalState} from '../../../store/modal-service/actions';
// Styles
import s from './style.module.scss';

// Components
import ContentWrapper from '../../../shared/components/ContentWrapper';
import CustomButton from '../../../shared/components/CustomButton';

const useStyles = makeStyles(() => ({
  socialItem: {
    marginRight: '15px',
    fontSize: '35px',
    cursor: 'pointer',
    transition: 'color .3s',
    '&:hover': {
      color: 'gray',
    },
  },
  twitter: {
    color: '#1c9cea',
  },
  facebook: {
    color: '#1773ea',
  },
  linkedIn: {
    color: '#0270ad',
  },
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

const Article = ({setModalState}) => {
  const classes = useStyles();
  return (
    <ContentWrapper headerName="Heading lalala reo asda weq people">
      <div className={s.article}>
        <div className={s.article__wrapper}>
          <div className={s.article__imgWraper}>
            <img
              className={s.article__imgWraper__img}
              src="https://sblaw.vn/wp-content/uploads/2016/06/incorporating-a-foreign-invested-logistic-company-in-vietnam.jpg"
              alt="123123"
            />
            <time className={s.article__imgWraper__time}>19.08.21</time>
          </div>
          <div className={s.article__content}>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis inventore a est! Aut dignissimos,
              exercitationem iusto rem voluptatum, nisi expedita, ipsam culpa cum ipsum nulla nemo quisquam minus
              aspernatur magni? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa optio nobis corporis modi,
              accusamus ipsum sint beatae nostrum vero nulla! Porro repellat ullam at quo ratione doloribus recusandae,
              quod explicabo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quos ut quidem eveniet,
              debitis, suscipit aspernatur totam quis reiciendis modi temporibus esse, impedit delectus corporis? Culpa
              ut recusandae molestias mollitia.
            </p>
          </div>
          <div className={s.footer}>
            <div className={s.callback}>
              <div className={s.callback__text}>
                <Typography className={classes.firstText}>
                  У Вас есть вопросы или Вы готовы договориться о встрече?
                </Typography>
                <Typography className={classes.secondText}>
                  Вы можете заказать обратный звонок или связаться с нами любым удобным Вам способом
                </Typography>
              </div>
              <div className={s.callback__btn}>
                <CustomButton
                  onClick={() => setModalState(true)}
                  classNameBtn={classes.button}
                  text="Заказать звонок"
                />
              </div>
            </div>
          </div>
          <p>Если статья была Вам полезна, Вы можете поделиться ею:</p>
          <div className={s.footer__social}>
            <FacebookIcon className={cx(classes.socialItem, classes.facebook)} />
            <LinkedInIcon className={cx(classes.socialItem, classes.linkedIn)} />
            <TwitterIcon className={cx(classes.socialItem, classes.twitter)} />
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

const mapDispatchToProps = {
  setModalState: actionSetModalState,
};

const connector = connect(null, mapDispatchToProps);
export default connector(Article);
