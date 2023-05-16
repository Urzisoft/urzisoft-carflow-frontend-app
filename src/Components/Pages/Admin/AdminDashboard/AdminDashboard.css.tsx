import styled from "styled-components";
import { Colors } from "../../../../Utils/cssMedia";
import { Link } from "react-router-dom";

export const AdminDashboardContainer = styled.div`
    padding: 3rem;
    background: ${Colors.carCardBlack};
    color: ${Colors.white};
`;

export const AdminSectionTitle = styled.h2``;

export const AdminSectionContainer = styled.div`
    
`;

export const AdminContainerItems = styled(Link)`
    padding: 0.5rem;
    text-decoration: none;
    color: ${Colors.white};
    transition: all 200ms ease;
  
    :hover {
      color: ${Colors.brightRed};
    }
`;

export const AdminBreaker = styled.div`
    background: ${Colors.white};
    width: 100%;
    margin-top: 3rem;
    margin-bottom: 4rem;
    height: 0.2rem;
`;

export const AdminPaddingLiner = styled.div`
    margin-left: 2rem;
`;

export const AdminButtonsBox = styled.div`
    display: flex;
    flex-direction: row;
`;

export const AdminContainerItem = styled.button`
    background: ${Colors.brightRed};
    padding: 0.7rem;
    border: none;
    border-radius: 0.3rem;
    color: ${Colors.white};
`;