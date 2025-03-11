import { ActivityIndicator, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { NunitoSans_400Regular, NunitoSans_700Bold, useFonts } from '@expo-google-fonts/nunito-sans';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import theme from './src/theme';
import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        {fontsLoaded ? <Routes /> : <ActivityIndicator />}
      </SafeAreaProvider>
      <StatusBar
        backgroundColor="transparent"
        barStyle={"dark-content"}
        translucent
      />
    </ThemeProvider>
  );
}


