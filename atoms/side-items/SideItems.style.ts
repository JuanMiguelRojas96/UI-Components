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
    background-color: var(--secondary-gray);
    `}
`;

export const NavItemLogo = styled.div<{ isActive?: boolean }>`
  path {
    fill: ${({ isActive }) => (isActive ? 'var(--primary-white)' : 'var(--primary-orange)')};
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
    box-shadow: 0px 0px 24px var(--primary-orange);
    background-color: var(--primary-orange);
  `}

  &:hover {
    background-color: var(--primary-orange);
    box-shadow: 0px 0px 24px var(--primary-orange);
    path {
      fill: var(--primary-white);
    }
  }
`;