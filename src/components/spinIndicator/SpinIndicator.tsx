import {Spin} from 'antd';
import './SpinIndicator.scss';

/**
 * Component to render spinner
 */
function SpinIndicator() {
    return (
        <div className={'spin-indicator'}>
            <Spin size="large"/>
            <h2>Wait for a moment...</h2>
        </div>
    );
}

export default SpinIndicator;
