import faqImg from '../../assets/faq1.png'
import './FAQ.css'
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

export default function FAQ() {
    return (
        <div className="faq py-4">

            <p style={{ color: '#2AA7FF', fontWeight: '600', textAlign: 'center' }}>Get Your Answer</p>
            <h1 style={{ color: '#1B3C74', textAlign: 'center' }}>Frequently Asked Questions</h1>

            <div className="container d-flex justify-content-between align-items-center py-4">
                <div style={{ width: "100%" }}>
                    <img style={{ width: '100%' }} src={faqImg} alt="img" />
                </div>

                <div className=''>
                    <Accordion sx={{ boxShadow: 'none', marginTop: '1rem' }}>
                        <AccordionSummary
                            expandIcon={<AddIcon sx={{ fontWeight: '600', color: '#2AA7FF' }} />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography sx={{ fontWeight: '600', color: '#1B3C74' }} component="span">Why choose our medical for your family?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </AccordionDetails>
                    </Accordion>

                    <Accordion sx={{ boxShadow: 'none', marginTop: '1rem' }}>
                        <AccordionSummary
                            expandIcon={<AddIcon sx={{ fontWeight: '600', color: '#2AA7FF' }} />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography sx={{ fontWeight: '600', color: '#1B3C74' }} component="span">Why we are different from others?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </AccordionDetails>
                    </Accordion>

                    <Accordion sx={{ boxShadow: 'none', marginTop: '1rem' }}>
                        <AccordionSummary
                            expandIcon={<AddIcon sx={{ fontWeight: '600', color: '#2AA7FF' }} />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography sx={{ fontWeight: '600', color: '#1B3C74' }} component="span">Trusted & experience senior care & love</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </AccordionDetails>
                    </Accordion>

                    <Accordion sx={{ boxShadow: 'none', marginTop: '1rem' }}>
                        <AccordionSummary
                            expandIcon={<AddIcon sx={{ fontWeight: '600', color: '#2AA7FF' }} />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography sx={{ fontWeight: '600', color: '#1B3C74' }} component="span">How to get appointment for emergency</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </AccordionDetails>
                    </Accordion>




                </div>

            </div>



        </div>
    )
}