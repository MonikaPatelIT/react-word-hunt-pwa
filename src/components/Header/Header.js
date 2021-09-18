import {
  createMuiTheme,
  TextField,
  ThemeProvider,
  MenuItem,
} from "@material-ui/core";
import React from "react";
import styles from "./Header.module.css";

const theme = createMuiTheme({
  palette: { type: "dark", primary: { main: "#fff" } },
});

export const Header = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
    // setCategory(e.target.value);
    // setWord("");
    // setMeanings([]);
  };

  const handleText = (text) => {
    console.log(text);
    // setWord(text);
  };

  return (
    <div className={styles.header}>
      <p className={styles.title}>Word hunt</p>
      <div className={styles.inputs}>
        <ThemeProvider theme={theme}>
          <TextField
            className="search"
            id="filled-basic"
            // value={word}
            label="Search a Word"
            onChange={(e) => handleText(e.target.value)}
          />
          <TextField
            select
            label="Language"
            // value={category}
            onChange={(e) => handleChange(e)}
            className="select"
          >
            {/* {countries.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))} */}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};
