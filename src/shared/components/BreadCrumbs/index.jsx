import {Breadcrumbs, Typography, withStyles, makeStyles} from '@material-ui/core';
import {useHistory} from 'react-router';
import cx from 'classnames';

// const StyledBreadcrumbs = withStyles({
//   root: {
//     fontSize: '12px',
//   },
// })(Breadcrumbs);

const useStyles = makeStyles(() => ({
  root: {
    '& .MuiBreadcrumbs-ol': {
      display: 'flex',
      gap: '5px',
    },
  },
  link: {
    color: '#cacaca',
    textDecoration: 'none',
    transition: 'all .3s',
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
      color: '#8766e4',
    },
  },
  activeLink: {
    fontSize: '15px',
    color: 'gray',
  },
  separator: {
    color: '#cacaca',
  },
}));

const isRouteLast = (sumOfRoutes, currentIndex) => sumOfRoutes === currentIndex;

const BreadCrumbs = ({routes}) => {
  const classes = useStyles();

  const history = useHistory();

  return (
    <Breadcrumbs className={classes.root}>
      {!!routes.length &&
        routes.map((item, i) =>
          isRouteLast(routes.length - 1, i) ? (
            <Typography key={item.title} className={cx(classes.current, classes.activeLink)}>
              {item.title}
            </Typography>
          ) : (
            <Typography
              key={item.title}
              color="inherit"
              className={classes.link}
              onClick={() => history.push(item.route)}
            >
              {item.title}
            </Typography>
          )
        )}
      )
    </Breadcrumbs>
  );
};

export default BreadCrumbs;
