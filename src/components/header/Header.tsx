import {Dropdown, Menu, MenuProps} from 'antd';
import {categories, platforms, queryParams} from '../../../public/apiConsts.ts';

import './Header.scss';
import {Link} from 'react-router-dom';

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

function MyHeader() {
    const menuItems: MenuProps['items'] = [categoriesMenu, platformMenu].map((items, index) => ({
        index,
        label:
            <Dropdown menu={{items}} trigger={['click']} autoAdjustOverflow={true}>
                <span>{buttonText[index]}</span>
            </Dropdown>,
    }));

    return (
        <Menu className="header" mode="horizontal" items={menuItems} />
    );
}

export default MyHeader;
