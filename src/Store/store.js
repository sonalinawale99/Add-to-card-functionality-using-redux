import { createStore } from 'redux';
import rootReducer from '../Reducers/rooteReducer';


const store = createStore(rootReducer);

export default store;
