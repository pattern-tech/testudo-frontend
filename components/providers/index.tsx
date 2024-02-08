import { ReactNode } from 'react';

import { MuiThemeRegistry } from '@/components/themeRegistry/MuiThemeRegistry';
import { ReactQueryProviders } from '@/context/reactQuery';

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <MuiThemeRegistry>
      <ReactQueryProviders>{children}</ReactQueryProviders>
    </MuiThemeRegistry>
  );
};
