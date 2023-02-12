import { StatusBar } from 'expo-status-bar';
// import { View } from 'react-native';
// import HomeScreen from './screens/HomeScreen';
import { useColorScheme } from 'react-native';
import PlannerScreen from './screens/PlannerScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation';
import useCachedResourced from './hooks/useCachedResources';
import { SafeAreaFrameContext } from 'react-native-safe-area-context';


export default function App() {

  const isLoaded = useCachedResourced();
  const colorScheme = useColorScheme();
  console.log(isLoaded)

  if (isLoaded) {
    return (
      <SafeAreaProvider>
        {/* <HomeScreen /> */}
        <Navigation colorScheme={colorScheme} />
        <StatusBar style="auto" />
      </SafeAreaProvider>
    );
  } else {
    return null;
  }
}
