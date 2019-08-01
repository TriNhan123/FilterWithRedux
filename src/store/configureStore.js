import { createStore, combineReducers, applyMiddleware } from 'redux';
import departmentReducer from '../reducers/departmentReducer'
import thunk from 'redux-thunk';


const configureStore = () => {
    const store = createStore(
        combineReducers({
            departmentReducer
        }),
        applyMiddleware(thunk)
    )
    return store;
}
export default configureStore;