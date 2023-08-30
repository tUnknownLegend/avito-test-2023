import {
    createBrowserRouter, createRoutesFromElements, Route,
} from 'react-router-dom';

import App from '../App.tsx';
import ErrorPage from '../pages/errorPage/ErrorPage.tsx';
import CatalogPage from '../pages/catalog/CatalogPage.tsx';
import ProductPage from '../pages/product/ProductPage.tsx';
import NotFoubdPage from '../pages/notFoundPage/NotFoubdPage.tsx';
import {apiPaths, queryParams} from '../../public/apiConsts.ts';
import NetRequest from '../common/net.ts';

const catalogLoader = async () =>
    // NetRequest.makeGetRequest(apiPaths.category + location.search);
    NetRequest.makeGetRequest(
        (location.search.includes(queryParams.categories) ?
            apiPaths.filter :
            apiPaths.category) +
    location.search,
    );

const gameLoader = async ({params}: { params: { gameID: string } }) =>
    NetRequest.makeGetRequest(apiPaths.product + '?id=' + params.gameID ?? '');

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            element={<App/>}
        >
            <Route
                element={<CatalogPage/>}
                path="/"
                loader={catalogLoader}
                errorElement={<ErrorPage/>}
            />
            <Route
                element={<ProductPage/>}
                path="/game/:gameID"
                loader={gameLoader}
                errorElement={<ErrorPage/>}
            />
            <Route path='*' element={<NotFoubdPage/>}/>
        </Route>,
    ));


export const errorHandler = (status: number) => {
    switch (status) {
    case 200:
        return null;
    case 404:
        return (<NotFoubdPage/>);
    default:
        return (<ErrorPage/>);
    }
};

export default router;
