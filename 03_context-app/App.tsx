import { StatusBar } from 'expo-status-bar';
import React, { createContext } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthContextProvider } from './context/AuthContext';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';


export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();



  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AuthContextProvider>
          <Navigation colorScheme={colorScheme} />
        </AuthContextProvider>
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
