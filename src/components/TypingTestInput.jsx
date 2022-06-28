import { Input } from "./styles/TypingTestInput.styled";
import randomWords from 'random-words';
import { MainContext, useContext } from "../context";

function TypingTestInput({ words, setWords, correct, setCorrect, incorrect, setIncorrect, inputIndex, setInputIndex, numberWords, input, setInput }) {
  const { inputRef, disabledInput, setChar, charIndex, setCharIndex } = useContext(MainContext);

  const generateRandomWords = () => {
    return new Array(numberWords).fill(null).map(() => randomWords());
  }

  const keyDown = ({ keyCode, key }) => {
    if (keyCode === 32) {
      checkTrue();
      setInput('');
      setInputIndex(inputIndex + 1);
      setCharIndex(-1);
      if (inputIndex === numberWords - 1) {
        setWords(generateRandomWords());
        setInputIndex(0);
      }
    }
    else if (keyCode === 8) {
      setCharIndex(charIndex - 1);
      setChar("")
    }
    else {
      setCharIndex(charIndex + 1);
      setChar(key);
    }
  }
  const checkTrue = () => {
    const compareWord = words[inputIndex];
    if (compareWord === input.trim()) {
      setCorrect(correct + 1);
      // words letter by letter
    } else {
      setIncorrect(incorrect + 1);
    }
  }

  return (
    <>
      <Input ref={inputRef} disabled={disabledInput} type="text" onKeyDown={keyDown} value={input} onChange={(e) => setInput(e.target.value)} />
    </>
  )
}

export default TypingTestInput;