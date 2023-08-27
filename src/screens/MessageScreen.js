import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Colors } from '../constants/Colors';

const MessageScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>View & Send your Messages Here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white
  },
  text: {
    fontSize: 20,
    color: Colors.grey
  }
});

export default MessageScreen;
