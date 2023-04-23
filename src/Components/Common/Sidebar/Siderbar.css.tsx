import styled from "styled-components";
import { Colors } from "../../../Utils/cssMedia";
import { Link } from 'react-router-dom'

export const SidebarContainer = styled.div`
    display:flex;
`;

export const Navbar = styled.div`
    justify-content: start;
    align-items: center;
    height: 100vh;
    background-color: ${Colors.backgroundColor};
    position: fixed;
`;

export const MenuIconOpen = styled(Link)`
    margin-top: 0.75rem;
    display: flex;
    justify-content: start;
    font-size: 1.5rem;
    margin-left: 2rem;
    color: ${Colors.textsColor};
`;

export const MenuIconClose = styled(Link)`
    display: flex;
    justify-content: end;
    font-size: 1.5rem;
    margin-top: 0.75rem;
    margin-right: 0.75rem;
    color: ${Colors.textsColor};
`;

export const SidebarMenu = styled.div<{ isOpen: boolean }>`
    width: 250px;
    height: 100vh;
    background-color:  ${Colors.backgroundColor};
    position: fixed;
    top: 0;
    left: ${({ isOpen }) => isOpen ? '0' : '-100%'};
    transition: .2s;
`;

export const MenuItems = styled.li`
    list-style: none;
    display: flex;
    justify-content: start;
    width: 100%;
    height: 45px;
    padding: 1rem 0 1.25rem;
`;

export const MenuItemLinks = styled(Link)`
    display: flex;
    align-items: center;
    padding: 0 2rem;
    font-size: 20px;
    text-decoration: none;
    border-radius: 5px;
    color: ${Colors.textsColor};
    transition: .2s;
  
    &:hover {
        background-color: ${Colors.buttonBackgroundHoverState};
        color: ${Colors.buttonIconHoverState};
        width: 100%;
        height: 45px;
        text-align: center;
        border-radius: 5px;
        padding: 0 3rem;
        transition: .2s;
    }
`;