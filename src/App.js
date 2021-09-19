import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

import Container from "@material-ui/core/Container";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Definations } from "./components/Definations/Definations";

function App() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");
  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
      setMeanings(data.data);
    } catch (error) {
      setMeanings([]);
    }
  };

  useEffect(() => {
    dictionaryApi();
  }, [word, category]);
  return (
    <div
      className="App"
      style={{ height: "100vh", backgroundColor: "#282c34", color: "white" }}
    >
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Header
          word={word}
          setWord={setWord}
          setCategory={setCategory}
          category={category}
          setMeanings={setMeanings}
        />
        {meanings.length > 0 && <Definations meanings={meanings} />}
      </Container>
    </div>
  );
}

export default App;
