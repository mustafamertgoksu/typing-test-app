import { useState, useEffect } from "react";
import { StyledContent, Description, Button, Title } from "./styles/Content.styled"
import randomWords from 'random-words';
import TypingTestWords from "./TypingTestWords";
import TypingTestInput from "./TypingTestInput";
import Result from "./Result";
import { MainContext, useContext } from "../context";

function Content() {
  const { inputRef, setDisabledInput, setChar, setCharIndex, wordsInputVisibility, setWordsInputVisibility } = useContext(MainContext);
  const number_words = 11;
  const [input, setInput] = useState('');
  const [words, setWords] = useState([]);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [inputIndex, setInputIndex] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const generateRandomWords = () => {
    return new Array(number_words).fill(null).map(() => randomWords());
  }
  /* Count */
  useEffect(() => {
    inputRef.current.focus();
  })
  const second = 60;
  const [countDown, setCountDown] = useState(second);
  const countDownTimer = () => {
    setDisabledInput(false);
    setButtonDisabled(true);
    setCorrect(0);
    setIncorrect(0);
    setWords(generateRandomWords);
    setWordsInputVisibility(true);
    var interval = setInterval(() => {
      setCountDown(prevCountDown => {
        if (prevCountDown === 0) {
          setCountDown(second);
          clearInterval(interval);
          setWords([])
          setDisabledInput(true)
          setButtonDisabled(false);
          setInput('');
          setCharIndex(-1);
          setChar("");
          setInputIndex(0);
          setWordsInputVisibility(false);
        } else {
          return prevCountDown - 1;
        }
      });
    }, 1000);
  }

  return (
    <StyledContent>
      <Description>How many words can you write in one minute</Description>
      <TypingTestWords
        inputIndex={inputIndex}
        setInputIndex={setInputIndex}
        words={words}
        countDownTimer={countDownTimer}
      />
      <TypingTestInput
        correct={correct}
        setCorrect={setCorrect}
        incorrect={incorrect}
        setIncorrect={setIncorrect}
        words={words}
        setWords={setWords}
        inputIndex={inputIndex}
        setInputIndex={setInputIndex}
        numberWords={number_words}
        input={input}
        setInput={setInput}
      />
      <div style={{ display: 'flex', width: '60%', justifyContent: 'space-between' }}>
        <Title>{countDown}</Title>
        <Button disabled={buttonDisabled} onClick={countDownTimer}>Start</Button>
      </div>
      <Result correct={correct} setCorrect={setCorrect} incorrect={incorrect} setIncorrect={setIncorrect} />
    </StyledContent>
  )
}

export default Content;

