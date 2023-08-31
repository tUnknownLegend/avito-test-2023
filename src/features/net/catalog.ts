import {createSlice} from '@reduxjs/toolkit';

export const filterCatalogReducerSlice = createSlice({
    name: 'filterCatalog',
    initialState: {
        value: '',
    },
    reducers: {
        save: (state, action) => {
            state.value = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const {save} = filterCatalogReducerSlice.actions;

export default filterCatalogReducerSlice.reducer;
