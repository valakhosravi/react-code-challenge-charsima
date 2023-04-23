import { Avatar, Box, Button, ButtonBase, Divider, List, ListItem, ListItemAvatar, ListItemText, TextField, Typography } from '@mui/material'
import React from 'react'
import { Item } from '../Interfaces/Item'

export default function SearchableList(props: SearchableListProps) {
    return (
        <Box sx={{ boxShadow: 3 }} p={3} height="calc(100% - 40px)">
            <Box mb={2}>
                <TextField id="outlined-basic" label="Search..." variant="outlined" fullWidth />
            </Box>
            <Box height="calc(100vh - 198px)" sx={{ overflowY: "scroll" }} mb={2}>
                <List sx={{ width: '100%' }}>
                    {
                        props.list.map(item =>
                            <ButtonBase sx={{width: "100%"}}>
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
                <Button variant="contained" fullWidth>
                    CLEAR LIST
                </Button>
            </Box>
        </Box>
    )
}

interface SearchableListProps {
    list: Item[]
}
