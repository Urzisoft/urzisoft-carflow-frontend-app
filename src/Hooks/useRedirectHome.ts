import { useNavigate } from 'react-router-dom';
import { PageRoutes } from "../Utils/Routes";

export const useRedirectHome = () => {
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate(PageRoutes.HOME);
    };

    return {
        navigateHome
    };
};