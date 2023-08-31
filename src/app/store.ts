import {configureStore} from '@reduxjs/toolkit';
import filterCatalogCategoryReducer from '../features/filterCatalogCategory.ts';
import filterCatalogPlatformReducer from '../features/filterCatalogPlatform.ts';

const store = configureStore({
    reducer: {
        filterCatalogCategory: filterCatalogCategoryReducer,
        filterCatalogPlatform: filterCatalogPlatformReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
