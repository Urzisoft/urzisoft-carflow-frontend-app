import styled from "styled-components";
import { Colors } from "../../../Utils/cssMedia";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.div`
    display: flex;
    position: relative;
    z-index: 5;
  
    * {
      z-index: 2;
    }
`;

export const Navbar = styled.div`
    justify-content: start;
    align-items: center;
    height: 100vh;
    position: fixed;
`;

export const MenuIconOpen = styled(Link)`
    padding: 1rem;
    display: flex;
    justify-content: start;
    font-size: 2rem;
    color: ${Colors.black};
    background: ${Colors.white};
    border-radius: 25%;
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
`;

export const MenuItems = styled.li`
    list-style: none;
    display: flex;
    justify-content: start;
    width: 100%;
    height: 35px;
    padding: 1rem 0 1.25rem;
`;

export const MenuItemLinks = styled(Link)<{ isActive?: boolean }>`
    display: flex;
    align-items: center;
    padding: 2rem;
    font-size: 20px;
    text-decoration: none;
    border-radius: 5px;
    color: ${(props) => props.isActive ? Colors.brightRed : Colors.white};
    ${(props) => props.isActive ? `background-color: ${Colors.white};` : 'none'};
    transition: 0.2s;
    width: 100%;
  
    &:hover {
        background-color: ${Colors.white};
        color: ${Colors.brightRed};
        width: 100%;
        transition: 0.2s;
    }
`;
