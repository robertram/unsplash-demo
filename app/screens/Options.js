import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Linking,
  Alert,
  StatusBar,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../constants/colors';
import { RowItem, RowSeparator } from '../components/RowItem';

const openLink = url =>
  Linking.openURL(url).catch(() =>
    Alert.alert('Sorry, something went wrong.', 'Please try again later.')
  );

export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />

      <ScrollView>
        <RowItem
          title="Themes"
          onPress={() => alert('In development')}
          rightIcon={
            <Entypo name="chevron-right" size={20} color={colors.blue} />
          }
        />

        <RowSeparator />

        <RowItem
          title="My Website"
          onPress={() =>
            openLink(
              'http://robertdevops.com/'
            )
          }
          rightIcon={<MaterialCommunityIcons name="web" size={24} color={colors.blue} />}
        />

        <RowSeparator />

        <RowItem
          title="LinkedIn"
          onPress={() => openLink('https://www.linkedin.com/in/robert-ramirez-marin/')}
          rightIcon={<FontAwesome name="linkedin-square" size={24} color={colors.blue} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};