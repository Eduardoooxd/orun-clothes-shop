import { Product } from '@/lib/product';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface SearchState {
    search: string;
    products: Product[];
}

const initialState: SearchState = {
    search: '',
    products: [],
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearch(state, action: PayloadAction<string>) {
            state.search = action.payload;
        },
        setProducts(state, action: PayloadAction<Product[]>) {
            state.products = action.payload;
        },
    },
});

export const { setSearch, setProducts } = searchSlice.actions;
export default searchSlice.reducer;
