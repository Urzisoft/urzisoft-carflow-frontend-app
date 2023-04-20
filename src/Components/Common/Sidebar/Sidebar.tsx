import { Navbar, SidebarContainer, MenuIconOpen, SidebarMenu, MenuIconClose, MenuItems, MenuItemLinks} from './Siderbar.css';
import { FC, useState } from 'react';
import * as FaIcons from 'react-icons/fa'
import { SidebarConfig } from "../../../Utils/SidebarConfig";

export const Sidebar: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const renderMenuItems = (shouldDisplayName?: boolean): JSX.Element[] => {
        return SidebarConfig.map((item, index) => {
            return (
                <MenuItems key={index}>
                    <MenuItemLinks to={item.path}>
                        {item.icon}
                        {shouldDisplayName && <span style={{ marginLeft: '16px' }}>{item.name}</span>}
                    </MenuItemLinks>
                </MenuItems>
            )
        })
    };

    return (
        <SidebarContainer>
            <Navbar>
                <MenuIconOpen to="#" onClick={toggle}>
                    <FaIcons.FaBars />
                </MenuIconOpen>
                {renderMenuItems()}
            </Navbar>
            <SidebarMenu isOpen={isOpen}>
                <MenuIconClose to="#" onClick={toggle}>
                    <FaIcons.FaTimes />
                </MenuIconClose>
                {renderMenuItems(true)}
            </SidebarMenu>
        </SidebarContainer>
    )
};