import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Grid';

const useStyles = makeStyles( theme => ({
  root: { flexGrow: 1 },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>Control-Thingie</Grid>
        <Grid item xs={9}>Display-Thingie</Grid>
      </Grid>
    </div>
  )
}

export default App;
