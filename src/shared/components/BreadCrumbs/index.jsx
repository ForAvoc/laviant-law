import {Breadcrumbs, Link, Typography, withStyles, makeStyles} from '@material-ui/core';
import {useHistory} from 'react-router';

const StyledBreadcrumbs = withStyles({
  root: {
    fontSize: '12px',
  },
})(Breadcrumbs);

const useStyles = makeStyles({
  current: {
    color: '#848484',
    fontSize: '12px',
    fontWeight: 600,
  },
  link: {
    color: '#848484',
    fontSize: '12px',
    cursor: 'pointer',
  },
});

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
