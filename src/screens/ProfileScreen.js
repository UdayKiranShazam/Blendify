import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import React, { useContext, useState } from 'react';
import { Colors } from '../constants/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../context/AuthContext';

const ProfileScreen = ({ navigation }) => {
  const [selectedBtn, setSelectedBtn] = useState(1);
  const [selectedTab, setSelectedTab] = useState(1);
  const { user } = useContext(AuthContext);
  const userProfile = user ? JSON.parse(user) : null;

  const changeBtn = (val) => {
    setSelectedBtn(val);
  };

  const changeTab = (val) => {
    setSelectedTab(val);
  };

  return (
    <View style={styles.container}>
      <View style={styles.Ctn}>
        <ImageBackground
          source={require('../assets/profileImages/profileTop.png')}
          style={styles.backgroundImg}>
          <View style={styles.iconsCtn}>
            <Icon
              name="arrow-left-circle-outline"
              color={Colors.white}
              size={35}
              onPress={() => navigation.navigate('Home')}
            />
            <Icon name="email-outline" color={Colors.white} size={33} />
          </View>
        </ImageBackground>
      </View>

      <View style={styles.bottomCtn}>
        <View style={styles.followersCtn}>
          <View style={[styles.flwCtn, { paddingLeft: 40 }]}>
            <Text style={styles.flwNumber}>135k</Text>
            <Text style={styles.flwText}>Followers</Text>
          </View>
          <View style={[styles.flwCtn, { paddingRight: 40 }]}>
            <Text style={styles.flwNumber}>111</Text>
            <Text style={styles.flwText}>Following</Text>
          </View>
        </View>

        <View style={styles.userInfoCtn}>
          <Text numberOfLines={5} style={styles.userInfoText}>
            My name is {userProfile.username}, I like Photography and travelling all around the
            world
          </Text>
        </View>

        <View style={styles.btnCtn}>
          <TouchableOpacity
            onPress={() => changeBtn(1)}
            style={[
              styles.btn,
              { backgroundColor: selectedBtn == 1 ? Colors.cornFlowerBlue : Colors.white }
            ]}>
            <Text
              style={[styles.btnText, { color: selectedBtn == 1 ? Colors.white : Colors.black }]}>
              Follow
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => changeBtn(2)}
            style={[
              styles.btn,
              { backgroundColor: selectedBtn == 2 ? Colors.cornFlowerBlue : Colors.white }
            ]}>
            <Text
              style={[styles.btnText, { color: selectedBtn == 2 ? Colors.white : Colors.black }]}>
              Message
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tabCtn}>
          <Text
            onPress={() => changeTab(1)}
            style={[styles.tabText, { borderBottomWidth: selectedTab == 1 ? 2 : 0 }]}>
            All
          </Text>
          <Text
            onPress={() => changeTab(2)}
            style={[styles.tabText, { borderBottomWidth: selectedTab == 2 ? 2 : 0 }]}>
            Photos
          </Text>
          <Text
            onPress={() => changeTab(3)}
            style={[styles.tabText, { borderBottomWidth: selectedTab == 3 ? 2 : 0 }]}>
            Videos
          </Text>
        </View>
        <View style={styles.scrollCtn}>
          {selectedTab === 3 ? (
            <View style={styles.noCtn}>
              <Text style={styles.noContent}>No Videos</Text>
            </View>  
          ) : (
            <ScrollView style={{ flex: 1 }}>
              <View style={styles.imgsCtn}>
                <View style={styles.imgHolder}>
                  <ImageBackground
                    source={require('../assets/profileImages/profile-1.png')}
                    style={styles.img_1}
                    imageStyle={{ borderTopLeftRadius: 40 }}
                  />
                  <View style={{ paddingLeft: 10 }}>
                    <ImageBackground
                      source={require('../assets/profileImages/profile-2.png')}
                      style={styles.img_2}
                      imageStyle={{ borderTopRightRadius: 40 }}
                    />
                    <View style={{ paddingVertical: 4 }} />
                    <ImageBackground
                      source={require('../assets/profileImages/profile-5.png')}
                      style={styles.img_3}
                    />
                  </View>
                </View>
                <View style={[styles.imgHolder, { paddingTop: 10 }]}>
                  <ImageBackground
                    source={require('../assets/profileImages/profile-3.png')}
                    style={styles.img_4}
                  />
                  <View style={{ paddingLeft: 10 }} />
                  <ImageBackground
                    source={require('../assets/profileImages/profile-4.png')}
                    style={styles.img_4}
                  />
                  <View style={{ paddingLeft: 10 }} />
                  <ImageBackground
                    source={require('../assets/profileImages/profile-6.png')}
                    style={styles.img_4}
                  />
                </View>
              </View>
              <View style={{ margin: 50 }} />
            </ScrollView>
          )}
        </View>
      </View>

      <View style={styles.profileCtn}>
        <View style={styles.profileImgCtn}>
          <Image
            source={require('../assets/profileImages/profile.png')}
            style={styles.profileImg}
          />
        </View>

        <Text style={styles.userTitle}>{userProfile.username}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  },
  Ctn: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: '30%'
  },
  backgroundImg: {
    width: Dimensions.get('window').width,
    height: '100%',
    resizeMode: 'center'
  },
  iconsCtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20
  },
  bottomCtn: {
    position: 'absolute',
    bottom: 0,
    elevation: 10,
    paddingTop: 0,
    width: Dimensions.get('window').width,
    height: '78%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: Colors.secondary
  },
  followersCtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  flwCtn: {
    paddingTop: 16
  },
  flwNumber: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.black
  },
  flwText: {
    fontSize: 14,
    color: Colors.black
  },
  profileCtn: {
    position: 'absolute',
    top: '18%',
    left: '36%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileImgCtn: {
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    backgroundColor: Colors.white,
    borderRadius: 100
  },
  profileImg: {
    width: 92,
    height: 92,
    resizeMode: 'contain'
  },
  userTitle: {
    paddingTop: 8,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.black
  },
  userInfoCtn: {
    paddingTop: 55,
    paddingHorizontal: 40
  },
  userInfoText: {
    textAlign: 'center',
    color: Colors.grey,
    fontSize: 14
  },
  btnCtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 50,
    marginTop: 30
  },
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    elevation: 5,
    borderRadius: 24,
    width: 120
  },
  btnText: {
    textAlign: 'center',
    fontSize: 14
  },
  tabCtn: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 100
  },
  tabText: {
    fontSize: 14,
    color: Colors.black,
    paddingBottom: 2,
    borderBottomColor: Colors.cornFlowerBlue
  },
  scrollCtn: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  imgsCtn: {
    width: Dimensions.get('window').width,
    height: '100%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: Colors.white
  },
  imgHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    //paddingTop: 10,
    paddingHorizontal: 10
  },
  img_1: {
    width: 200,
    height: 200,
    resizeMode: 'center'
  },
  img_2: {
    width: 164,
    height: 107,
    resizeMode: 'center'
  },
  img_3: {
    width: 164,
    height: 86,
    resizeMode: 'center'
  },
  img_4: {
    width: 118,
    height: 168,
    resizeMode: 'center'
  },
  noCtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noContent: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.grey
  },
});

export default ProfileScreen;
