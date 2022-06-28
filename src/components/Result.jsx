import { StyledResult } from "./styles/Result.styled";

function Result({ correct, setCorrect, incorrect, setIncorrect }) {
  const fullWords = correct + incorrect;
  return (
    <StyledResult>
      <div id="correct">Correct Words: {correct}</div>
      <div id="incorrect">Incorrect Words: {incorrect}</div>
      <div id="full-words">Full Words: {fullWords}</div>
      <div>Accuaracy: {fullWords !== 0 ? Math.round((correct / (correct + incorrect)) * 100) + '%' : <p></p>}</div>
    </StyledResult>
  )
}

export default Result;