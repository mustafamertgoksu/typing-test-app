import { StyledTypingTestWords, Span } from './styles/TypingTestWords.styled';
import { MainContext, useContext } from '../context';

function TypingTestWords({ words, inputIndex, countDownTimer }) {
  const {char, charIndex, wordsInputVisibility, setWordsInputVisibility } = useContext(MainContext);
  const getCharClass = (wordIdx,charIdx, letter) => {
      if(wordIdx === inputIndex && charIdx === charIndex && char && countDownTimer ) {
        if (letter === char) {
          return 'correct';
        } else {
          return 'wrong';
        }
      } else if (wordIdx === inputIndex && charIndex >= words[inputIndex].length) {
        return 'wrong';
      } else {
        return '';
      }
  }
  return (
    <>
      {wordsInputVisibility ? <StyledTypingTestWords>
      {words.map((word, index) => (
        <span key={index}>
          <Span>
            {word.split("").map((letter, i) => (
              <span className={getCharClass(index, i, letter)} key={i}>{letter}</span>
            ))}
          </Span>
          {/* Space for each word */}
          <div style={{ display: 'inline' }}> </div>
        </span>
      ))}
    </StyledTypingTestWords> 
    : 
    ''}
    </>
  )
}

export default TypingTestWords;