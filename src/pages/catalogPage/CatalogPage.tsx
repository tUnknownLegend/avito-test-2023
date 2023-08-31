import SiderCategory from '../../components/siderCategory/SiderCategory.tsx';
import {Layout} from 'antd';
import ItemCard from '../../components/itemCard/ItemCard.tsx';
import './CatalogPage.scss';
import SortBySelector from '../../components/sortBySelector/SortBySelector.tsx';
import {Await, useLoaderData} from 'react-router-dom';
import React from 'react';
import {errorHandler} from '../../app/router.tsx';
import {platformNames} from '../../../public/logos/logoMather.tsx';
import SpinIndicator from '../../components/spinIndicator/SpinIndicator.tsx';

export interface catalogItem {
    id: number,
    title: string,
    thumbnail: string,
    genre: string,
    platform: platformNames
    release_date: string
}

/**
 * View to render catalog(landing) page
 * */
function CatalogPage() {
    const data = useLoaderData() as {results: catalogItem};
    return (
        <Layout className="catalog-page-container" hasSider={true}>
            <SiderCategory/>
            <SortBySelector/>
            <React.Suspense fallback={<SpinIndicator/>}>
                <Await resolve={data.results}
                    children={([responseCode, results]) => {
                        const errorsHandled = errorHandler(responseCode);
                        if (errorsHandled) {
                            return errorsHandled;
                        } else {
                            return (
                                <div className="item-card-container">
                                    {results.map((item: catalogItem, key: number) => (
                                        <ItemCard item={item} key={key}/>
                                    ))}
                                </div>
                            );
                        }
                    }
                    }
                />
            </React.Suspense>
        </Layout>
    );
}

export default CatalogPage;
