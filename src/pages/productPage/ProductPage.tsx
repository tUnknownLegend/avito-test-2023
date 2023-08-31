import {Layout} from 'antd';

import './ProductPage.scss';
import CarouselProduct from '../../components/carouselProduct/carouselProduct.tsx';
import ProductDescription from '../../components/productDescription/ProductDescription.tsx';
import {Await, useLoaderData} from 'react-router-dom';
import React from 'react';
import {errorHandler} from '../../app/router.tsx';
import {catalogItem} from '../catalogPage/CatalogPage.tsx';
import SpinIndicator from '../../components/spinIndicator/SpinIndicator.tsx';
import ProductBreadcrumb from '../../components/productBreadcrumb/productBreadcrumb.tsx';

type screenshotItem = {
    id: number,
    image: string
}
export interface productInfo extends catalogItem {
    publisher: string,
    developer: string,
    screenshots: Array<screenshotItem>,
    minimum_system_requirements: {
        os: string,
        processor: string,
        memory: string,
        graphics: string,
        storage: string
    }
}

/**
 * View to render product page
 * */
function ProductPage() {
    const data = useLoaderData() as {results: productInfo};
    return (
        <React.Suspense fallback={
            <SpinIndicator/>
        }>
            <Await resolve={data.results}
                children={([responseCode, results]) => {
                    const errorsHandled = errorHandler(responseCode);
                    if (errorsHandled || !(data)) {
                        return errorsHandled;
                    } else {
                        const imgs = results.screenshots.map((item: screenshotItem) => item.image);
                        imgs.push(results.thumbnail);

                        const basiInfo = {
                            title: results.title,
                            release_date: results.release_date,
                            publisher: results.publisher,
                            developer: results.developer,
                            genre: results.genre,
                        };

                        document.title = results.title;
                        return (
                            <Layout className="product-page-container">
                                <CarouselProduct imgs={imgs.reverse()}/>
                                <div className="product-title">
                                    <h1>{results.title}</h1>
                                    <ProductBreadcrumb title={results.title}/>
                                </div>
                                <ProductDescription
                                    className="product-basic-info"
                                    title={'Description'}
                                    data={basiInfo}
                                />
                                <ProductDescription
                                    className="product-system-requirements"
                                    title={'System requirements'}
                                    data={results.minimum_system_requirements}
                                />
                            </Layout>
                        );
                    }
                }}
            />
        </React.Suspense>
    );
}

export default ProductPage;
