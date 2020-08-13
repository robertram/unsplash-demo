import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  Image,
  View,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import colors from '../constants/colors';
import { RowItem } from '../components/RowItem';

export default ({ route, navigation }) => {
  const { id, alt_description, urls, created_at, description, likes, user } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.white} style="light" />
      <View style={styles.backButton}>
        <RowItem
          title="Back"
          onPress={() => { navigation.goBack() }}
          options
          leftIcon={
            <Ionicons name="ios-arrow-back" size={24} color="white" />
          }
        />
      </View>
      <View style={styles.logoContainer}>
        <Image
          resizeMode='cover'
          style={styles.logo}
          source={require('../../app/assets/app-logo.png')}
        />
      </View>
      <View style={styles.box}>
        <Image
          resizeMode='cover'
          style={styles.image}
          source={{
            uri: urls.small,
          }}
        />
      </View>


      <View style={styles.detailsContainer}>
        <Text style={styles.text}>{alt_description}</Text>

        <View style={styles.likesContainer}>
          <AntDesign name="heart" size={10} color={colors.gray} />
          <Text style={styles.likes}>{likes} Likes</Text>
        </View>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
  },
  backButton: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'baseline'
  },
  headerIcon: {
    margin: 10
  },
  logoContainer: {
    paddingTop: 20,
    paddingBottom: 40,
  },
  logo: {
    height: 95,
    width: 135,
  },
  image: {
    height: 335,
    width: 335,
  },
  box: {
    overflow: 'hidden',
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 5,
  },
  text: {
    color: colors.white,
    fontWeight: 'normal',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    maxWidth: 155,
    textAlign: 'left',
    marginHorizontal: 0
  },
  likes: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 21,
    marginLeft: 10,
  },
  likesContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  detailsContainer: {
    flex: 1,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});