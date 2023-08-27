import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { Colors } from '../constants/Colors';
import HeaderTitle from '../components/HeaderTitle';
import { Slides } from '../components/Slides';
import { ImageSlides } from '../components/ImageSlides';
import ContentBox from '../components/ContentBox';
import { AuthContext } from '../context/AuthContext';
import Toast from 'react-native-toast-message';

const HomeScreen = () => {
  const { user, logOut } = useContext(AuthContext);
  const userProfile = user ? JSON.parse(user) : null;

  useEffect(() => {
    successToast();
  }, []);

  const successToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Authenticated successfully',
      visibilityTime: 2000
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleCtn}>
        <HeaderTitle title={'Explore'} onPress={logOut} />
      </View>
      <View style={styles.imgsCtn}>
        <FlatList
          data={Slides}
          key={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={<View style={{ marginHorizontal: 5 }} />}
          ListFooterComponent={<View style={{ marginHorizontal: 5 }} />}
          renderItem={({ item }) => {
            return (
              <View style={styles.innerImgCtn}>
                <View style={styles.imgHolder}>
                  <Image source={item.image} style={styles.img} />
                </View>
                <Text style={styles.username}>{item.username}</Text>
              </View>
            );
          }}
        />
      </View>
      <View style={styles.contentCtn}>
        <FlatList
          data={ImageSlides}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={<View style={{ margin: 15 }} />}
          ListFooterComponent={<View style={{ margin: 30 }} />}
          renderItem={({ item }) => {
            return (
              <ContentBox
                image={item.profile}
                backgroundImg={item.contentImage}
                profilename={userProfile?.username}
              />
            );
          }}
        />
      </View>
      <Toast />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  },
  titleCtn: {
    marginTop: 20,
    marginHorizontal: 13,
  },
  imgsCtn: {
    marginTop: 25,
    marginBottom: 10
  },
  innerImgCtn: {
    alignItems: 'center'
  },
  imgHolder: {
    width: 70,
    height: 70,
    borderRadius: 70,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
    borderColor: Colors.cornFlowerBlue
  },
  img: {
    width: 60,
    height: 60,
    resizeMode: 'contain'
  },
  username: {
    paddingTop: 2,
    color: Colors.black,
    fontSize: 14,
    fontWeight: '800'
  },
  contentCtn: {
    flex: 1,
    //marginTop: 20,
    marginRight: 5,
    marginLeft: 5
  }
});

export default HomeScreen;
