import {combineReducers} from 'redux';
import sessionReducer from './session';
import productReducer from './product';
// import productReducer from './product';
// import cartReducer from './cart';

export default combineReducers({
    sessionState: sessionReducer,
    productState: productReducer,
    // cartState: cartReducer
})
