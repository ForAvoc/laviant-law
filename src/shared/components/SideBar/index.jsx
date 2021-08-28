import React, {useState, useLayoutEffect, useEffect} from 'react';
// Material UI
import {makeStyles, List, Drawer, Button, IconButton} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
// Redux
import {connect} from 'react-redux';
import {selectorGetSideBarState} from '../../../store/sidebar-service/selector';
import {actionSetSidebarState} from '../../../store/sidebar-service/actions';
// Styles
import s from './style.module.scss';
// Components
import SitebarListItem from './SideBarListItem';
import {ReactComponent as LogoIcon} from '../../media/Logo.svg';
//
import ROUTERS from '../../../core/_consts/routes';

const drawerWidth = 300;

const useStyles = makeStyles(() => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    display: 'flex',
    alignItems: 'center',
    width: drawerWidth,
    top: 'auto',
    paddingLeft: '25px',
    borderRight: 0,
    backgroundColor: 'transparent',
    '@media (max-width: 1280px)': {
      paddingLeft: '0px',
    },
    '@media (max-width: 480px)': {
      width: '100%',
    },
  },
  list: {
    width: '100%',
  },
  closeButton: {
    display: 'none',
    borderRadius: '5px',
    fontWeight: 600,
    color: '#8B00FF',
    marginBottom: '20px',
    '@media (max-width: 480px)': {
      display: 'block',
    },
  },
  closeIcon: {
    position: 'absolute',
    top: '5px',
    right: '5px',
  },
}));

const SideBar = ({sideBarState, setSidebarState}) => {
  const [sidebarItems] = useState([
    {name: 'Главная', path: ROUTERS.HOME},
    {name: 'Публикации', path: ROUTERS.PUBLICATIONS},
    {name: 'Регистрация бизнеса', path: ROUTERS.REGISTER_BUSINESS},
    {name: 'Внесения изменений в ЕДР', path: ROUTERS.CHANGE_EDR},
    {name: 'Купить компанию', path: ROUTERS.BUY_COMPANY},
    {name: 'Получить лицензию', path: ROUTERS.GET_LICENSE},
    {name: 'Регистрация торговых марок', path: ROUTERS.REGISTER_TRADEMARK},
    {name: 'Миграционное право', path: ROUTERS.MIGRATION_LAW},
    {name: 'Регистрация бизнеса в инностраный юрисдикциях', path: ROUTERS.REGITER_BUSINESS_ABROAD},
    {name: 'Сопровождения бизнеса', path: ROUTERS.BUSINESS_SUPPORT},
    {name: 'Ликвидация компаний', path: ROUTERS.COMPANY_LIQUIDATION},
  ]);
  const [isSideBarTemporary, setIsSideBarTemporary] = useState(false);
  const classes = useStyles();

  // TODO: replace functionality to utils (find better approach)
  useEffect(() => {
    const resizeHandler = (e) => {
      if (e.currentTarget.innerWidth < 1280) {
        setIsSideBarTemporary(true);
      } else {
        setIsSideBarTemporary(false);
      }
    };
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  useLayoutEffect(() => {
    const resizeHandler = (target) => {
      if (target < 1280) {
        setIsSideBarTemporary(true);
      } else {
        setIsSideBarTemporary(false);
      }
    };
    resizeHandler(window.innerWidth);
  }, []);

  return (
    <div className={s.sidebar}>
      <Drawer
        className={classes.drawer}
        onBackdropClick={() => setSidebarState(false)}
        variant={isSideBarTemporary ? 'temporary' : 'permanent'}
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
        open={sideBarState}
      >
        <div className={s.sidebar__head}>
          <LogoIcon className={s.sidebar__logo} />
          <IconButton className={classes.closeIcon} onClick={() => setSidebarState(false)}>
            <CloseIcon />
          </IconButton>
        </div>
        <List className={classes.list}>
          {sidebarItems.map((item) => (
            <SitebarListItem
              name={item.name}
              path={item.path}
              key={item.name}
              clickHandler={() => setSidebarState(false)}
            />
          ))}
        </List>
        <Button className={classes.closeButton} onClick={() => setSidebarState(false)}>
          Закрыть
        </Button>
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
