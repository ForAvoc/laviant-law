import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import CloseIcon from '@material-ui/icons/Close';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import s from './style.module.scss';

const Header = ({isSideBarOpened, setIsSideBarOpened}) => {
  function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  return (
    <div className={s.header}>
      <IconButton className={s.header__burger} onClick={() => setIsSideBarOpened((prev) => !prev)}>
        {isSideBarOpened ? <CloseIcon /> : <ClearAllIcon />}
      </IconButton>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/" onClick={handleClick}>
          Укр
        </Link>
        <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
          Рус
        </Link>
        <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
          Eng
        </Link>
      </Breadcrumbs>
    </div>
  );
};

export default Header;
