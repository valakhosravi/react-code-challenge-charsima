import React, { useEffect, useState } from 'react';
import './App.css';
import SearchableList from './Components/SearchableList';
import { Grid } from '@mui/material';
import TagList from './Components/TagList';
import { getProducts, getUsers } from './Endpoints/api';
import { Item } from './Interfaces/Item';

function App() {
  const [users, setUsers] = useState<Item[]>([]);
  const [products, setProducts] = useState<Item[]>([]);

  useEffect(() => {
    Promise.all([
      getUsers(),
      getProducts()
    ]).then(([usersResponse, productsResponse]) => {
      console.log('usersResponse :>> ', usersResponse.data);
      console.log('productsResponse :>> ', productsResponse.data);
      const _users = usersResponse.data.map((user: any) => ({
        id: user.id,
        title: user.username,
        description: user.email
      })) as Item[];
      const _products = productsResponse.data.map((product: any) => ({
        id: product.id,
        title: product.title,
        description: product.description
      })) as Item[];
      setUsers(_users);
      setProducts(_products);
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
        <SearchableList list={users}></SearchableList>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <SearchableList list={products}></SearchableList>
      </Grid>
      <Grid item xs={12} md={4}>
        <TagList></TagList>
      </Grid>
    </Grid>
  );
}

export default App;
