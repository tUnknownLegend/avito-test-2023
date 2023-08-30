import Sider from 'antd/es/layout/Sider';
import FilterSelector from '../filterSelector/FilterSelector.tsx';
import {categories, platforms, queryParams} from '../../../public/apiConsts.ts';
import './SiderCategory.scss';

const SiderCategory = () => {
    return (
        <Sider className="category-selector" theme={'light'}>
            <FilterSelector checkBoxContent={categories} queryParam={queryParams.categories}/>
            <FilterSelector checkBoxContent={platforms} queryParam={queryParams.platforms}/>
        </Sider>
    );
};

export default SiderCategory;
