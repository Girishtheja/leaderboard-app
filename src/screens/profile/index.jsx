import React from 'react';
import { StyleSheet, ScrollView,SafeAreaView} from "react-native";
import AvatarBox from "../../components/avatarBox";
import SocialSection from "../../components/socialSection";
import ContributionsSection from "../../components/contributionsSection";

const  Profile = () => {
    return (
          <SafeAreaView style={styles.container_outer}>
          <ScrollView style={styles.scrollView}>
          <AvatarBox/>
          <SocialSection/>
          <ContributionsSection/>
          
          </ScrollView>
          </SafeAreaView>
    );
  };
export default Profile;

const styles = StyleSheet.create({
    container_outer: {
        flex: 1,
    }
  });