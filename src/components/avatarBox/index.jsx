import React from "react";
import { StyleSheet, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";

const AvatarBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.AvatarOuterContainer}>
        <View style={styles.AvatarContainer}>
          <Ionicons
            name="person-outline"
            size={hp("20%")}
            color="#000"
            style={styles.avatar}
          />
          <View style={styles.editContainer}>
          <Ionicons
              name="person-outline"
              size={hp("3%")}
              color="#000"
              style={{textAlign: 'center'}}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
export default AvatarBox;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  AvatarOuterContainer: {
    width: wp("100%"),
    height: hp("35%"),
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#a0e7e1",
    borderBottomRightRadius: 70,
    padding: wp("5%"),
  },
  AvatarContainer: {
    backgroundColor: "#fff",
    borderRadius: 200,
    width: hp("30%"),
    height: hp("30%"),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  editContainer: {
    position: "absolute",
    display: 'flex',
    right: 0,
    bottom: 0,
    width: hp("5%"),
    height: hp("5%"),
    backgroundColor: '#fff',
    borderRadius: 100,
    justifyContent: 'center'
  },
  editAvatar: {
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  avatar: {
    //   test
  }
});
