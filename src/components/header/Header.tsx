import {Dropdown, Menu, MenuProps} from 'antd';
import {categories, platforms, queryParams} from '../../../public/apiConsts.ts';

import './Header.scss';
import {Link} from 'react-router-dom';
import {ItemType, MenuItemType} from 'antd/es/menu/hooks/useItems';

const categoriesMenu: MenuProps['items'] = categories.map((value, index) => {
    return {
        label:
            <Link to={'?' + queryParams.categories + '=' + value}>{value}</Link>,
        key: index,
    };
});

const platformMenu: MenuProps['items'] = platforms.map((value, index) => {
    return {
        label:
            <Link to={'?' + queryParams.platforms + '=' + value}>{value}</Link>,
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
            <Dropdown menu={{items}} trigger={['click', 'hover']} autoAdjustOverflow={true}>
                <span>{buttonText[index]}</span>
            </Dropdown>,
    }));

    return (
        <Menu className="header" mode="horizontal" items={menuItems} />
    );
}

export default MyHeader;
