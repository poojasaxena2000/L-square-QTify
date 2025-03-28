import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  
};

const BasicModal = ({ open, onClose}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography id="title" variant="h4" >
          Feedback
        </Typography>
        <Typography id="formdescp" sx={{ mt: 2 ,}}>
          <form >
              <input type="text" name="name"  style={{border: "2px solid rgba(52, 201, 75, 1)"}}
              placeholder="Full name"/>
        
          </form>
         

          <form>
            <label>
             
              <input type="text" name="name" style={{border: "2px solid rgba(52, 201, 75, 1)"}} 
              placeholder="Email ID"/>
            </label>
          </form>

          <form>
            <label>
            
              <input type="text" name="name" style={{border: "2px solid rgba(52, 201, 75, 1)"}}
              placeholder="Subject"/>
            </label>
          </form>

          <form>
            <label>
             
              <input type="text" name="name" style={{border: "2px solid rgba(52, 201, 75, 1)"}}
              placeholder="Description"/>
            </label>
          </form>
        </Typography>
        <button style={{backgroundColor: " rgba(52, 201, 75, 1)", color: "white", border: "1px solid rgba(52, 201, 75, 1)", borderRadius:"12px"}}> Submit Feedback</button>
      </Box>
    </Modal>
  );
};

export default BasicModal;
