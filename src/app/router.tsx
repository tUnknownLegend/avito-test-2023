import {
    BrowserRouter, createBrowserRouter, createRoutesFromElements, defer, Route, Routes,
} from 'react-router-dom';

import App from '../App.tsx';
import ErrorPage from '../pages/errorPage/ErrorPage.tsx';
import CatalogPage from '../pages/catalog/CatalogPage.tsx';
import ProductPage from '../pages/product/ProductPage.tsx';
import NotFoubdPage from '../pages/notFoundPage/NotFoubdPage.tsx';
import {ApiPaths} from '../../public/apiConsts.ts';
import Request from '../common/net.ts';

const router = createBrowserRouter(
    createRoutesFromElements(

        <Route
            element={<App/>}
        >
            <Route
                element={<CatalogPage/>}
                path="/"
                // loader={async () => {
                //     const results = fetch(
                //         `${ApiPaths.base}/${ApiPaths.category}`,
                //         {mode: 'no-cors'},
                //     ).then((response) => response.json());
                //     return defer({results});
                // }
                loader={async () => Request.makeGetRequest(ApiPaths.category)}
                errorElement={<ErrorPage/>}
            />
            <Route
                element={<ProductPage/>}
                path="/game/:gameID"
                loader={
                    async ({params}) =>
                        Request.makeGetRequest(ApiPaths.product + '?id=' + params.gameID ?? '')
                }
                errorElement={<ErrorPage/>}
            />
            <Route path='*' element={<NotFoubdPage />}/>
            <Route path='/500error' element={<ErrorPage />}/>
        </Route>,
    ));


export const errorHandler = (status: number) => {
    switch (status) {
    case 200:
        return null;
    case 404: return (<NotFoubdPage />);
    default: return (<ErrorPage />);
    }
};

export default router;
