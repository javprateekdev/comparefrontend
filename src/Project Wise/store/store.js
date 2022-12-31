import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import property1Reducer from './property1Slice';
import property2Reducer from './property2Slice';
import property3Reducer from './property3Slice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
        property1:property1Reducer,
        property2:property2Reducer,
        property3:property3Reducer
    }
});

export default store;