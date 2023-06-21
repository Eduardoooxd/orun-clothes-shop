import { Product } from '@/lib/shopify/types';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface ProductsState {
    products: Product[];
    categories: string[];
}

const initialState: ProductsState = {
    products: [],
    categories: [],
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts(state, action: PayloadAction<Product[]>) {
            state.products = action.payload;
        },
        setCategories(state, action: PayloadAction<string[]>) {
            state.categories = action.payload;
        },
    },
});

export const { setProducts, setCategories } = productsSlice.actions;
export default productsSlice.reducer;
