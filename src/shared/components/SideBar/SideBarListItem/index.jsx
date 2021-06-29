/* eslint-disable dot-notation */
import React from 'react';
// import cx from 'classnames';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import s from './style.module.scss';

const SitebarListItem = ({text, index, selectedItem, handleListItemClick}) => (
  <ListItem
    className={s.listItem}
    key={`${text}_${index}`}
    classes={{
      selected: s.selectedItem,
    }}
    selected={selectedItem === `${text}_${index}`}
    onClick={() => handleListItemClick(`${text}_${index}`)}
  >
    <ListItemText primary={text} className={s['listItem__text']} />
    {/* ????? */}
    {/* <ArrowForwardIcon
      className={cx(
        s['listItem__arrowIcon'],
        selectedItem === `${text}_${index}` ? s['listItem__arrowIcon__active'] : ''
      )}
    /> */}
  </ListItem>
);
export default SitebarListItem;
