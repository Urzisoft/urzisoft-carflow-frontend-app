import usePersistentState from './usePersistentState';
import { useAuth } from "./useAuth";

const useValidateUser = () => {
    const { isLoggedIn } = useAuth();
    const { store: token } = usePersistentState('token');
    const { store: username } = usePersistentState('userName');

    const isUserValid = isLoggedIn && !!token;

    return {
        isUserValid,
        token,
        username,
    };
};

export default useValidateUser;