import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Welcome } from "../Components/Pages/User/Welcome/Welcome";
import { Dashboard } from "../Components/Pages/User/Dashboard/Dashboard";
import { PageRoutes } from "../Utils/Routes";
import { Register } from "../Components/Pages/User/Register/Register";
import { Config } from "../Utils/Config";
import { welcomePageValues } from "../Utils/HardcodedConfigs";
import { Login } from "../Components/Pages/User/Login/Login";
import { Fuel } from "../Components/Pages/User/Fuel/Fuel";
import { ChangePassword } from "../Components/Pages/User/ChangePassword/ChangePassword";
import { CarWash } from "../Components/Pages/User/CarWash/CarWash";
import { PageNotFound } from "../Components/Pages/User/PageNotFound/PageNotFound";
import { CarDetails } from "../Components/Pages/User/CarDetails/CarDetails";
import { CarServices } from "../Components/Pages/User/CarServices/CarServices";
import { CityInfo } from "../Components/Pages/User/CityInfo/CityInfo";
import { AddCar } from "../Components/Pages/User/Addings/AddCar";
import { AddModel } from "../Components/Pages/User/Addings/AddModel";
import { AddBrand } from "../Components/Pages/User/Addings/AddBrand";

export const RoutesMapping: FC = () => {
    const config = Config.getInstance();
    config.WelcomePageConfig = welcomePageValues;

    const pageRoutes = [
        { path: PageRoutes.HOME, component: <Welcome config={config.WelcomePageConfig} /> },
        { path: PageRoutes.DASHBOARD, component: <Dashboard /> },
        { path: PageRoutes.REGISTER, component: <Register />},
        { path: PageRoutes.LOGIN,component: <Login />},
        { path: PageRoutes.FUEL,component: <Fuel />},
        { path: PageRoutes.CHANGE_PASSWORD, component: <ChangePassword/>},
        { path: PageRoutes.CAR_WASH, component: <CarWash/>},
        { path: PageRoutes.CAR_DETAILS, component: <CarDetails /> },
        { path: PageRoutes.CAR_SERVICES, component: <CarServices /> },
        { path: PageRoutes.CITY_INFO, component: <CityInfo /> },
        { path: PageRoutes.ADD_CAR, component: <AddCar /> },
        { path: PageRoutes.ADD_MODEL, component: <AddModel /> },
        { path: PageRoutes.ADD_BRAND, component: <AddBrand /> },
        { path: PageRoutes.PAGE_NOT_FOUND, component: <PageNotFound /> },
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
