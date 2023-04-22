import { Box, TextField } from '@mui/material'
import React from 'react'

export default function SearchableList() {
    return (
        <Box sx={{ boxShadow: 3 }} p={3} height="calc(100% - 40px)">
            <Box mb={2}>
                <TextField id="outlined-basic" label="Search..." variant="outlined" fullWidth />
            </Box>
            <Box>
                here
            </Box>
        </Box>
    )
}
