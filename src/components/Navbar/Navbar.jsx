import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import BasicModal from '../Button/Feedbackform';
import { useState } from "react";

const Navbar = () => {
  const handleSearchChange = (event) => {

    console.log("Search", event.target.value);
  };

  // const handleButtonClick = () => {
    
  //   console.log("Button");
    
  // };
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <Link to = "/"><Logo /> </Link>

      <Search placeholder="Search a song of your choice" onChange={handleSearchChange} />


      <Button onClick={() => setOpen(true)}>Give Feedback</Button>
      

      <BasicModal open={open} onClose={() => setOpen(false)} />
    </nav>
  );
};

export default Navbar;
