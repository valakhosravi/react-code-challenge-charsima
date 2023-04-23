import { Box, Chip } from '@mui/material'
import React from 'react'

export default function TagList() {
    return (
        <Box sx={{ boxShadow: 3 }} p={3} height="calc(100% - 40px)">
            <Box mb={2}>
                Tap to delete
            </Box>
            <Box>
                <Box sx={{display: "inline-block"}} mr={1} mb={1}>
                    <Chip label="Clickable" color="primary" />
                </Box>
            </Box>
        </Box>
    )
}
