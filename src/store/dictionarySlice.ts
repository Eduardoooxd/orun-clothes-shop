import { Locale } from '@/config/i18nConfig';
import { Dictionary } from '@/dictionaries/dictionaries';
import { dictionary as pt } from '@/dictionaries/pt';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface DictionaryState {
    dictionary: Dictionary;
    locale: Locale;
}

const initialState: DictionaryState = {
    dictionary: pt,
    locale: 'pt',
};

const dictionarySlice = createSlice({
    name: 'dictionary',
    initialState,
    reducers: {
        setDictionary(state, action: PayloadAction<Dictionary>) {
            state.dictionary = action.payload;
        },
        setLocale(state, action: PayloadAction<Locale>) {
            state.locale = action.payload;
        },
    },
});

export const { setDictionary, setLocale } = dictionarySlice.actions;
export default dictionarySlice.reducer;
