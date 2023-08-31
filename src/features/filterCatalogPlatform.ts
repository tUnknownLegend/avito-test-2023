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
        selectPlatform: (state, action: PayloadAction<number>) => {
            state.value = state.value.map((isChecked, index) =>
                index === action.payload,
            );
        },
        setInitialPlatform: (state) => {
            state.value = initialState.value;
        },
    },
});

export const {
    setPlatform,
    selectPlatform,
    setInitialPlatform,
} = filterCatalogPlatformReducerSlice.actions;

export default filterCatalogPlatformReducerSlice.reducer;

export type setCheckedStatePlatform = typeof filterCatalogPlatformReducerSlice.actions.setPlatform
export type selectCheckedStatePlatform = typeof filterCatalogPlatformReducerSlice.actions.selectPlatform
export type setInitialCheckedStatePlatform =
    typeof filterCatalogPlatformReducerSlice.actions.setInitialPlatform

