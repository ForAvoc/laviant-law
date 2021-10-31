import {CircularProgress, makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loader: {
    color: '#8766e4',
  },
});

const CustomLoader = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <CircularProgress className={classes.loader} />
    </div>
  );
};

export default CustomLoader;
