import { Box } from '@mui/material';

import { NavigationDrawer } from './navigationDrawer/NavigationDrawer';

interface Props {
  children: React.ReactNode;
  currentMenu?: string;
}

export const Layout = ({ children, currentMenu }: Props) => {
  return (
    <div className="flex h-full bg-background-dark pt-5">
      <NavigationDrawer
        menuItems={{
          primary: [
            {
              title: 'Asset management',
              isActive: currentMenu === 'Asset management' || false,
            },
            {
              title: 'Node operation',
              isActive: currentMenu === 'Node operation' || false,
            },
          ],
          secondary: [
            { title: 'Support' },
            { title: 'FAQs' },
            { title: 'Credentials' },
          ],
        }}
        drawerWidth={22.7}
      />
      <Box
        component="main"
        className="h-[92%] w-9/12 flex-grow overflow-y-auto bg-background-dark"
      >
        {children}
      </Box>
    </div>
  );
};
