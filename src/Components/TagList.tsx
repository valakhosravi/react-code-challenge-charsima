import { Box, Chip } from '@mui/material'
import { useDispatch } from 'react-redux';
import { removeValue } from '../Redux/Slices/valuesSlice'

export default function TagList(props: TagListProps) {
    const dispatch = useDispatch();

    const handleClick = (index: number) => {
        dispatch(removeValue(index));
    }

    return (
        <Box sx={{ boxShadow: 3 }} p={3} height="calc(100% - 40px)">
            <Box mb={2}>
                Tap to delete
            </Box>
            <Box>
                {props.values.map((value, index) =>
                    <Box key={index} sx={{ display: "inline-block" }} mr={1} mb={1}>
                        <Chip onClick={() => handleClick(index)} key={index} label={value} color="primary" />
                    </Box>
                )}
            </Box>
        </Box>
    )
}

interface TagListProps {
    values: string[]
}