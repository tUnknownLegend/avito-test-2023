import Sider from 'antd/es/layout/Sider';
import {Content} from 'antd/es/layout/layout';
import {Layout} from 'antd';

function SiderCategory() {
    return (
        <Layout>
            <Sider>left sidebar</Sider>
            <Content>main content</Content>
        </Layout>
    );
}

export default SiderCategory;
