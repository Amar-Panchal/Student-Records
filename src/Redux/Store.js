import { createStore } from "redux";
import DetailReducer from "./Reducers/Reducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(DetailReducer,composeWithDevTools())

export default store