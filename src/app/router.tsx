import {
    createBrowserRouter, createRoutesFromElements, Route,
} from 'react-router-dom';

import App from '../App.tsx';
import ErrorPage from '../pages/errorPage/ErrorPage.tsx';
import CatalogPage from '../pages/catalogPage/CatalogPage.tsx';
import ProductPage from '../pages/productPage/ProductPage.tsx';
import NotFoundPage from '../pages/notFoundPage/NotFoundPage.tsx';
import {apiPaths, queryParams} from '../../public/apiConsts.ts';
import NetRequest from '../common/net.ts';

const catalogLoader = async ({request} : {request: Request}) => {
    const params = new URLSearchParams(request.url.split('?')[1]).toString();
    return NetRequest.makeGetRequest(
        (params.includes(queryParams.categories) ?
            apiPaths.filter :
            apiPaths.category) + '?' +
        params,
    );
};

const gameLoader = async ({params}: {params: object}) => {
    if ('gameID' in params) {
        return NetRequest.makeGetRequest(apiPaths.product + '?id=' + params.gameID ?? '');
    } else {
        return Error('wrong game ID');
    }
};
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
            <Route path='*' element={<NotFoundPage/>}/>
        </Route>,
    ));


export const errorHandler = (status: number) => {
    switch (status) {
    case 200:
        return null;
    case 404:
        return (<NotFoundPage/>);
    case 0:
        return (<NotFoundPage/>);
    default:
        return (<ErrorPage/>);
    }
};

export default router;
