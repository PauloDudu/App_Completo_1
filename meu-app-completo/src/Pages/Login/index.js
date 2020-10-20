import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

const CircularIntegration = () => {

  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  const handleButtonClick = () => {
    if (!loading) {
      setLoading(true);
      
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.CircleContainer}>
        {loading && <CircularProgress size={90} className={classes.fabProgress} />}
      </div>
      <div className={classes.wrapper}>
        <Button
          variant="contained"
          color="primary"
          disabled={loading}
          onClick={handleButtonClick}
        >
          Login
        </Button>
        </div>
    </div>
    
  );
}

export default CircularIntegration;

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  CircleContainer: {
    position: 'absolute',
    height: '100%',    
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fabProgress: {
    color: 'orange',
    position: 'relative',
    marginTop: 'auto'
  }
}));