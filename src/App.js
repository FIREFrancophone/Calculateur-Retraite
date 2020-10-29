import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid, Paper } from '@material-ui/core'

import DataVisualizer from './components/DataVisualizer'

const useStyles = makeStyles(theme => ({
  root: { flexGrow: 1 },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}))

const App = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Container maxWidth='xl'>
        <Grid container='true' spacing={3} alignItems='stretch'>
          <Grid item xs={3}>
            <Paper className={classes.paper}>Hello</Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper className={classes.paper}>
              <DataVisualizer classes={classes} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default App
