import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, SafeAreaView, Text, Button, FlatList, Image, TouchableOpacity } from 'react-native';
//import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { connect, useDispatch } from 'react-redux';
import { addNumber, axiosSearch } from '../actions';
import colors from '../constants/colors';
import { RowItem } from '../components/RowItem';
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';


class Home extends React.Component {
  componentDidMount() {
    this.props.axiosSearch();
  }
  render() {
    return (
      <SafeAreaView style={[styles.container]}>
        <StatusBar backgroundColor={colors.white} style="light" />
        <View style={styles.backButton}>
          <RowItem
            title=""
            onPress={() => { this.props.navigation.openDrawer() }}
            leftIcon={
              <Feather name="menu" size={24} color="white"/>
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
        <View style={styles.listContainer}>
          <FlatList
            data={this.props.images}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (

              <TouchableOpacity onPress={() => this.props.navigation.push('ImageDetails', item)}>
                <View style={styles.box} key={item.id}>
                  <Image
                    resizeMode='cover'
                    style={styles.image}
                    source={{
                      uri: item.urls.thumb,
                    }}
                  />
                  <View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}

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
  logoContainer: {
    paddingTop: 40,
    paddingBottom: 40,
  },
  logo: {
    height: 95,
    width: 135,
  },
  title: {
    color: colors.black,
    fontSize: 20,
  },
  text: {
    color: colors.black,
  },
  listContainer: {

  },
  image: {
    height: 150,
    width: 150,
  },
  box: {
    overflow: 'hidden',
    width: '100%',
    flex: 1,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 5,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: { width: 20, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  }
});

const mapStateToProps = (state) => {
  return {
    numbers: state.imagesReducer.numbers,
    images: state.imagesReducer.images
  }
}

//const mapStateToProps = ({ images }) => ({ images });
const mapDispatchToProps = (dispatch) => ({
  addNumber: () => dispatch({ type: 'ADD_NUMBER' }),
  axiosSearch: () => dispatch(axiosSearch()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);