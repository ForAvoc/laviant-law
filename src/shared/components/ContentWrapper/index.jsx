import React from 'react';
// Componets
import {Link} from 'react-router-dom';

// Material UI
import {Breadcrumbs, makeStyles} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ROUTERS from '../../../core/_consts/routes';
// Styles
import s from './style.module.scss';

const useStyles = makeStyles(() => ({
  breadcrumbs: {
    fontSize: '14px',
  },
  link: {
    color: '#cacaca',
    textDecoration: 'none',
    transition: 'all .3s',

    '&:hover': {
      textDecoration: 'underline',
      color: '#8B00FF',
    },
  },
  activeLink: {
    fontSize: '15px',
    color: 'gray',
  },
  separator: {
    color: '#cacaca',
  },
}));

const PostWrapper = ({children, headerName}) => {
  const classes = useStyles();

  return (
    <div className={s.head__wrapper}>
      <Breadcrumbs classes={{separator: classes.separator}} className={classes.breadcrumbs}>
        <Link className={classes.link} to={ROUTERS.HOME}>
          Юридическая компания `Laviant`
        </Link>
        <Typography className={classes.activeLink}>{headerName}</Typography>
      </Breadcrumbs>
      <h2 className={s.head__header}>{headerName}</h2>
      {children}
    </div>
  );
};

export default PostWrapper;
