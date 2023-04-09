import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Welcome } from "../Components/Pages/Welcome/Welcome";
import { Dashboard } from "../Components/Pages/Dashboard/Dashboard";
import { PageRoutes } from "../Utils/Routes";
import { Register} from "../Components/Pages/Register/Register";

const pageRoutes = [
    { path: PageRoutes.HOME, component: <Welcome /> },
    { path: PageRoutes.DASHBOARD, component: <Dashboard /> },
    { path: PageRoutes.REGISTER, component: <Register />},
];

export const RoutesMapping: FC = () => {
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