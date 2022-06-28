import styled from 'styled-components';

export const StyledHeader = styled.header`
  height: 100px;
  width: 100%;
  background-color: #444;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

export const HeaderTitle = styled.h1`
  font-size: 1.5rem;
  letter-spacing: 1.5px;
  color: #fff;
  font-family: 'Raleway', sans-serif;
`;

export const LinksContainer = styled.div`
  display: flex;
  font-size: 20px;
  background-color: #ffffff;
  color: #000;
  padding: 10px;
  transition: 300ms all;
  border-radius: 4px;
  @media (max-width: 1080px) {
    display: none;
  }
`;
export const Link = styled.a`
  margin: 0 10px;
  font-size: 18px;
  color: #000;
`;
