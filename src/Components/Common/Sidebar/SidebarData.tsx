import * as FaIcons from 'react-icons/fa'
import { PageRoutes } from "../../../Utils/Routes";

export const SidebarData = [
    {
        path: PageRoutes.DASHBOARD,
        name: "Dashboard",
        icon: <FaIcons.FaTh />
    },
    {
        path: "/",
        name: "User",
        icon: <FaIcons.FaUserAlt />
    },
    {
        path: "/",
        name: "Analytics",
        icon: <FaIcons.FaRegChartBar />
    },
    {
        path: "/",
        name: "Ad: Curse cu scaunu cu rotile",
        icon: <FaIcons.FaAccessibleIcon />
    },
    {
        path: "/",
        name: "My cars",
        icon: <FaIcons.FaCar />
    },
    {
        path: "/",
        name: "Gas Stations",
        icon: <FaIcons.FaGasPump />
    },
    {
        path: "/",
        name: "Car Services",
        icon: <FaIcons.FaWrench />
    },
    {
        path: PageRoutes.CARWASHES,
        name: "Car Washes",
        icon: <FaIcons.FaShower />
    },
    {
        path: "/",
        name: "Settings",
        icon: <FaIcons.FaCog />
    }
]