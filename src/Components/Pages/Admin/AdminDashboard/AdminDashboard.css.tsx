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
    transition: all 500ms ease;
  
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