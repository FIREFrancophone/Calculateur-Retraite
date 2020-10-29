import React from 'react'
import { Paper, Tab, Tabs } from '@material-ui/core'

const DataVisualizer = classes => (
  <Paper className={classes.root}>
    <Tabs>
      <Tab label='Item 1' />
      <Tab label='Item 2' />
    </Tabs>
  </Paper>
)

export default DataVisualizer
