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
import SideBarContactFooter from './SideBarContactFooter/Index';
import {ReactComponent as LogoIcon} from '../../media/Logo.svg';
import ROUTERS from '../../../core/_consts/routes';

const drawerWidth = 300;

const useStyles = makeStyles(() => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      boxSizing: 'border-box',
      top: '100px',
      width: drawerWidth,
      borderRight: 0,
      bottom: 0,
      backgroundColor: '#f7f8f9',
      height: 'calc(100vh - 100px)',
      paddingLeft: '0px',
      '@media (max-width: 1280px)': {
        height: '100vh',
        top: 0,
      },
      '@media (max-width: 480px)': {
        width: '100%',
      },
    },
  },
  list: {
    width: '100%',
  },
  closeButton: {
    display: 'none',
    borderRadius: '5px',
    fontWeight: 600,
    color: '#8766e4',
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
    {name: 'IT право', path: ROUTERS.IT_LAW},
    {name: 'Регистрация бизнеса в инностраный юрисдикциях', path: ROUTERS.REGITER_BUSINESS_ABROAD},
    {name: 'Сопровождения бизнеса', path: ROUTERS.BUSINESS_SUPPORT},
    {name: 'Ликвидация компаний', path: ROUTERS.COMPANY_LIQUIDATION},
  ]);

  const [isSideBarTemporary, setIsSideBarTemporary] = useState(false);
  const classes = useStyles();

  // const [scrollPosition, setScrollPosition] = useState(0);
  // const [isChanged, setIsChanged] = useState(false);
  // const [maxScrollHeight, setMaxScrollHeight] = useState(0);

  // useEffect(() => {
  //   setMaxScrollHeight(document.body.scrollHeight - window.innerHeight);

  //   const onResize = () => {
  //     const newState = window.scrollY + 75 > maxScrollHeight;
  //     setIsChanged(newState);
  //     setScrollPosition(window.scrollY);
  //   };

  //   window.addEventListener('scroll', onResize);
  // }, []);

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
          {/* <pre>{JSON.stringify(scrollPosition, null, 2)}</pre>
          <pre>{JSON.stringify(isChanged, null, 2)}</pre> */}
          {sidebarItems.map((item) => (
            <SitebarListItem
              name={item.name}
              path={item.path}
              key={item.name}
              clickHandler={() => setSidebarState(false)}
            />
          ))}
        </List>
        <SideBarContactFooter />
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
