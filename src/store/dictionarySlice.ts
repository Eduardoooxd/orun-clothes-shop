import { dictionary as pt } from '@/dictionaries/pt';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface DictionaryState {
    dictionary: Dictionary;
}

const initialState: DictionaryState = {
    dictionary: pt,
};

const dictionarySlice = createSlice({
    name: 'dictionary',
    initialState,
    reducers: {
        setDictionary(state, action: PayloadAction<Dictionary>) {
            state.dictionary = action.payload;
        },
    },
});

export const { setDictionary } = dictionarySlice.actions;
export default dictionarySlice.reducer;
