import React from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export interface MenuItemProps {
  title: string;
  href?: string;
  isActive?: boolean;
}

interface Props {
  menuItem: MenuItemProps;
}

export const MenuItem = ({ menuItem }: Props) => {
  return (
    <ListItem disablePadding>
      <ListItemButton
        className={`hover:bg-secondaryContainer.dark rounded-[6rem] px-6 py-3.5 hover:bg-secondaryContainer-dark hover:text-secondaryFixed-dark ${menuItem.isActive ? ' bg-secondaryContainer-dark text-secondaryFixed-dark' : 'text-onSurfaceVariant-dark'}`}
      >
        <ListItemText
          sx={{
            '.MuiTypography-root': {
              fontSize: '0.875rem',
              fontWeight: '500',
            },
          }}
          primary={menuItem.title}
        />
      </ListItemButton>
    </ListItem>
  );
};
