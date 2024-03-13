'use client';

import { Drawer, DrawerProps, styled, SxProps, Theme } from '@mui/material';

import { MenuItemProps, MenuItem } from './MenuItem';

interface Props {
  drawerWidth: number;
  menuItems: {
    primary: MenuItemProps[];
    secondary: MenuItemProps[];
  };
}

interface StyledDrawerProps extends DrawerProps {
  width?: number | string;
  sx?: SxProps<Theme>;
}

const StyledDrawer = styled(Drawer)<StyledDrawerProps>`
  width: ${({ width }) => width + '%'};
  & .MuiDrawer-paper {
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.palette.surfaceContainerLow.main};
    width: ${({ width }) => width + '%'};
    border: none;
    border-radius: 1rem;
    top: 9%;
    height: 91%;
    padding: 0.375rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const NavigationDrawer = ({ drawerWidth, menuItems }: Props) => {
  return (
    <StyledDrawer width={drawerWidth} variant="permanent" open>
      <Drawer variant="permanent" anchor="left">
        {menuItems?.primary && (
          <div>
            {menuItems?.primary?.map((item, index) => (
              <MenuItem key={index} menuItem={item} />
            ))}
          </div>
        )}
        {menuItems?.secondary && (
          <div className="flex flex-col items-center">
            {menuItems.secondary?.map((item, index) => (
              <MenuItem key={index} menuItem={item} />
            ))}
          </div>
        )}
      </Drawer>
    </StyledDrawer>
  );
};
