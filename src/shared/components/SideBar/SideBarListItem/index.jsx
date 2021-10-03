import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './style.module.scss';

const SitebarListItem = ({name, path, clickHandler}) => (
  <NavLink exact to={path} className={s.listItem} activeClassName={s.listItem__selectedItem} onClick={clickHandler}>
    {name}
  </NavLink>
);
export default SitebarListItem;
