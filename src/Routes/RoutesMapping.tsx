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
import { AdminDashboard } from "../Components/Pages/Admin/AdminDashboard/AdminDashboard";
import { AdminBrand } from "../Components/Pages/Admin/DetailPages/AdminBrands/AdminBrand";
import { AdminModel } from "../Components/Pages/Admin/DetailPages/AdminModel/AdminModel";
import { AdminCarService } from "../Components/Pages/Admin/DetailPages/AdminCarService/AdminCarService";
import { AdminCarWashService } from "../Components/Pages/Admin/DetailPages/AdminCarWashService/AdminCarWashService";
import { AdminCity } from "../Components/Pages/Admin/DetailPages/AdminCity/AdminCity";
import { AdminFuel } from "../Components/Pages/Admin/DetailPages/AdminFuel/AdminFuel";
import { AdminGasStation } from "../Components/Pages/Admin/DetailPages/AdminGasStation/AdminGasStation";
import { AddAdminBrand } from "../Components/Pages/Admin/DetailPages/AdminBrands/AddAdminBrand";
import { AddAdminModel } from "../Components/Pages/Admin/DetailPages/AdminModel/AddAdminModel";
import { AddAdminCarService } from "../Components/Pages/Admin/DetailPages/AdminCarService/AddAdminCarService";
import {
    AddAdminCarWashStations
} from "../Components/Pages/Admin/DetailPages/AdminCarWashService/AddAdminCarWashStations";

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
        { path: PageRoutes.ADMIN_DASHBOARD, component: <AdminDashboard /> },
        { path: PageRoutes.ADMIN_BRANDS, component: <AdminBrand /> },
        { path: PageRoutes.ADD_ADMIN_BRANDS, component: <AddAdminBrand /> },
        { path: PageRoutes.ADMIN_MODELS, component: <AdminModel /> },
        { path: PageRoutes.ADD_ADMIN_MODELS, component: <AddAdminModel /> },
        { path: PageRoutes.ADMIN_CAR_SERVICES, component: <AdminCarService /> },
        { path: PageRoutes.ADD_ADMIN_CAR_SERVICES, component: <AddAdminCarService /> },
        { path: PageRoutes.ADMIN_CAR_WASH_SERVICES, component: <AdminCarWashService /> },
        { path: PageRoutes.ADD_ADMIN_CAR_WASH_SERVICES, component: <AddAdminCarWashStations /> },
        { path: PageRoutes.ADMIN_CITIES, component: <AdminCity /> },
        { path: PageRoutes.ADMIN_FUEL, component: <AdminFuel /> },
        { path: PageRoutes.ADMIN_GAS_STATION, component: <AdminGasStation /> },
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
