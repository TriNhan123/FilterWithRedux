import * as actions from '../constants/department';

const initialState = {
    department: '',
    options: [],
  };
  
  export default function departmentReducer(state = initialState, action) {
    switch (action.type) {
        case actions.SET_DEPARTMENT:
            return {
              ...state,
              department: action.department,
            };
        case actions.CLEAR_DEPARTMENT:
            return {
            ...state,
            department: [],
            };
        case actions.SET_OPTIONS:
            return {
              ...state,
              options: action.options,
            };
        default:
            return state;
    }
  }