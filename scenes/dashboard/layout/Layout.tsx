import { Box } from '@mui/material';

import { NavigationDrawer } from './navigationDrawer/NavigationDrawer';

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div className="flex h-full bg-background-dark pt-5">
      <NavigationDrawer
        menuItems={{
          primary: [{ title: 'Asset management' }, { title: 'Node operation' }],
          secondary: [
            { title: 'Support' },
            { title: 'FAQs' },
            { title: 'Credentials' },
          ],
        }}
        drawerWidth={20}
      />
      <Box component="main" className="h-full flex-grow bg-background-dark">
        {children}
      </Box>
    </div>
  );
};
