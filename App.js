import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login';

import RootStack from './navigators/RootStack';
import QrGenerate from './screens/QrGenerate';
import { VisitorProvider } from './context/VisitorContextProvider';

export default function App() {
  return (
    //<RootStack />
    <VisitorProvider>
    <QrGenerate />
    </VisitorProvider>
  );
}