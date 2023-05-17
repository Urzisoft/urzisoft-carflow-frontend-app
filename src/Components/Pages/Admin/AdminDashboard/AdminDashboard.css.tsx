import styled from "styled-components";
import { Colors } from "../../../../Utils/cssMedia";

export const AdminDashboardContainer = styled.div`
    padding: 3rem;
    background: ${Colors.carCardBlack};
    color: ${Colors.white};
    min-height: 100vh;
`;

export const AdminSectionTitle = styled.h2``;

export const AdminSectionContainer = styled.div`
    
`;

export const AdminContainerItems = styled.div`
    padding: 0.5rem;
    text-decoration: none;
    color: ${Colors.white};
    transition: all 200ms ease;
    cursor: pointer;
  
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

export const AdminFormContainer = styled.div`
    width: 30%;
    margin-top: 10rem;
`;

export const AdminFormDashboard = styled.div`
    display: flex;
    justify-content: center; 
  
    button {
        margin-left: 1rem;
    }
`;

export const ExtraFormContainer = styled.div`
    min-height: 100vh;
    background: ${Colors.carCardBlack};
    text-align: center;
  
    h2 {
        color: ${Colors.white};
    }
`;

export const AdminPadding = styled.div`
    padding: 5rem;
`;
