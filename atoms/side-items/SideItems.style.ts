import styled from "@emotion/styled";


export const SideItem = styled.nav`
  display: flex;
  width: 100%;
  height: 102px;
  flex-direction: column;
  align-items: flex-end;
`;

export const NavItem = styled.div<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 102px;
  width: 100%;
  margin-left: 12px;
  border-radius: 20px 0 0 20px;
  cursor: pointer;
  ${({ isActive }) =>
    isActive &&
    `
    background-color: #252836;
    `}
`;

export const NavItemLogo = styled.div<{ isActive?: boolean }>`
  path {
    fill: ${({ isActive }) => (isActive ? "#fff" : "#EA7C69")};
  }
  `;

export const NavItemWrapper = styled.div<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  width: 56px;
  border-radius: 8px;
  ${({ isActive }) =>
    isActive &&
  `
    box-shadow: 0px 0px 24px #ea7c69;
    background-color: #EA7C69;
  `}

  &:hover {
    background-color: #EA7C69;
    box-shadow: 0px 8px 24px #ea7c69;
    path {
      fill: #fff;
    }
  }
`;