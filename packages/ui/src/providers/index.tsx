import { ReactNode } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { PaperProvider } from './paper';

type UIProviderProps = {
  children: ReactNode;
};

export const UIProvider = ({ children }: UIProviderProps) => {
  return (
    <SafeAreaProvider style={{ backgroundColor: 'white', flex: 1 }}>
      <PaperProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
        </GestureHandlerRootView>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export * from './paper';
