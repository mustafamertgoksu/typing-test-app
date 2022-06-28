import { Container } from "./App.styled";
import Header from "./components/Header";
import Content from "./components/Content";
import { MainContext } from "./context";
import { useRef, useState } from "react";

function App() {
  const inputRef = useRef();
  const [disabledInput, setDisabledInput] = useState(true);
  const [char, setChar] = useState("");
  const [charIndex, setCharIndex] = useState(-1);
  const data = {
    inputRef,
    disabledInput,
    setDisabledInput,
    char,
    setChar,
    charIndex,
    setCharIndex,
  }
  return (
    <MainContext.Provider value={data}>
      <Container>
        <Header />
        <Content />
      </Container>
    </MainContext.Provider>
  );
}

export default App;
