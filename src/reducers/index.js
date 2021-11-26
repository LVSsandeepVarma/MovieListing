import favReducer from "./fav";
import moviesdata from './moviesdata'
import { combineReducers } from "redux";

const allReducers=combineReducers({
    addfavs:favReducer,
    moviesdata:moviesdata
})

export default allReducers