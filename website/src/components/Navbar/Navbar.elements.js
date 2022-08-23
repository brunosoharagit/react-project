import styled from "styled-components";
import { Container } from "../../GlobalStyles";
import { Link } from "react-router-dom";
import { FaMagento } from "react-icons/fa";

export const Nav = styled.ul`
    background: #212121;
    height: 80px;    
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
    transition: all 800ms ease-in-out;

    &:hover {
        color: #fff;
    }
`;

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;

    ${Container}
`;

export const NavLogo = styled(Link)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
`;

export const NavIcon = styled(FaMagento)`
    margin-right: 0.5rem;

`

