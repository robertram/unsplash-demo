import { SEARCH_IMAGE_START } from './types';
import { GET_IMAGES_SUCCESS } from './types';
import { GET_IMAGES_FAILURE } from './types';
import axios from 'axios';

export const getImages = (images) => (
  {
    type: SEARCH_IMAGE_START,
    data: images,
  }
);

export const imageSuccess = (images) => (
  {
    type: GET_IMAGES_SUCCESS,
    data: images,
  }
);

export const imageFailure = (error) => (
  {
    type: GET_IMAGES_FAILURE,
    error: error
  }
);

const params = {
  per_page: 20
};

export async function axiosSearch() {
  return (dispatch) => {
    dispatch(getImages());
    axios.get('https://api.unsplash.com/search/photos?query=office&client_id=sk6CBTMciDoHkiXCD-GKdV5D4LrtLzCdy1yIGCLBWsA', { params })
      .then((response) => dispatch(imageSuccess(response.data.results)))
      .catch((error) => dispatch(imageFailure(error)))
  };
}

