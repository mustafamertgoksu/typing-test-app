import styled from 'styled-components';

export const StyledResult = styled.div`
  width: 50%;
  height: 40%;
  background-color: #eeeeee;
  margin-top: 20px;
  justify-content: space-around;
  padding: 2rem 1.2rem;
  border-radius: 10px;
  font-size: 2rem;
  @media (max-width: 1080px) {
    width: 85%;
    padding: 2rem;
  }
  #correct {
    color: green;
  }
  #incorrect {
    color: red;
  }
  #full-words {
    color: blue;
  }
`;
