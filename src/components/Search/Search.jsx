import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Search.module.css";
import SearchIcon from "../../assets/search-icon.svg";

function Search({ placeholder }) {
  const navigate = useNavigate();

  const onSubmit = (e, value) => {
    e.preventDefault();
    console.log(value);
    navigate(`/album/${value.slug}`);
    //Process form data, call API, set state etc.
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={(e) => onSubmit(e)} className={styles.form}>
        <input
          name="album"
          placeholder={placeholder}
          required
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          <img src={SearchIcon} alt="Search Icon" />
        </button>
      </form>
    </div>
  );
}

export default Search;