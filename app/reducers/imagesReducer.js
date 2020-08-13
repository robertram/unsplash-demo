import {
  GET_IMAGES_START,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_FAILURE
} from '../actions/types';

const initialState = {
  searchTerm: '',
  images: [],
  fetching: false,
  error: null,
  numbers: [{key: 1, name: 'robert'}, {key: 1, name: 'felipe'}],
}

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_IMAGES_START:
      return {
        ...state,
        fetching: true,
      }
    case GET_IMAGES_SUCCESS:
      return {
        ...state,
        images: action.data,
        fetching: false,
        error: null,
      }
    case GET_IMAGES_FAILURE:
      return {
        ...state,
        images: action.data,
        fetching: false,
      }
    default:
      return state;
  }
}

export default imagesReducer;