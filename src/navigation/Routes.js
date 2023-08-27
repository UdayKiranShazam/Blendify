import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './BottomNavigation';
import { AuthContext } from '../context/AuthContext';
import StartScreen from '../screens/StartScreen';

const Routes = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!isAuthenticated && <StartScreen />}
      {isAuthenticated && <Tabs />}
    </NavigationContainer>
  );
};

export default Routes;
