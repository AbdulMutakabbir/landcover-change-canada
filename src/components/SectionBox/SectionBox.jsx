import Box from '@mui/material/Box';
import './SectionBox.css'
import { Paper } from '@mui/material';

const SectionBox = ({children}) => {
    return (
        <Box 
            component="section" 
            className="section-box"
        >
            <Paper>
                {children}
            </Paper>
        </Box>
    )
}

export default SectionBox;