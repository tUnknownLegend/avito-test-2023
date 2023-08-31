import {Dropdown, Menu, MenuProps} from 'antd';
import {categories, platforms, queryParams} from '../../../public/apiConsts.ts';
import './Header.scss';
import {ItemType, MenuItemType} from 'antd/es/menu/hooks/useItems';
import {useAppDispatch} from '../../app/hooks.ts';
import {
    selectCheckedStatePlatform,
    selectPlatform, setInitialCheckedStatePlatform, setInitialPlatform,
} from '../../features/filterCatalogPlatform.ts';
import {
    selectCategory,
    selectCheckedStateCategory, setInitialCategory, setInitialCheckedStateCategory,
} from '../../features/filterCatalogCategory.ts';
import {AppDispatch} from '../../app/store.ts';
import {Link} from 'react-router-dom';

const getMenu =
    (dispatch: AppDispatch,
        updateFun: selectCheckedStateCategory | selectCheckedStatePlatform,
        items: Array<string>, paramName: string,
        setInitialFilter: setInitialCheckedStateCategory | setInitialCheckedStatePlatform):
        MenuProps['items'] =>
        items.map((value, index) => {
            return {
                label:
                (<Link to={'/?' + paramName + '=' + value} relative="path"
                    onClick={() => {
                        dispatch(updateFun(items.indexOf(value)));
                        dispatch(setInitialFilter());
                    }
                    }>
                    {value}
                </Link>),
                key: index,
            };
        });

const buttonText = ['Categories', 'Platforms'];

/**
 * Component to render header
 */
function MyHeader() {
    const dispatch = useAppDispatch();

    const menuItems: ItemType<MenuItemType>[] =
        [
            getMenu(dispatch, selectCategory, categories, queryParams.categories,
                setInitialPlatform),
            getMenu(dispatch, selectPlatform, platforms, queryParams.platforms,
                setInitialCategory),
        ].
            map((items, index) => ({
                index,
                type: 'group',
                label:
            <Dropdown
                overlayClassName="header__dropdown"
                menu={{items}}
                trigger={['hover']}
                placement={'bottomLeft'}
                destroyPopupOnHide={true}
            >
                <span className="header__item">{buttonText[index]}</span>
            </Dropdown>,
            }));

    return (
        <Menu className="header" mode="horizontal" items={menuItems} />
    );
}

export default MyHeader;
