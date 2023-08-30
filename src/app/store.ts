import {configureStore} from '@reduxjs/toolkit';
import filterCatalogReducer from '../features/net/catalog.ts';

export default configureStore({
    reducer: {
        filterCatalog: filterCatalogReducer,
    },
});
