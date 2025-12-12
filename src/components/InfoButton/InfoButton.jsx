import { Button } from "@mui/material"
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import './InfoButton.css'

const InfoButton = () => {
    return(
        <Button 
            className="insight-button"
            variant="outlined"
            color="secondary" 
            startIcon={<InfoOutlineIcon />}
        >
            Insight
        </Button>
    )
}

export default InfoButton;