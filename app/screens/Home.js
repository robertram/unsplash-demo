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
import { LinearGradient } from 'expo-linear-gradient';



class Home extends React.Component {
  componentDidMount() {
    this.props.axiosSearch();
  }
  render() {
    return (
      
      <SafeAreaView style={[styles.container]}>
        <LinearGradient
          colors={[colors.background, colors.background2 ]}
          style={styles.linearGradient}
        >
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
            contentContainerStyle={styles.imagesList}
            numColumns={2}
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
        </LinearGradient>
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
  linearGradient:{
    flex: 2,
    alignItems: 'center',
    alignSelf: "stretch"
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
  imagesList: {
    flexDirection: 'column', 
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 40
  },
  image: {
    height: 150,
    width: 150,
  },
  box: {
    overflow: 'hidden',
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 10,
    backgroundColor: colors.white,
    borderRadius: 5,
    shadowColor: 'black',
    shadowOpacity: 0.75,
    shadowRadius: 70,
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