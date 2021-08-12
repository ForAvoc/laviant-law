/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import cx from 'classnames';
// Material UI
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import {makeStyles} from '@material-ui/core';
// Component
import CustomButton from '../CustomButton';

const useStyles = makeStyles(() => ({
  anchorWrapper: {
    zIndex: '12',
    position: 'fixed',
    bottom: '60px',
    right: '-100px',
    transition: 'all .5s',
  },
  active: {
    bottom: '60px',
    right: '25px',
    '@media (max-width: 550px)': {
      bottom: '50px',
      right: '25px',
    },
  },
  anchorIcon: {
    fontSize: '35px',
  },
  anchorBtn: {
    padding: '5px 0 5px 0',
    minWidth: '50px',
    borderRadius: '5px',
  },
}));

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const AnchorOnTop = () => {
  const [anchorState, setAnchorState] = React.useState(false);
  const classes = useStyles();

  const showModalByScr = () => {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      setAnchorState(true);
    } else setAnchorState(false);
  };
  window.addEventListener('scroll', showModalByScr);

  return (
    <div onClick={() => scrollToTop()} className={cx(classes.anchorWrapper, {[classes.active]: anchorState})}>
      <CustomButton Icon={ExpandLessIcon} classNameIcon={classes.anchorIcon} classNameBtn={classes.anchorBtn} />
    </div>
  );
};

export default AnchorOnTop;
