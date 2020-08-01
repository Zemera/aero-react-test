import React from 'react';
import { makeStyles, Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { ArticleList, Filters } from './components';
import { createStyles } from '@material-ui/core';
import { loadProductEffects } from 'store/effects/ProductEffets';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from 'store/types';
const useStyles = makeStyles((theme) =>
  createStyles({
    '@global': {
      body: {
        background: '#f7f7f7'
      }
    },
    root: {
      marginTop: 56,
      display: 'flex',
      justifyContent: 'center',
      width: '1280px',
      height: '610px',
      padding: 0
    }
  })
);

export default function Article() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const loadData = useCallback(() => {
    dispatch(loadProductEffects());
  }, [dispatch]);

  React.useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <Container className={classes.root}>
      <Grid container>
        <Grid item lg={9} md={9} xs={12}>
          <ArticleList />
        </Grid>
        <Grid item lg={3} md={3} sm={12} xs={12}>
          <Filters loadData={loadData} />
        </Grid>
      </Grid>
    </Container>
  );
}
