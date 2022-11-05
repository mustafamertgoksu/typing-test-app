import { StyledHeader, HeaderTitle, LinksContainer, Link } from "./styles/Header.styled";

function Header() {
    return (
        <StyledHeader>
            <HeaderTitle>
                typingtest
            </HeaderTitle>
            <LinksContainer>
                <Link target="_blank" href="https://github.com/mustafamertgoksu">GitHub</Link>
                <Link target="_blank" href="https://mustafamertgoksu.ml">My Blog</Link>
            </LinksContainer>
        </StyledHeader>
    )
}

export default Header;