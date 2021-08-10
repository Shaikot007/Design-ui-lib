import React from 'react';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Layout from '../src/components/layout';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  textMargin: {
    marginLeft: '80px'
  }
});

export default function Table() {
  const classes = useStyles();

  return (
    <Layout>
      <Box
        className={classes.textMargin}
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Typography paragraph>
          This is table page dummy content.
        </Typography>
      </Box>
    </Layout>
  );
};
