import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../constants/Colors';

const HeaderTitle = ({ title, onPress }) => {
  return (
    <View style={styles.ctn}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.iconHolder}>
          <Icon name="camera" color={Colors.black} size={20} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={onPress} style={styles.iconHolder}>
          <Icon name="logout" color={Colors.black} size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ctn: {
    //marginHorizontal: 20,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  iconHolder: {
    height: 30,
    width: 30,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.secondary
  },
  title: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.black
  }
});

export default HeaderTitle;
