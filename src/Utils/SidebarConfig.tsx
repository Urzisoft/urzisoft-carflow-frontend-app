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
        path: PageRoutes.HOME,
        name: 'User',
        icon: <FaIcons.FaUserAlt />
    },
    {
        path: PageRoutes.HOME,
        name: 'Analytics',
        icon: <FaIcons.FaRegChartBar />
    },
    {
        path: PageRoutes.HOME,
        name: 'My cars',
        icon: <FaIcons.FaCar />
    },
    {
        path: PageRoutes.HOME,
        name: 'Gas Stations',
        icon: <FaIcons.FaGasPump />
    },
    {
        path: PageRoutes.HOME,
        name: 'Car Services',
        icon: <FaIcons.FaWrench />
    },
    {
        path: PageRoutes.HOME,
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