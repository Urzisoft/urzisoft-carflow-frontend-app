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
        path: PageRoutes.CAR_SERVICES,
        name: 'Car Services',
        icon: <FaIcons.FaTools />
    },
    {
        path: PageRoutes.CAR_WASH,
        name: 'Car Washes',
        icon: <FaIcons.FaShower />
    },
    {
        path: PageRoutes.ADD_CAR,
        name: 'Add a new Car',
        icon: <FaIcons.FaCar />
    },
    {
        path: PageRoutes.ADD_MODEL,
        name: 'Add a new Model',
        icon: <FaIcons.FaChessKing />
    },
    {
        path: PageRoutes.ADD_BRAND,
        name: 'Add a new Brand',
        icon: <FaIcons.FaChessQueen />
    },
    {
        path: PageRoutes.CHANGE_PASSWORD,
        name: 'Change Password',
        icon: <FaIcons.FaUserCheck />
    },
    {
        path: PageRoutes.LOGIN,
        name: 'Logout',
        icon: <FaIcons.FaCog />
    }
]