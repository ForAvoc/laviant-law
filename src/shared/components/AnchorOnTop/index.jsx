/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import cx from 'classnames';
// Redux
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import {makeStyles} from '@material-ui/core';
import {connect} from 'react-redux';
import {selectorGetSocialBubleState} from '../../../store/socialBuble-service/selector';
import {actionSetSocialBubleState} from '../../../store/socialBuble-service/actions';
// Component
import CustomButton from '../CustomButton';

const useStyles = makeStyles(() => ({
  anchorWrapper: {
    zIndex: '12',
    position: 'fixed',
    bottom: '-90px',
    right: '25px',
    transition: 'all .5s .04s',
  },
  active: {
    bottom: '70px',
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

const AnchorOnTop = ({socialBubleState, setSocialBubleState}) => {
  const classes = useStyles();

  const showModalByScr = () => {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      setSocialBubleState(true);
    } else setSocialBubleState(false);
  };
  window.addEventListener('scroll', showModalByScr);

  return (
    <div onClick={() => scrollToTop()} className={cx(classes.anchorWrapper, {[classes.active]: socialBubleState})}>
      <CustomButton Icon={ExpandLessIcon} classNameIcon={classes.anchorIcon} classNameBtn={classes.anchorBtn} />
    </div>
  );
};

const mapStateToProps = (store) => ({
  socialBubleState: selectorGetSocialBubleState(store),
});

const mapDispatchToProps = {
  setSocialBubleState: actionSetSocialBubleState,
};
const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(AnchorOnTop);
