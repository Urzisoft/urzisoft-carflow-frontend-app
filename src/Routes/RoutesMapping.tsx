import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Welcome } from "../Components/Pages/Welcome/Welcome";
import { Dashboard } from "../Components/Pages/Dashboard/Dashboard";
import { PageRoutes } from "../Utils/Routes";
import { Register } from "../Components/Pages/Register/Register";
import { Config } from "../Utils/Config";
import { welcomePageValues } from "../Utils/HardcodedConfigs";
import { Login } from "../Components/Pages/Login/Login";
import { Fuel } from "../Components/Pages/Fuel/Fuel";
import { ChangePassword } from "../Components/Pages/ChangePassword/ChangePassword";
import { CarDetails } from "../Components/Pages/CarDetails/CarDetails";

export const RoutesMapping: FC = () => {
    const config = Config.getInstance();
    config.WelcomePageConfig = welcomePageValues;

    const pageRoutes = [
        { path: PageRoutes.HOME, component: <Welcome config={config.WelcomePageConfig} /> },
        { path: PageRoutes.DASHBOARD, component: <Dashboard /> },
        { path: PageRoutes.REGISTER, component: <Register />},
        { path: PageRoutes.LOGIN,component: <Login />},
        { path: PageRoutes.FUEL,component: <Fuel />},
        { path: PageRoutes.LOGIN, component: <Login />},
        { path: PageRoutes.CHANGE_PASSWORD, component: <ChangePassword /> },
        { path: PageRoutes.CAR_DETAILS, component: <CarDetails /> }
    ];

    return (
        <Routes>
            {pageRoutes.map((route) => {
                return (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.component}
                    />
                )
            })}
        </Routes>
    )
}