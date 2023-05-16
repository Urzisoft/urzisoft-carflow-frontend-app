import usePersistentState from './usePersistentState';
import { useAuth } from "./useAuth";

const useValidateUser = () => {
    const { isLoggedIn } = useAuth();
    const { store: token } = usePersistentState('token');
    const { store: username } = usePersistentState('userName');
    const { store: roles } = usePersistentState('roles');

    const isUserValid = isLoggedIn && !!token;

    return {
        isUserValid,
        token,
        username,
        roles,
    };
};

export default useValidateUser;