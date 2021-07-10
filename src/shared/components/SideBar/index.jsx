import React, {useState} from 'react';
import cx from 'classnames';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import s from './style.module.scss';
import SitebarListItem from './SideBarListItem';
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
    borderRight: 0,
  },
}));

const SideBar = ({isOpened, setIsSideBarOpened, isTemporary, isVertical}) => {
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
          {sidebarItems.map((item) => (
            <SitebarListItem name={item.name} path={item.path} key={item.name} />
          ))}
        </List>
      </Drawer>
    </div>
  );
};
export default SideBar;
