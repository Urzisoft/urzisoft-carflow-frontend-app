import { createContext, FC, useContext, useEffect, useState } from 'react';
import { useRedirectDashboard } from "./useRedirectDashboard";
import usePersistentState, { removeStorage, setStorage } from "./usePersistentState";
import usePostCustomFetch from "./usePostCustomFetch";
import { AuthResponseType, CredentialsType } from "../Utils/Types";
import { requestUrls } from "../Backend/requestUrls";
import { useNavigate } from "react-router-dom";
import { PageRoutes } from "../Utils/Routes";

const useAuthService = () => {
    const navigate = useNavigate();
    const { set: setUsername } = usePersistentState('userName');
    const { set: setToken } = usePersistentState('token');
    const { set: setRoles } = usePersistentState('roles');
    const { store: isLoggedIn, set: setIsLoggedIn } = usePersistentState('loggedIn');
    const { store: tokenExpiration, set: setTokenExpiration } = usePersistentState('tokenExpiration');
    const {
        response: loginResponse,
        error: loginError,
        loading: loginLoading,
        fetcher: sendLoginPayload
    } = usePostCustomFetch<AuthResponseType, CredentialsType>(requestUrls.authLogin);

    const [directTokenAccess, setDirectTokenAccess] = useState<string>('');

    const logUserIn = (username: string, password: string) => {
        const payload = {
            username: username,
            password: password,
        };

        sendLoginPayload(payload);
    };

    const setAuthFields = (props?: AuthResponseType) => {
        setIsLoggedIn(!!props);
        setUsername(props ? props.username : '');
        setToken(props ? props.token : '');
        setDirectTokenAccess(props ? props.token : '');
        setTokenExpiration(props ? props.expiration : '');
        setRoles(props ? props.roles : '');
    };

    const logUserOut = async () => {
        removeStorage('token');
        removeStorage('tokenExpiration');
        removeStorage('roles');
        setStorage('loggedIn', false);
        navigate(PageRoutes.HOME);
    };

    useEffect(() => {
        if (tokenExpiration) {
            const currentTime = new Date().getTime();
            const tokenExpirationDate = new Date(tokenExpiration).getTime();

            if (currentTime >= tokenExpirationDate) {
                logUserOut().then();
            }
        }
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (loginResponse) {
            setAuthFields(loginResponse?.status ? undefined : loginResponse);

            if (loginResponse.roles[0] === 'Admin') {
                navigate(PageRoutes.ADMIN_DASHBOARD);
            } else {
                navigate(PageRoutes.DASHBOARD);
            }
        }
        // eslint-disable-next-line
    }, [loginError, loginResponse, loginLoading]);

    return {
        directTokenAccess,
        isLoggedIn,

        logUserIn,
        logUserOut,
        setIsLoggedIn
    };
};

const initialState = {
    directUserIdAccess: undefined,
    directTokenAccess: null,
    isLoggedIn: false,
    error: null,
    logUserIn: (user: string, pass: string) => undefined,
    logUserOut: () => undefined
};

export const AuthContext = createContext<ReturnType<typeof useAuthService> | typeof initialState>(initialState);

export const AuthProvider: FC<any> = ({ children }) => {
    const auth = useAuthService();

    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);