import styled from 'styled-components';

export const StyledTypingTestWords = styled.div`
  height: 15%;
  width: 60%;
  border: 1px solid #fff;
  background-color: #eee;
  padding: 20px;
  border-radius: 10px;
  margin-top: 1rem;
  @media (max-width: 1080px) {
    width: 80%;
  }
`;

export const Span = styled.span`
  color: #222;
  span {
    font-size: 1.5rem;
    &.correct {
      background-color: darkgreen;
      color: #fff;
    }
    &.wrong {
      background-color: darkred;
      color: #fff;
    }
  }
`;
