'use client';
import React, { useState } from 'react';
import { Box } from '@mui/material';
import { NavigationDrawer } from './navigationDrawer/NavigationDrawer';
import { AssetManagement } from '../assetManagement/AssetManagement';
import { NodeOperation } from '../nodeOperation/NodeOperation';
import { Support } from '../support/Support';
import { FAQs } from '../faqs/FAQs';
import { Credentials } from '../credentials/Credentials';
import { PlusJakarta } from '@/font/index';

interface Props {
  children: React.ReactNode;
  currentMenu?: string;
}

export const Layout = () => {
  const [activeMenu, setActiveMenu] = useState('Asset Management');

  const menuItems = {
    primary: [
      { title: 'Asset Management', isActive: activeMenu === 'Asset Management', category: 'primary' as 'primary' },
      { title: 'Node Operation', isActive: activeMenu === 'Node Operation', category: 'primary' as 'primary' },
    ],
    secondary: [
      { title: 'Support', category: 'secondary' as 'secondary' },
      { title: 'FAQs', category: 'secondary' as 'secondary' },
      { title: 'Credentials', category: 'secondary' as 'secondary' },
    ],
  };

  const handleMenuItemClick = (title: string) => {
    console.log("Clicked menu item:", title);
    setActiveMenu(title);
  };

  const getContent = () => {
    switch (activeMenu) {
      case 'Asset Management':
        return <AssetManagement />;
      case 'Node Operation':
        return <NodeOperation />;
      case 'Support':
        return <Support />;
      case 'FAQs':
        return <FAQs />;
      case 'Credentials':
        return <Credentials />;
      default:
        return <div>Select a menu item</div>;
    }
  };

  return (
    <div className="flex h-full bg-background-dark pt-5">
      <NavigationDrawer drawerWidth={22.7} menuItems={menuItems} onMenuItemClick={handleMenuItemClick} />
        <Box component="main" sx={{ fontFamily: PlusJakarta, flexGrow: 1, p: 3, overflowY: 'auto', height: '92%', bg: 'background-dark' }}>
          {getContent()}
        </Box>
    </div>
  );
};