import React from 'react';
import { Animated, StyleSheet, TouchableOpacity } from 'react-native';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import Entypo from 'react-native-vector-icons/Entypo';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Colors } from '../constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MessageScreen from '../screens/MessageScreen';
import NotificationScreen from '../screens/NotificationScreen';

const Tabs = () => {
  const renderIcon = (routeName) => {
    let icon = '';

    switch (routeName) {
      case 'Home':
        icon = 'home';
        break;
      case 'Messages':
        icon = 'message';
        break;
      case 'Profile':
        icon = 'user';
        break;
      case 'Notifications':
        icon = 'bell';
        break;
    }

    return <Entypo name={icon} size={25} color={Colors.white} />;
  };

  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    let show = false;
    if (
      routeName !== 'Messages' &&
      selectedTab !== 'Messages' &&
      routeName !== 'Notifications' &&
      selectedTab !== 'Notifications'
    ) {
      show = true;
    } else {
      show = false;
    }
    return (
      <TouchableOpacity onPress={() => show && navigate(routeName)} style={styles.tabbarItem}>
        {renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <CurvedBottomBar.Navigator
      type="DOWN"
      height={60}
      circleWidth={60}
      bgColor={Colors.primary}
      initialRouteName="Home"
      borderTopLeftRight
      screenOptions={{
        headerShown: false
      }}
      renderCircle={() => (
        <Animated.View style={styles.btnCircleUp}>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="add-sharp" size={25} color={Colors.grey} />
          </TouchableOpacity>
        </Animated.View>
      )}
      tabBar={renderTabBar}>
      <CurvedBottomBar.Screen name="Home" position="LEFT" component={HomeScreen} />
      <CurvedBottomBar.Screen name="Messages" position="LEFT" component={MessageScreen} />
      <CurvedBottomBar.Screen
        name="Profile"
        component={ProfileScreen}
        position="RIGHT"
        options={{
          tabBarVisible: false,
          tabBarStyle: { display: 'none' }
        }}
      />
      <CurvedBottomBar.Screen
        name="Notifications"
        position="RIGHT"
        component={NotificationScreen}
      />
    </CurvedBottomBar.Navigator>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  shawdow: {
    elevation: 0
  },
  button: {
    flex: 1,
    justifyContent: 'center'
  },
  bottomBar: {
    borderRadius: 0
  },
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8E8E8',
    bottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray'
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 30,
    height: 30
  }
});

export default Tabs;
