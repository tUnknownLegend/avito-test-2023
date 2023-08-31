import Sider from 'antd/es/layout/Sider';
import {categories, platforms, queryParams} from '../../../public/apiConsts.ts';
import CategoryFilterSelector from '../filterSelector/category/CategoryFilterSelector.tsx';
import PlatformFilterSelector from '../filterSelector/platform/PlatformFilterSelector.tsx';

import './SiderCategory.scss';

export type changeParamFunctionPayload = {
    searchParams : URLSearchParams,
    paramValue : string,
    isCheckedState : boolean,
    queryParam: string;
}

export type filterSelectorProps = {
    checkBoxContent: Array<string>,
    queryParam: string,
}

export interface filterSelectorPropsFunc extends filterSelectorProps {
    getNewParams: (changeParamPayload : changeParamFunctionPayload) => URLSearchParams;
}

const SiderCategory = () => {
    return (
        <Sider className="category-selector" theme={'light'}>
            <CategoryFilterSelector checkBoxContent={categories} queryParam={queryParams.categories}/>
            <PlatformFilterSelector checkBoxContent={platforms} queryParam={queryParams.platforms}/>
        </Sider>
    );
};

export default SiderCategory;
