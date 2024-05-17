'use client';
import { Drawer, DrawerProps, styled, SxProps, Theme } from '@mui/material';
import { MenuItemProps, MenuItem } from './MenuItem';
import { Key } from 'react';

interface Props {
  drawerWidth: number;
  menuItems: {
    primary: MenuItemProps[];
    secondary: MenuItemProps[];
  };
  onMenuItemClick: (title: string) => void;
}

interface StyledDrawerProps extends DrawerProps {
  width?: number | string;
  sx?: SxProps<Theme>;
}

const StyledDrawer = styled(Drawer)<StyledDrawerProps>(({ theme, width = 22.7 }) => ({
  width: `${width}%`,
  '& .MuiDrawer-paper': {
    width: `${width}%`,
    boxSizing: 'border-box',
    backgroundColor: theme.palette.surfaceContainerLow.main,
    border: 'none',
    borderRadius: '1rem',
    top: '9%',
    height: '91%',
    padding: '0.375rem',
    display: 'flex',
    flexDirection: 'column',
    justify: 'space-between',
  },
}));

export const NavigationDrawer = ({
  drawerWidth,
  menuItems,
  onMenuItemClick,
}: Props) => {
  return (
    <StyledDrawer width={drawerWidth} variant="permanent" open>
      <div className="flex flex-col justify-between h-full">
        <div>
          {menuItems.primary.map((item: MenuItemProps, index: Key) => (
            <MenuItem key={index} menuItem={item} onClick={onMenuItemClick} />
          ))}
        </div>
        <div className="mt-auto">
          {menuItems.secondary.map((item: MenuItemProps, index: Key) => (
            <MenuItem key={index} menuItem={item} onClick={onMenuItemClick} />
          ))}
        </div>
      </div>
    </StyledDrawer>
  );
};