import { ReactNode } from 'react';
import { Provider } from 'react-native-paper';

import { getPaperTheme } from './paper.theme';

type PaperProviderProps = {
  children: ReactNode;
};

export const PaperProvider = ({ children }: PaperProviderProps) => {
  const paperTheme = getPaperTheme();

  return (
    <Provider settings={{}} theme={paperTheme}>
      {children}
    </Provider>
  );
};
