import {Carousel, Layout} from 'antd';

import './ProductPage.scss';
import CarouselProduct from '../../components/carouselProduct/carouselProduct.tsx';
import ProductDescription from '../../components/productDescription/ProductDescription.tsx';
import {Await, useLoaderData} from 'react-router-dom';
import React from 'react';
import {errorHandler} from '../../app/router.tsx';
import {catalogItem} from '../catalog/CatalogPage.tsx';
import WindowsLogo from '../../../public/logos/windows/WindowsLogo.tsx';

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

// const platforms = {
//     'PC (Windows)': <WindowsLogo externalClassName={'item-card__logo'}/>,
//     'Web Browser': <WindowsLogo externalClassName={'item-card__logo'}/>,
// };
//
// export type platformNames = keyof typeof platforms;
// export type platformLogos = typeof platforms[platformNames];

function ProductPage() {
    const data = useLoaderData();
    return (
        <React.Suspense fallback={<p>Loading data...</p>}>
            <Await resolve={data.results}
                children={([responseCode, results]) => {
                    const errorsHandled = errorHandler(responseCode);
                    if (errorsHandled) {
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

                        return (
                            <Layout className="product-page-container">
                                <CarouselProduct imgs={imgs.reverse()}/>
                                <ProductDescription
                                    title={'Description'}
                                    data={basiInfo}
                                />
                                <ProductDescription
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
