import {Button, makeStyles} from '@material-ui/core';
import React from 'react';
import {Link} from 'react-router-dom';
import s from './NotFound.module.scss';

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: 'none',
  },
  button: {
    backgroundColor: '#8766e4',
    color: 'white',
    border: '1px solid #8766e4',
    '&:hover': {
      color: '#8766e4',
      backgroundColor: 'transparent',
    },
  },
}));

const NotFound = () => {
  const classes = useStyles();

  return (
    <div className={s.notFound}>
      <div className={s.notFound__container}>
        <div className={s.notFound__body}>
          <div className={s.notFound__header}>
            <h1 className={s.notFound__title}>
              404
              <br />
              Страница не найдена
            </h1>
            <p>Страница, которую вы ищете не существует.</p>
            <p>Вернитесь на главную страницу и повторите попытку.</p>
          </div>
          <div className={s.notFound__backHome}>
            <Link to="/" className={classes.link}>
              <Button variant="contained" type="button" className={classes.button}>
                На главную
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
