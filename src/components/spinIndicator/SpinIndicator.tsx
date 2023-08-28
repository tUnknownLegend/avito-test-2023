import {Alert, Space, Spin} from 'antd';

function SpinIndicator() {
    return (
        <Spin tip="Loading" size="large">
            <div className="content" />
        </Spin>
    );
}

export default SpinIndicator;
