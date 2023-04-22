import React from 'react';
import './App.css';
import SearchableList from './Components/SearchableList';
import { Grid } from '@mui/material';
import TagList from './Components/TagList';

function App() {
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
