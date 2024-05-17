import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export interface MenuItemProps {
  title: string;
  isActive?: boolean;
  category: 'primary' | 'secondary';
}

interface Props {
  menuItem: MenuItemProps;
  onClick: (title: string) => void;
}

export const MenuItem = ({ menuItem, onClick }: Props) => {
  const buttonClass = `hover:bg-secondaryContainer-dark rounded-lg px-4 py-2 ${
    menuItem.isActive ? 'bg-secondaryContainer-dark text-secondaryFixed-dark' : 'text-onSurfaceVariant-dark'
  } ${menuItem.category === 'primary' ? 'text-lg font-bold' : 'text-base font-normal'}`;

  const handleClick = () => {
    console.log("Menu item clicked:", menuItem.title);
    onClick(menuItem.title);
  };

  return (
    <ListItem disablePadding>
      <ListItemButton
        onClick={handleClick} 
        sx={{
          '.MuiTypography-root': {
            fontSize: '0.875rem',
            fontWeight: '500',
          },
        }}
        className={`hover:bg-secondaryContainer-dark rounded-[6rem] px-6 py-3.5 ${menuItem.isActive ? 'bg-secondaryContainer-dark text-secondaryFixed-dark' : 'text-onSurfaceVariant-dark'}`}
      >
        <ListItemText primary={menuItem.title} />
      </ListItemButton>
    </ListItem>
  );
};