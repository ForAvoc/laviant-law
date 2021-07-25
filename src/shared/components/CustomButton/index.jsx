import React from 'react';
import {Button, makeStyles} from '@material-ui/core';
import cx from 'classnames';

const useStyles = makeStyles(() => ({
  minifiedButton: {
    padding: '10px 5px',
    borderRadius: '0px',
    fontSize: '12px',
    fontWeight: 700,
    backgroundColor: '#8B00FF',
    border: '1px solid #8B00FF',
    color: 'white',
    '&:hover': {
      backgroundColor: 'white',
      color: '#8B00FF',
    },
  },
}));

const CustomButton = ({onClick, Icon, text, classNameBtn, classNameIcon}) => {
  const classes = useStyles();
  return (
    <Button onClick={onClick} className={cx(classes.minifiedButton, classNameBtn || '')}>
      {Icon && <Icon className={classNameIcon} />}
      {text}
    </Button>
  );
};

export default CustomButton;
