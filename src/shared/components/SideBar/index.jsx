import React, {useState} from 'react';
// Material UI
import {makeStyles, List, Drawer} from '@material-ui/core';
// CX
import cx from 'classnames';
// Redux
import {connect} from 'react-redux';
import {selectorGetSideBarState} from '../../../store/sidebar-service/selector';
import {actionSetSidebarState} from '../../../store/sidebar-service/actions';
// Styles
import s from './style.module.scss';
// Components
import SitebarListItem from './SideBarListItem';
//
import ROUTERS from '../../../core/_consts/routes';

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
    left: '25px',
    borderRight: 0,
  },
}));

const SideBar = ({sideBarState, setSidebarState, isTemporary, isVertical}) => {
  const [sidebarItems] = useState([
    {name: 'Главная', path: ROUTERS.HOME},
    'Публикации',
    'Регистрация бизнеса',
    'Внесения изменений в ЕДР',
    'Купить компанию',
    'Получить лицензию',
    'Регистрация торговых марок',
    'Миграционное право',
    'Регистрация бизнеса в инностраный юрисдикциях',
    'Сопровождения бизнеса',
    'Ликвидация компаний',
  ]);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        onBackdropClick={() => setSidebarState(false)}
        variant={isTemporary ? 'temporary' : 'permanent'}
        classes={{
          paper: cx(classes.drawerPaper, s['side-bar__paper']),
        }}
        anchor={isVertical ? 'top' : 'left'}
        open={sideBarState}
      >
        <List
          classes={{
            padding: s['side-bar__list'],
          }}
        >
          {sidebarItems.map((item) => (
            <SitebarListItem name={item.name} path={item.path} key={item.name} />
          ))}
        </List>
      </Drawer>
    </div>
  );
};

const mapStateToProps = (store) => ({
  sideBarState: selectorGetSideBarState(store),
});

const mapDispatchToProps = {
  setSidebarState: actionSetSidebarState,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(SideBar);
