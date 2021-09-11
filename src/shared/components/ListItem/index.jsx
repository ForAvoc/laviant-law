import React from 'react';
// Material UI
import {makeStyles} from '@material-ui/core';
// styles
import s from './style.module.scss';

const useStyles = makeStyles(() => ({
  listItemIcon: {
    position: 'absolute',
    top: '5px',
    left: '-26px',
    fontSize: '18px',
    color: '#292929',
  },
}));

const ListItem = ({text, Icon}) => {
  const classes = useStyles();
  return (
    <li className={s.listItem}>
      <Icon className={classes.listItemIcon} />
      {text}
    </li>
  );
};

export default ListItem;
