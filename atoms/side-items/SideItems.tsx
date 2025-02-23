import React from "react";
import { useLocation, useNavigate } from "react-router";
import { Route } from "../../interfaces/route.interface";
import {
  NavItem,
  NavItemLogo,
  NavItemWrapper,
  SideItem,
} from "./SideItems.style";

interface SideItemProps {
  routes: Route[];
}

const SideItems = ({ routes }: SideItemProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {routes.map((route) => {
        const isActive = location.pathname === route.path;
        return (
          <SideItem
            key={route.path}
            onClick={() => navigate(route.path)}
          >
            <NavItem
              isActive={location.pathname === route.path}
            >
              <NavItemWrapper isActive={isActive}>
                <NavItemLogo isActive={isActive}>
                  <route.icon />
                </NavItemLogo>
              </NavItemWrapper>
            </NavItem>
          </SideItem>
        );
      })}
    </>
  );
};

export default SideItems;
