import { Navbar, SidebarContainer, MenuIconOpen, SidebarMenu, MenuIconClose, MenuItems, MenuItemLinks} from './Siderbar.css';
import { FC, useState } from 'react';
import { SidebarData } from './SidebarData';
import * as FaIcons from 'react-icons/fa'

export const Sidebar: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    
    return (
        <SidebarContainer>
            <Navbar>
                <MenuIconOpen to="#" onClick={toggle}>
                    <FaIcons.FaBars />
                </MenuIconOpen>
                {SidebarData.map((item, index) => {
                    return (
                        <MenuItems key={index}>
                            <MenuItemLinks to={item.path}>
                                {item.icon}
                            </MenuItemLinks>
                        </MenuItems>
                    )
                })}
            </Navbar>

            <SidebarMenu isOpen={isOpen}>
                <MenuIconClose to="#" onClick={toggle}>
                    <FaIcons.FaTimes />
                </MenuIconClose>

                {SidebarData.map((item, index) => {
                    return (
                        <MenuItems key={index}>
                            <MenuItemLinks to={item.path}>
                                {item.icon}
                                <span style={{ marginLeft: '16px' }}>{item.name}</span>
                            </MenuItemLinks>
                        </MenuItems>
                    )
                })}
            </SidebarMenu>
        </SidebarContainer>
    )
};