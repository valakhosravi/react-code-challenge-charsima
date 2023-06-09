import React, { useEffect, useState } from 'react';
import './App.css';
import SearchableList from './Components/SearchableList';
import { Grid } from '@mui/material';
import TagList from './Components/TagList';
import { getProducts, getUsers } from './Endpoints/api';
import { Item } from './Interfaces/Item';
import { useSelector } from 'react-redux/es/exports';
import { RootState } from './Redux/Store';

function App() {
  const [users, setUsers] = useState<Item[]>([]);
  const [products, setProducts] = useState<Item[]>([]);

  const values = useSelector((state: RootState) => state.values);

  const initializeUsers = () => {
    getUsers().then(
      response => {
        const _users = response.data.map((user: any) => ({
          id: user.id,
          title: user.username,
          description: user.email
        })) as Item[];
        setUsers(_users);
      }
    ).catch(
      error => console.error(error)
    )
  }
  const initializeProducts = () => {
    getProducts().then(
      response => {
        const _products = response.data.map((product: any) => ({
          id: product.id,
          title: product.title,
          description: product.description
        })) as Item[];
        setProducts(_products);
      }
    ).catch(
      error => console.error(error)
    )
  }
  useEffect(() => {
    initializeUsers();
    initializeProducts();
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
        <TagList values={values.values}></TagList>
      </Grid>
    </Grid>
  );
}

export default App;
