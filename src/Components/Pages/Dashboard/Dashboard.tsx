import { FC } from "react";
import { Sidebar } from "../../Common/Sidebar/Sidebar";
import { DashboardContainer } from "./Dashboard.css";

export const Dashboard: FC = () => {
    return (
        <>
            <Sidebar />
            <DashboardContainer>
                Dashboard
            </DashboardContainer>
        </>
    )
}