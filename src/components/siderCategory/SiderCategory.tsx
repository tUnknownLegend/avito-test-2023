import Sider from 'antd/es/layout/Sider';
import FilterSelector from '../filterSelector/FilterSelector.tsx';
import {categories} from '../../../public/apiConsts.ts';
import './SiderCategory.scss';

const platforms = ['Browser', 'Windows'];
const SiderCategory = () => {
    return (
        <Sider className="category-selector" theme={'light'}>
            <FilterSelector checkBoxContent={categories}/>
            <FilterSelector checkBoxContent={platforms}/>
        </Sider>
    );
};

export default SiderCategory;
