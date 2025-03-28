import React, { useEffect, useState } from "react";
import axios from "axios";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from './faqs.module.css';

const Faqlist = () => {
  const [faqlist, setFaqlist] = useState([]);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const res = await axios.get("https://qtify-backend-labs.crio.do/faq");
        //console.log(res)
        setFaqlist(res.data.data);
      } catch (error) {
        console.error("Error fetching faq list:", error);
      }
    };
    fetchFAQs();
  }, []);

  return (
    <div className= {styles.faqbox}>
      <h1 style={{ color: "white" }}>FAQs</h1>
      {faqlist.length > 0 ? (
        faqlist.map((faq, index) => (
          <Accordion
            key={index}
            style={{
              backgroundColor: "black",
              color: "white",
              borderBlock: "1px solid rgb(255,255,255)",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon style={{ color: "rgba(52, 201, 75, 1)" }} />
              }
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography
                component="span"
                sx={{ textAlign: "left !important", display: "block" }}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>{faq.answer}</AccordionDetails>
          </Accordion>
        ))
      ) : (
        <p>loading</p>
      )}
    </div>
  );
};

export default Faqlist;
