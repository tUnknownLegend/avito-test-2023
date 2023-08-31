import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {categories} from '../../public/apiConsts.ts';
import {filterCatalogPlatformReducerSlice, filterStateType} from './filterCatalogPlatform.ts';

export interface filterCatalogCategoryState {
    value: filterStateType
}

const initialState: filterCatalogCategoryState = {
    value: categories.map((value) => location.search.includes(value)),
};

export const filterCatalogCategoryReducerSlice = createSlice({
    name: 'filterCatalogCategory',
    initialState,
    reducers: {
        setCategory: (state, action: PayloadAction<number>) => {
            state.value = state.value.map((isChecked, index) =>
                index === action.payload ? !isChecked : isChecked,
            );
        },
    },
});

export const {setCategory} = filterCatalogCategoryReducerSlice.actions;

export default filterCatalogCategoryReducerSlice.reducer;

export type setCheckedStateCategory = typeof filterCatalogCategoryReducerSlice.actions.setCategory
