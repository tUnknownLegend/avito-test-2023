import Sider from 'antd/es/layout/Sider';
import {Space} from 'antd';
import FilterSelector from '../filterSelector/FilterSelector.tsx';
import {categories} from '../../../public/apiConsts.ts';

const platforms = ['Browser', 'Windows'];
const SiderCategory = () => {
    return (
        <Sider className="category-selector">
            <FilterSelector checkBoxContent={categories}/>
            <Space></Space>
            <FilterSelector checkBoxContent={platforms}/>
        </Sider>
    );
};

export default SiderCategory;
