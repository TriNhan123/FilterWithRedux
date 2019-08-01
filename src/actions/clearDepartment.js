import { CLEAR_DEPARTMENT } from '../constants/department'; 

export const clearDepartment = department => dispatch => {
    // console.log('[Landing:updateToken] - run');
    // console.log('[Landing:updateToken] - token:', token);
      dispatch({
          type: CLEAR_DEPARTMENT,
          department,
      })
  };