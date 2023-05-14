import styled from "styled-components";
import { Colors } from "../../../Utils/cssMedia";
import { Link } from "react-router-dom";
import { Breakpoints, maxWidthQuery } from "../../../Utils/cssMedia";
export const SidebarContainer = styled.div`
    display: flex;
    position: fixed;
    z-index: 5;
    
    * {
      z-index: 2;
    }
    
 
`;

export const Navbar = styled.div<{ isOpen: boolean }>`
    justify-content: start;
    align-items: center;
    height: 100vh;
    background-color: transparent;
    position: fixed;

     ${({ isOpen }) =>
        isOpen
            ? `
            ${maxWidthQuery(Breakpoints.small)} {
            width:100%;
            }
      
    ` : 'background-color:transparent;'}
`;

export const MenuIconOpen = styled(Link)`
    position: fixed;
    top: 0;
    margin-top: 0.75rem;
    display: flex;
    justify-content: start;
    font-size: 1.5rem;
    margin-left: 1rem;
    color: ${Colors.white};
    padding: 1rem;
    background-color: black;
    border-radius: 0.4rem;
    ${maxWidthQuery(Breakpoints.small)} {
        margin-right: 2rem;
        justify-content: end;
    }
`;

export const MenuIconClose = styled(Link)`
    display: flex;
    justify-content: end;
    font-size: 1.5rem;
    margin-top: 0.75rem;
    margin-right: 0.75rem;
    color: ${Colors.white};
`;

export const SidebarMenu = styled.div<{ isOpen: boolean }>`
    width: 250px;
    height: 100vh;
    background-color: ${Colors.brightRed};
    position: fixed;
    top: 0;
    left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    transition: 0.2s;
    ${({ isOpen }) =>
        isOpen
            ? `
       ${maxWidthQuery(Breakpoints.small)} {
            width:100%;
    }
      
    `
            : ''}
`;

export const MenuItems = styled.li`
    list-style: none;
    display: flex;
    justify-content: start;
    width: 100%;
    height: 35px;
    padding: 1rem 0 1.25rem;
    ${maxWidthQuery(Breakpoints.small)} {
        justify-content: center;
        background-color: transparent;
        margin-left:-16px;
    }
`;

export const MenuItemLinks = styled(Link) <{ isOpen: boolean }>`
    display: flex;
    align-items: center;
    padding: 0 2rem;
    font-size: 20px;
    text-decoration: none;
    border-radius: 5px;
    color: ${Colors.white};
    transition: 0.2s;
    pointer-events:none;
    ${({ isOpen }) =>
        !isOpen
            ? `
      width:0;
      
    `
            : 'pointer-events: initial;'}
    
    &:hover {
        background-color: ${Colors.white};
        color: ${Colors.brightRed};
        width: 100%;
        height:auto;
        text-align: center;
        border-radius: 5px;
        
        transition: 0.2s;
    }
`;



