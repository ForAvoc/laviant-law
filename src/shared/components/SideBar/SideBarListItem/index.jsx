import React from 'react';
import {NavLink} from 'react-router-dom';

import s from './style.module.scss';

const SitebarListItem = ({name, path}) => (
  <NavLink to={path || '/without'} className={s.listItem} activeClassName={s.listItem__selectedItem}>
    {name || 'WITHOUT'}
  </NavLink>
);
export default SitebarListItem;
