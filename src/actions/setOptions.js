import { SET_OPTIONS } from '../constants/department'; 

export const setOptions = (options) => dispatch => {
      dispatch({
          type: SET_OPTIONS,
          options,
      })
  };