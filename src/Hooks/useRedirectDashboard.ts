import { useNavigate } from 'react-router-dom';
import { PageRoutes } from "../Utils/Routes";

export const useRedirectDashboard = () => {
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate(PageRoutes.DASHBOARD);
    };

    return {
        navigateHome
    };
};