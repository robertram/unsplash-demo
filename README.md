# unsplash-demo
Unsplash React Native demo

This app loads images from the unsplash api using redux to save the information in the store.

## Expo link
[Unsplash Demo](https://expo.io/@robertram/unsplash-demo)

# Main Dependencies
- React Navigation/stack
- React Navigation/drawer
- React-native-community/hooks
- Axios
- Redux
- Redux-thunk
- Redux-promise
- Expo-linear-gradient

# Screens

## Home 
Loads with a FlatList the amount of images I allow it to fetch. 
The FlatList renders a TouchableOpacity components to allow the image to execute a function.
When the image is touched, the next screen is showed with the Stack Navigator. 

## ImageDetails
This screen is used to show the specific information from the image you touched in the Home screen. 

## Options
This screen is accesible through the Drawer navigator. Right now the Options screen is used to show information about the author of the project but it can be used to login, logout, etc. 

