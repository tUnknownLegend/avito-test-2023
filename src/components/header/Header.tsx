import {Menu, MenuProps} from 'antd';
import {Header} from 'antd/es/layout/layout';

function MyHeader() {
    const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
        key,
        label: `nav ${key}`,
    }));

    return (
        <Header className="header">
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
        </Header>
    );
}

export default MyHeader;
