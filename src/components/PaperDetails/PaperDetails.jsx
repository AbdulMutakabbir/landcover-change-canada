import Box from '@mui/material/Box';
import SectionBox from '../SectionBox/SectionBox';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArticleIcon from '@mui/icons-material/Article';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Accordion, AccordionDetails, AccordionSummary, Button, Link, TextField, Typography } from '@mui/material';

const PaperDetails = () => {
    return (
        <SectionBox
        >
            <Typography
                variant = 'h1'
                p = {10}
                align = 'center'
            >
                Vegetation Land Cover and 
                <br/>
                Forest Fires in Canada:
                <br/>
                An Analytical Data Visualization
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    flexWrap: 'wrap',
                }}
            >
                <Link href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=11126752" underline="none">
                    <Button
                        variant="outlined"
                        color="secondary"
                        startIcon={<PictureAsPdfIcon />}
                    >
                        PDf
                    </Button>
                </Link>

                <Link href="https://ieeexplore.ieee.org/abstract/document/11126752" underline="none">
                    <Button
                        variant="outlined"
                        color="secondary"
                        startIcon={<ArticleIcon />}
                    >
                        Paper
                    </Button>
                </Link>

                <Link href="https://github.com/Forest-Fire-Research/vegetation-land-cover-canada" underline="none">
                    <Button
                        variant="outlined"
                        color="secondary"
                        startIcon={<GitHubIcon />}
                        >
                        GitHub
                    </Button>
                </Link>
            </Box>
            <Box
                p = {3}
            >
                <Accordion
                    defaultExpanded
                >
                    <AccordionSummary
                        expandIcon={<ArrowUpwardIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography component="span">Acknowledgements</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        color="warning"
                    >
                        <Typography>
                            We would like to acknowledge our participation in the GeoIgnite 2025 NRCan Canada Centre for Mapping and Earth Observation (CCMEO) GEO.ca Hackathon. 
                            <br/>
                            This is a collaborative research conducted by the University of Waterloo, Dalhousie University, and Carleton University. 
                            <br/>
                            This research was funded by NSERC Canada and industrial partners (Cistel Technology and Hegyi Geomatics). 
                            <br/>
                            We wish to thank Natural Resources Canada (NRCan) for providing the data. 
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    defaultExpanded
                >
                    <AccordionSummary
                        expandIcon={<ArrowUpwardIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography component="span">Citation/Reference</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        color="warning"
                    >
                        <Typography
                            variant='body2'
                        >
                            @INPROCEEDINGS&#123;11126752,
                        </Typography>
                        <Typography
                            variant='body2'
                        >
                            author=&#123;Mutakabbir, Abdul and Lung, Chung-Horng and Zaman, Marzia and Naik, Kshirasagar and Purcell, Richard and Sampalli, Srinivas and Ravichandran, Thambirajah&#125;,
                        </Typography>
                        <Typography
                            variant='body2'
                        >
                            booktitle=&#123;2025 IEEE 49th Annual Computers, Software, and Applications Conference (COMPSAC)&#125;, 
                        </Typography>
                        <Typography
                            variant='body2'
                        >
                            title=&#123;Vegetation Land Cover and Forest Fires in Canada: An Analytical Data Visualization&#125;, 
                        </Typography>
                        <Typography
                            variant='body2'
                        >
                            year=&#123;2025&#125;,
                        </Typography>
                        <Typography
                            variant='body2'
                        >
                            pages=&#123;411-420&#125;,
                        </Typography>
                        <Typography
                            variant='body2'
                        >
                            doi=&#123;10.1109/COMPSAC65507.2025.00061&#125;&#125;
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            </Box>
        </SectionBox>
    )
}

export default PaperDetails;