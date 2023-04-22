import React, { useEffect } from 'react';
import './App.css';
import SearchableList from './Components/SearchableList';
import { Grid } from '@mui/material';
import TagList from './Components/TagList';
import { getProducts, getUsers } from './Endpoints/api';
import axios from 'axios';

function App() {

  useEffect(() => {
    Promise.all([
      getUsers(),
      getProducts()
    ]).then(([usersResponse, productsResponse]) => {
      console.log('usersResponse :>> ', usersResponse);
      console.log('productsResponse :>> ', productsResponse);
    }).catch(error => {
      console.error(error);
    }).finally(
      () => {
        // setIsLoading(false);
      }
    );
  }, []);


  return (
    <Grid container spacing={3} minHeight="100vh">
      <Grid item xs={12} sm={6} md={4}>
        <SearchableList></SearchableList>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <SearchableList></SearchableList>
      </Grid>
      <Grid item xs={12} md={4}>
        <TagList></TagList>
      </Grid>
    </Grid>
  );
}

export default App;
