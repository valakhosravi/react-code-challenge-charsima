import { Avatar, Box, Button, ButtonBase, CircularProgress, List, ListItem, ListItemAvatar, ListItemText, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Item } from '../Interfaces/Item'
import { addValue, clearValues } from '../Redux/Slices/valuesSlice';

const { useDispatch } = require('react-redux');

export default function SearchableList(props: SearchableListProps) {
    const [searchTerm, setSearchTerm] = useState('');
    const loading = props.list.length === 0 ? true : false;

    const dispatch = useDispatch();

    const onItemClick = (item: Item) => {
        dispatch(addValue(item.title));
    }

    const onClearListClick = () => {
        dispatch(clearValues());
    }

    const filteredItems = props.list.filter((item) => {
        return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
        <Box sx={{ boxShadow: 3 }} p={3} height="calc(100% - 40px)">
            <Box mb={2}>
                <TextField onChange={handleSearchChange} id="outlined-basic" label="Search..." variant="outlined" fullWidth />
            </Box>
            <Box height="calc(100vh - 198px)" sx={{ overflowY: "scroll" }} mb={2}>
                <List sx={{ width: '100%' }}>
                    {
                        loading &&
                        <Box textAlign="center">
                            <CircularProgress />
                        </Box>
                    }
                    {
                        filteredItems.map(item =>
                            <ButtonBase onClick={() => onItemClick(item)} key={item.id} sx={{ width: "100%" }}>
                                <ListItem alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt="" src="" />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={item.title}
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.secondary"
                                                >
                                                    {item.description}
                                                </Typography>
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                            </ButtonBase>
                        )
                    }
                </List>
            </Box>
            <Box>
                <Button onClick={() => onClearListClick()} variant="contained" fullWidth>
                    CLEAR LIST
                </Button>
            </Box>
        </Box>
    )
}

interface SearchableListProps {
    list: Item[]
}
