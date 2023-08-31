import Sider from 'antd/es/layout/Sider';
import CategoryFilterSelector from '../filterSelector/category/CategoryFilterSelector.tsx';
import PlatformFilterSelector from '../filterSelector/platform/PlatformFilterSelector.tsx';
import {
    filterStateType,
    setCheckedStatePlatform,
} from '../../features/filterCatalogPlatform.ts';
import './SiderCategory.scss';
import {setCheckedStateCategory} from '../../features/filterCatalogCategory.ts';

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

export interface filterSelectorPropsFunc<setCheckedStateType> extends filterSelectorProps {
    getNewParams: (changeParamPayload : changeParamFunctionPayload) => URLSearchParams;
    setCheckedState: setCheckedStateType
    checkedState: filterStateType
}

const SiderCategory = () => {
    return (
        <Sider className="category-selector" theme={'light'}>
            <CategoryFilterSelector/>
            <PlatformFilterSelector/>
        </Sider>
    );
};

export default SiderCategory;
