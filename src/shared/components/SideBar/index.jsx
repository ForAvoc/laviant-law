import React from 'react';
import cx from 'classnames';

import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import s from './style.module.scss';
import SitebarListItem from './SideBarListItem';

import {sidebarListItems} from './staticValues';

const drawerWidth = 300;

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    top: 'auto',
    borderRight: 0,
  },
}));

const SideBar = ({isOpened, setIsSideBarOpened, isTemporary, isVertical}) => {
  const classes = useStyles();
  const [isSideBarListSelected, setIsSideBarListSelected] = React.useState();

  const handleListItemClick = (i) => {
    setIsSideBarListSelected(i);
    // ?????
    // setIsSideBarOpened(false);
  };

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        onBackdropClick={() => setIsSideBarOpened(false)}
        variant={isTemporary ? 'temporary' : 'permanent'}
        classes={{
          paper: cx(classes.drawerPaper, s['side-bar__paper']),
        }}
        anchor={isVertical ? 'top' : 'left'}
        open={isOpened}
      >
        <List
          classes={{
            padding: s['side-bar__list'],
          }}
        >
          {sidebarListItems.map((text, i) => (
            <SitebarListItem
              text={text}
              index={i}
              selectedItem={isSideBarListSelected}
              handleListItemClick={handleListItemClick}
            />
          ))}
        </List>
      </Drawer>
    </div>
  );
};
export default SideBar;
