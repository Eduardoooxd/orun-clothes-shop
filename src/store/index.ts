import { configureStore } from '@reduxjs/toolkit';
import dictionaryReducer from './dictionarySlice';
import productsReducer from './productsSlice';
import searchReducer from './searchSlice';

export const store = configureStore({
    reducer: {
        search: searchReducer,
        dictionary: dictionaryReducer,
        products: productsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
