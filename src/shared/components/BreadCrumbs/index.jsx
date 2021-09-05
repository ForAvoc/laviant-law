import {Breadcrumbs, Typography, withStyles, makeStyles} from '@material-ui/core';
import {useHistory} from 'react-router';

const StyledBreadcrumbs = withStyles({
  root: {
    fontSize: '12px',
  },
})(Breadcrumbs);

const useStyles = makeStyles(() => ({
  current: {
    fontSize: '14px',
  },
  link: {
    color: '#cacaca',
    textDecoration: 'none',
    transition: 'all .3s',
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
      color: '#8B00FF',
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
    <StyledBreadcrumbs aria-label="breadcrumb">
      {!!routes.length &&
        routes.map((item, i) =>
          isRouteLast(routes.length - 1, i) ? (
            <Typography key={item.title} className={classes.current}>
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
    </StyledBreadcrumbs>
  );
};

export default BreadCrumbs;
