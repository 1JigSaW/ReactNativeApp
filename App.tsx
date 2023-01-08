import { StatusBar } from 'expo-status-bar';
// import { View } from 'react-native';
// import HomeScreen from './screens/HomeScreen';
import PlannerScreen from './screens/PlannerScreen';
import Navigation from './navigation';

export default function App() {
  return (
    <>
      {/* <HomeScreen /> */}
      <Navigation />
      <StatusBar style="auto" />
    </>
  );
}
