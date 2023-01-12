import { StatusBar } from 'expo-status-bar';
// import { View } from 'react-native';
// import HomeScreen from './screens/HomeScreen';
import PlannerScreen from './screens/PlannerScreen';
import Navigation from './navigation';
import useCachedResourced from './hooks/useCachedResources';


export default function App() {

  const isLoaded = useCachedResourced();
  console.log(isLoaded)

  if (isLoaded) {
    return (
      <>
        {/* <HomeScreen /> */}
        <Navigation />
        <StatusBar style="auto" />
      </>
    );
  } else {
    return null;
  }
}
