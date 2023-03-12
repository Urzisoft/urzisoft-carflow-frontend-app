import { FC } from "react";
import { Route } from "react-router-dom";
import { Welcome } from "../Components/Pages/Welcome/Welcome";
import { Dashboard } from "../Components/Pages/Dashboard/Dashboard";
import { PageRoutes } from "../Utils/Routes";

const pageRoutes = [
    { path: PageRoutes.HOME, component: <Welcome /> },
    { path: PageRoutes.DASHBOARD, component: <Dashboard /> }
];

export const RoutesMapping: FC = () => {
    return (
        <>
            {pageRoutes.map((route) => {
                return (
                    <Route
                        key={route.path}
                        path={route.path}
                        component={route.component}
                    />
                )
            })}
        </>
    )
}