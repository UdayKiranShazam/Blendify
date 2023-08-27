import { View, StyleSheet, Image, Text, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../constants/Colors';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ContentBox = ({ image, backgroundImg, profilename }) => {

  const [likes, setLikes] = useState(25);
  const [save, setSaved] = useState(false);

  const likeApic = () => {
    if (likes <= 25) {
      setLikes(likes + 1)
    } else if(likes > 25) {
      setLikes(likes - 1)
    }
  };

  const saveApic = () => {
    if (save) {
      setSaved(false)
    } else {
      setSaved(true)
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imgTitleCtn}>
        <View style={styles.imgCtn}>
          <Image source={image} style={styles.img} />
        </View>
        <View style={styles.titleCtn}>
          <Text style={styles.titlename}>{profilename}</Text>
          <Text style={styles.email}>@{profilename}</Text>
        </View>
      </View>
      <View style={styles.bgImgCtn}>
        <ImageBackground
          source={backgroundImg}
          style={styles.contentCtn}
          imageStyle={{ borderRadius: 30 }}>
          <View style={{ flex: 1 }} />
          <View style={styles.imgOptions}>
            <View style={styles.commonStyle}>
              <TouchableOpacity style={styles.commonStyle}>
                <Entypo name="dots-three-horizontal" color={Colors.lightgrey} size={25} />
                <Text style={styles.commonText}>12</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={likeApic}  style={[styles.commonStyle, { paddingLeft: 18 }]}>
                <Entypo name="heart" color={likes === 26 ? Colors.red : Colors.lightgrey} size={25} />
                <Text style={styles.commonText}>{likes}</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.commonStyle}>
              <TouchableOpacity>
                <Feather name="send" color={Colors.lightgrey} size={25} />
              </TouchableOpacity>
              <TouchableOpacity onPress={saveApic}>
                <FontAwesome
                  name="bookmark"
                  color={save ? Colors.seagreen : Colors.lightgrey}
                  size={25}
                  style={{ paddingLeft: 16 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
    padding: 0,
    width: 385,
    height: 334,
    borderRadius: 50,
    elevation: 0,
    backgroundColor: Colors.secondary
  },
  imgTitleCtn: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingTop: 12,
    paddingLeft: 16
  },
  imgCtn: {
    width: 40,
    height: 40,
    borderWidth: 2,
    borderRadius: 40,
    borderColor: Colors.white
  },
  img: {
    width: 36,
    height: 36,
    resizeMode: 'contain'
  },
  titleCtn: {},
  titlename: {
    paddingLeft: 4,
    fontSize: 14,
    fontWeight: '800',
    color: Colors.black
  },
  email: {
    paddingLeft: 3,
    fontSize: 13,
    fontWeight: '500',
    color: Colors.grey
  },
  contentCtn: {
    width: 360,
    height: 260,
    borderRadius: 30
  },
  bgImgCtn: {
    paddingTop: 10,
    alignItems: 'center'
  },
  imgOptions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    width: 360,
    height: 47,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: Colors.slightblack
  },
  commonStyle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  commonText: {
    fontSize: 14,
    fontWeight: '600',
    paddingLeft: 3,
    color: Colors.lightgrey
  }
});

export default ContentBox;
