import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import CloseIcon from '@material-ui/icons/Close';
import s from './style.module.scss';

const Header = ({isSideBarOpened, setIsSideBarOpened}) => (
  <div className={s.header}>
    <IconButton className={s.header__burger} onClick={() => setIsSideBarOpened((prev) => !prev)}>
      {isSideBarOpened ? <CloseIcon /> : <ClearAllIcon />}
    </IconButton>
  </div>
);

export default Header;
