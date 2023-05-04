import usePersistentState from './usePersistentState';
import { useAuth } from "./useAuth";

const useValidateUser = () => {
    const { isLoggedIn } = useAuth();
    const { store: token } = usePersistentState('token');

    const isUserValid = isLoggedIn && !!token;

    return {
        isUserValid,
        token
    };
};

export default useValidateUser;