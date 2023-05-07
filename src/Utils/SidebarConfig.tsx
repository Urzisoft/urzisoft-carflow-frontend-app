import * as FaIcons from 'react-icons/fa'
import { PageRoutes } from "./Routes";
import { SideBarConfigType } from "./Types";

export const SidebarConfig: SideBarConfigType[] = [
    {
        path: PageRoutes.DASHBOARD,
        name: 'Dashboard',
        icon: <FaIcons.FaTh />
    },
    {
        path: PageRoutes.FUEL,
        name: 'Gas Stations',
        icon: <FaIcons.FaGasPump />
    },
    {
        path: PageRoutes.HOME,
        name: 'Car Services',
        icon: <FaIcons.FaWrench />
    },
    {
        path: PageRoutes.CAR_WASH,
        name: 'Car Washes',
        icon: <FaIcons.FaShower />
    },
    {
        path: PageRoutes.HOME,
        name: 'Settings',
        icon: <FaIcons.FaTools />
    },
    {
        path: PageRoutes.LOGIN,
        name: 'Logout',
        icon: <FaIcons.FaCog />
    }
]