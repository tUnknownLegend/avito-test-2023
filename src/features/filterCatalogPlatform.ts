import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {platforms} from '../../public/apiConsts.ts';

export type filterStateType = Array<boolean>
export interface filterCatalogPlatformState {
    value: filterStateType
}

const initialState: filterCatalogPlatformState = {
    value: platforms.map((value) => location.search.includes(value)),
};

export const filterCatalogPlatformReducerSlice = createSlice({
    name: 'filterCatalogPlatform',
    initialState,
    reducers: {
        setPlatform: (state, action: PayloadAction<number>) => {
            state.value = state.value.map((isChecked, index) =>
                index === action.payload ? !isChecked : isChecked,
            );
        },
    },
});

export const {setPlatform} = filterCatalogPlatformReducerSlice.actions;

export default filterCatalogPlatformReducerSlice.reducer;

export type setCheckedStatePlatform = typeof filterCatalogPlatformReducerSlice.actions.setPlatform
