import React from 'react';
import { Sidebar } from "./Components/Common/Sidebar/Sidebar"
import { RoutesMapping } from "./Routes/RoutesMapping";

const Application = () => {
    return (
        <>
            <Sidebar />
            <RoutesMapping />
        </>
    );
}

export default Application;
