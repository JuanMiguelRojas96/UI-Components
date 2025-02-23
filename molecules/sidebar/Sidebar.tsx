import React from "react";
import {
  SidebarContainer,
  SidebarContent,
  SidebarLogo,
} from "./Sidebar.style";
import { Route } from "../../interfaces/route.interface";
/* @ts-ignore */
import Logo from "../../assets/images/Logo.svg";
import SideItems from "../../atoms/side-items/SideItems";

interface SidebarProps {
  routes: Route[];
}

const Sidebar = ({ routes }: SidebarProps) => {
  return (
    <SidebarContainer>
      <SidebarContent>
        <SidebarLogo src={Logo} />
        <SideItems routes={routes} />
      </SidebarContent>
    </SidebarContainer>
  );
};
export default Sidebar;
