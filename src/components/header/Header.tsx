import {Dropdown, Menu, MenuProps} from 'antd';
import {categories, platforms, queryParams} from '../../../public/apiConsts.ts';

import './Header.scss';
import {Link} from 'react-router-dom';
import {ItemType, MenuItemType} from 'antd/es/menu/hooks/useItems';
import {useAppDispatch} from '../../app/hooks.ts';
import {setPlatform} from '../../features/filterCatalogPlatform.ts';
import {setCategory} from '../../features/filterCatalogCategory.ts';

const updateFilterSelector = (updateFun: Function, array: Array<string>, value: string) =>{
    const dispatch = useAppDispatch();
    dispatch(updateFun(array.indexOf(value)));
};

const categoriesMenu: MenuProps['items'] = categories.map((value, index) => {
    return {
        label:
            <Link
                to={'?' + queryParams.categories + '=' + value}
                onClick={() => updateFilterSelector(setCategory, categories, value)}
            >
                {value}
            </Link>,
        key: index,
    };
});

const platformMenu: MenuProps['items'] = platforms.map((value, index) => {
    return {
        label:
            <Link to={'?' + queryParams.platforms + '=' + value}
                onClick={() => updateFilterSelector(setPlatform, platforms, value)}
            >
                {value}
            </Link>,
        key: index,
    };
});

const buttonText = ['Categories', 'Platforms'];

/**
 * Component to render header
 */
function MyHeader() {
    const menuItems: ItemType<MenuItemType>[] = [categoriesMenu, platformMenu].map((items, index) => ({
        index,
        type: 'group',
        label:
            <Dropdown
                overlayClassName="header__dropdown"
                menu={{items}}
                trigger={['hover']}
                placement={'bottomLeft'}
            >
                <span className="header__item">{buttonText[index]}</span>
            </Dropdown>,
    }));

    return (
        <Menu className="header" mode="horizontal" items={menuItems} />
    );
}

export default MyHeader;
