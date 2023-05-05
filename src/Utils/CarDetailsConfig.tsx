import { CarDetailsConfigType } from "./Types";
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';
import * as TbIcons from 'react-icons/tb';


export const CarDetailsConfig: CarDetailsConfigType[] = [
    {
        name: 'Year',
        value: '2019',
        icon: <FaIcons.FaCalendarAlt />
    },
    {
        name: 'Mileage',
        value: '120 000 km',
        icon: <FaIcons.FaTachometerAlt />
    },
    {
        name: 'Gearbox',
        value: 'Auto',
        icon: <GiIcons.GiGearStickPattern />
    },
    {
        name: 'Power',
        value: '575 HP',
        icon: <FaIcons.FaHorse />
    },
    {
        name: 'Engine Size',
        value: '5.0',
        icon: <TbIcons.TbEngine />
    },
    {
        name: 'Drive wheel',
        value: 'LEFT',
        icon: <GiIcons.GiSteeringWheel />
    },
    {
        name: 'License plate',
        value: 'POGEA',
        icon: <TbIcons.TbBadgeAr />
    },
    {
        name: 'Gas type',
        value: 'Diesel',
        icon: <FaIcons.FaGasPump />
    }
]