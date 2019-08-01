import { SET_DEPARTMENT } from '../constants/department'; 

export const setDepartment = (department) => dispatch => {
    // console.log('[Landing:updateToken] - run');
    // console.log('[Landing:updateToken] - token:', token);
      dispatch({
          type: SET_DEPARTMENT,
          department,
      })
  };